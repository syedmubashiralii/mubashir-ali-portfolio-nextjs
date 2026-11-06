export default function Logo({ className = "h-9 w-9" }: Readonly<{ className?: string }>) {
  return (
    <span
      aria-hidden="true"
      className={`grid shrink-0 place-items-center rounded-xl bg-volt font-display text-sm font-extrabold tracking-tight text-pine-950 ${className}`}
    >
      SM
    </span>
  );
}
