import { chromium } from "playwright";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { existsSync } from "node:fs";

const distDir = path.resolve(import.meta.dirname, "..", "dist");
const resumeHtml = path.join(distDir, "resume", "index.html");
const outputPdf = path.join(distDir, "resume.pdf");

if (!existsSync(resumeHtml)) {
  console.error(`Expected built page not found: ${resumeHtml}`);
  console.error("Run `astro build` before generating the resume PDF.");
  process.exit(1);
}

const CONTENT_TYPES = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "text/javascript",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
};

// Serve the built site over local HTTP: headless Chrome refuses to load the
// cross-origin Google Fonts stylesheet from a bare file:// page, silently
// falling back to a system serif font instead of erroring.
const server = createServer(async (req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath.endsWith("/")) reqPath += "index.html";
  const filePath = path.join(distDir, reqPath);

  try {
    const s = await stat(filePath);
    if (s.isDirectory()) throw new Error("directory");
    const body = await readFile(filePath);
    res.writeHead(200, { "Content-Type": CONTENT_TYPES[path.extname(filePath)] ?? "application/octet-stream" });
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve) => server.listen(0, "127.0.0.1", resolve));
const { port } = server.address();

const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(`http://127.0.0.1:${port}/resume/`, { waitUntil: "networkidle" });
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outputPdf,
  preferCSSPageSize: true,
  printBackground: true,
});
await browser.close();
server.close();

console.log(`Wrote ${outputPdf}`);
