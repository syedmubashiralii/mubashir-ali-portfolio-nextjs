type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  intro?: string;
  as?: "h1" | "h2";
  tone?: "light" | "dark";
};

export default function SectionHeading({ eyebrow, title, intro, as: Heading = "h2", tone = "light" }: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr] lg:items-end lg:gap-14">
      <div>
        <p className={`eyebrow ${isDark ? "text-volt" : "text-pine-600"}`}>{eyebrow}</p>
        <Heading className={`mt-4 text-4xl leading-[1.04] font-bold sm:text-5xl ${isDark ? "text-paper" : "text-pine-950"}`}>
          {title}
        </Heading>
      </div>
      {intro && <p className={`max-w-xl text-pretty text-base leading-7 ${isDark ? "text-sage" : "text-moss"}`}>{intro}</p>}
    </div>
  );
}
