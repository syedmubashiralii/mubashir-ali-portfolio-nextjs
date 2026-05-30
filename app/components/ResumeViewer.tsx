"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, ExternalLink, FileText, Maximize2, X } from "lucide-react";
import { useState } from "react";
import { contact } from "../data/portfolio";
import { Button } from "./ui/button";

export default function ResumeViewer() {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = contact.resumeUrl;
    link.download = "Syed_Mubashir_Ali_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  return (
    <section id="resume" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-sm font-semibold uppercase text-blue-600 dark:text-blue-300">Resume</p>
          <h2 className="mt-3 text-3xl font-bold text-slate-950 sm:text-4xl dark:text-white">
            Full resume, available locally on the site.
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
            The page content now reflects the supplied PDF, and the same file can be previewed, opened, or downloaded.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-xl shadow-slate-900/10 dark:border-slate-800 dark:bg-slate-900"
        >
          <div className="flex flex-col gap-3 border-b border-slate-200 bg-slate-950 p-4 text-white dark:border-slate-800 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-white/10">
                <FileText size={19} />
              </div>
              <div>
                <h3 className="font-semibold">Syed Mubashir Ali Resume</h3>
                <p className="text-xs text-slate-300">Senior Flutter Developer | Mobile · Web · Desktop</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button
                onClick={() => setIsFullScreen(true)}
                variant="ghost"
                size="sm"
                className="rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                <Maximize2 className="h-4 w-4" /> Full Screen
              </Button>
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" /> Open
                </a>
              </Button>
              <Button
                onClick={handleDownload}
                variant="ghost"
                size="sm"
                className="rounded-full text-white hover:bg-white/10 hover:text-white"
              >
                <Download className="h-4 w-4" /> Download
              </Button>
            </div>
          </div>

          <div className="h-[520px] bg-slate-100 dark:bg-slate-950 md:h-[680px]">
            <iframe src={contact.resumeUrl} title="Syed Mubashir Ali Resume" className="h-full w-full" />
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-slate-950/95 p-3 backdrop-blur"
          >
            <div className="flex h-full flex-col overflow-hidden rounded-lg border border-white/10 bg-white dark:bg-slate-950">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-slate-950 p-3 text-white dark:border-slate-800">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <FileText size={17} /> Resume Preview
                </div>
                <div className="flex flex-wrap gap-2">
                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-white hover:bg-white/10 hover:text-white"
                  >
                    <a href={contact.resumeUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" /> Open
                    </a>
                  </Button>
                  <Button
                    onClick={handleDownload}
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-white hover:bg-white/10 hover:text-white"
                  >
                    <Download className="h-4 w-4" /> Download
                  </Button>
                  <Button
                    onClick={() => setIsFullScreen(false)}
                    variant="ghost"
                    size="sm"
                    className="rounded-full text-white hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-4 w-4" /> Close
                  </Button>
                </div>
              </div>
              <iframe src={contact.resumeUrl} title="Resume Fullscreen" className="min-h-0 flex-1" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
