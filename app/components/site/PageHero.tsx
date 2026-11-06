type PageHeroProps = {
  id?: string;
  eyebrow: string;
  title: string;
  description: string;
  children?: React.ReactNode;
};

export default function PageHero({ id, eyebrow, title, description, children }: PageHeroProps) {
  return (
    <section id={id} className="bg-pine-950 px-4 pt-16 pb-16 text-paper sm:px-6 lg:px-8 lg:pt-24 lg:pb-20">
      <div className="mx-auto max-w-7xl motion-safe:animate-rise">
        <p className="eyebrow text-volt">{eyebrow}</p>
        <h1 className="mt-5 max-w-4xl text-[clamp(2.6rem,6vw,4.75rem)] leading-[1] font-bold">{title}</h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-sage">{description}</p>
        {children}
      </div>
    </section>
  );
}
