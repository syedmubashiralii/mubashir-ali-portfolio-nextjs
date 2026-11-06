import { industries } from "@/app/data/site";

function Row({ hidden = false }: Readonly<{ hidden?: boolean }>) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {industries.map((industry) => (
        <li key={industry} className="flex items-center whitespace-nowrap font-display text-lg font-semibold">
          {industry}
          <span className="mx-6 h-2 w-2 rounded-full bg-pine-950" aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
}

export default function IndustryMarquee() {
  return (
    <section aria-label="Industries I have shipped for" className="overflow-hidden bg-volt py-4 text-pine-950">
      <div className="flex w-max motion-safe:animate-marquee">
        <Row />
        <Row hidden />
      </div>
    </section>
  );
}
