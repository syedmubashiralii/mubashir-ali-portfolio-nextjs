"use client";

import { Download, Eye, FileText, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

const ResumeViewer = () => {
  const [isFullScreen, setIsFullScreen] = useState(false);

  const resumeUrl =
    "https://drive.google.com/file/d/1KK_ySJVvqbM8-uQNdQtbmXxTFK8r0Rzi/view?usp=drive_link";

  // Convert Google Drive link to embed format
  const getEmbedUrl = (url: string) => {
    if (url.includes("drive.google.com/file/d/")) {
      const fileId = url.split("/file/d/")[1].split("/")[0];
      return `https://drive.google.com/file/d/${fileId}/preview`;
    }
    return url;
  };

  const embedUrl = getEmbedUrl(resumeUrl);

  const handleDownload = () => {
    window.open(resumeUrl, "_blank");
  };

  return (
    <section
      id="resume"
      className="py-20 relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900"
    >
      <div className="container relative z-10 flex flex-col items-center max-w-5xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            My <span className="text-blue-600 dark:text-blue-400">Resume</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            View or download my complete resume to learn more about my
            professional background, education, skills, and experience.
          </p>
        </motion.div>

        {/* Resume Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
className="relative w-full neumorphic-card overflow-hidden rounded-xl shadow-lg mt-10"
        >
          {/* Top Bar */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white p-4 flex justify-between items-center">
            <div className="flex items-center">
              <FileText className="mr-2" />
              <h3 className="font-medium">Resume Preview</h3>
            </div>
            <div className="flex space-x-2">
              <Button
                onClick={() => setIsFullScreen(true)}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <Eye className="mr-2 h-4 w-4" />
                Full Screen
              </Button>
              <Button
                onClick={handleDownload}
                variant="ghost"
                size="sm"
                className="text-white hover:bg-white/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          {/* Inline Preview */}
          <div className="h-[600px]">
            <iframe
              src={embedUrl}
              title="Resume"
              className="w-full h-full"
              allow="autoplay"
            ></iframe>
          </div>
        </motion.div>

        {/* Download Button Below */}
        <div className="text-center mt-8">
          <Button
            onClick={handleDownload}
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-portfolio-teal/90 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {isFullScreen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center"
          >
            <div className="relative w-full h-full bg-white dark:bg-gray-900 rounded-none">
              {/* Fullscreen Top Bar */}
              <div className="bg-gradient-to-r from-portfolio-teal to-blue-600 text-white p-4 flex justify-between items-center">
                <h3 className="font-medium flex items-center">
                  <FileText className="mr-2" /> Resume (Fullscreen)
                </h3>
                <div className="flex space-x-2">
                  <Button
                    onClick={handleDownload}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download
                  </Button>
                  <Button
                    onClick={() => setIsFullScreen(false)}
                    variant="ghost"
                    size="sm"
                    className="text-white hover:bg-white/20"
                  >
                    <X className="mr-2 h-4 w-4" />
                    Exit
                  </Button>
                </div>
              </div>

              {/* Fullscreen Iframe */}
              <iframe
                src={embedUrl}
                title="Resume Fullscreen"
                className="w-full h-[calc(100%-60px)]"
                allow="autoplay"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ResumeViewer;
