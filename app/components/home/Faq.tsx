import { Plus } from "lucide-react";
import { faqs } from "@/app/data/site";

export default function Faq() {
  return (
    <section className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow text-pine-600">Before you reach out</p>
          <h2 className="mt-4 text-4xl leading-[1.04] font-bold sm:text-5xl">Common questions.</h2>
        </div>

        <div className="border-t border-pine-950">
          {faqs.map((faq) => (
            <details key={faq.question} className="group border-b border-rule">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                {faq.question}
                <Plus size={20} className="shrink-0 transition-transform group-open:rotate-45" aria-hidden="true" />
              </summary>
              <p className="max-w-2xl pb-6 leading-7 text-moss">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
