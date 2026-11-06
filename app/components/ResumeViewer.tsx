import { Download, ExternalLink } from "lucide-react";
import { contact } from "@/app/data/portfolio";

export default function ResumeViewer() {
  return (
    <section id="resume" className="bg-paper px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-pine-600">Resume</p>
            <h2 className="mt-4 text-4xl leading-[1.04] font-bold sm:text-5xl">The one-file version.</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={contact.resumeUrl} download="Syed_Mubashir_Ali_Resume.pdf" className="btn btn-pine">
              <Download size={17} aria-hidden="true" /> Download PDF
            </a>
            <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              <ExternalLink size={17} aria-hidden="true" /> Open in new tab
            </a>
          </div>
        </div>

        {/* Mobile browsers rarely render PDFs in iframes, so the preview is desktop-only.
            While display:none, the lazy iframe doesn't fetch the PDF. */}
        <div className="mt-10 hidden h-[720px] overflow-hidden rounded-3xl border border-rule md:block">
          <iframe src={contact.resumeUrl} title={`${contact.name} resume`} loading="lazy" className="h-full w-full" />
        </div>
      </div>
    </section>
  );
}
