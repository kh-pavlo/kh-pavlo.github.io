interface LabelProps {
  children: string;
}

export default function Label({ children }: LabelProps) {
  return (
    <h2 className="mb-5 text-[10px] font-medium tracking-[0.12em] text-muted uppercase dark:text-muted-dark">
      {children}
    </h2>
  );
}
