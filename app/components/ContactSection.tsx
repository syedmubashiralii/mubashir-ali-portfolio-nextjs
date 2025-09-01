"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Name: ${formData.name}%0AEmail: ${formData.email}%0ASubject: ${formData.subject}%0AMessage: ${formData.message}`;
    const whatsappNumber = "923105205275";

    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, "_blank");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 relative overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-950"
    >
      <div className="container relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100">
            Get in <span className="text-blue-600 dark:text-blue-400">Touch</span>
          </h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">
            Feel free to reach out! You can connect with me directly via WhatsApp or on my socials.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Info + Socials */}
          <div className="space-y-6 mb-10 md:mb-0">
            <div className="flex items-center space-x-4">
              <Mail className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <span className="text-gray-700 dark:text-gray-300">
                <Link href="mailto:smubashirali620@gmail.com?subject=Hello%20Mubashir&body=I%20would%20like%20to%20connect%20with%20you.">
                  smubashirali620@gmail.com
                </Link>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <span className="text-gray-700 dark:text-gray-300">+92 310 5205275</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="text-blue-600 dark:text-blue-400 w-6 h-6" />
              <span className="text-gray-700 dark:text-gray-300">Islamabad, Pakistan</span>
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h4 className="text-base font-medium mb-3 text-slate-800 dark:text-gray-200">Follow Me</h4>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://www.linkedin.com/in/syed-mubashir-ali-796122177/"
                  target="_blank"
                  className="p-2 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </Link>
                <Link
                  href="https://github.com/syedmubashiralii"
                  target="_blank"
                  className="p-2 rounded-lg bg-gradient-to-r from-slate-700 to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="GitHub"
                >
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link
                  href="https://x.com/sydmubashirali?t=kf_Iqdl98LMHCTkKhfmfpw&s=08"
                  target="_blank"
                  className="p-2 rounded-lg bg-gradient-to-r from-slate-800 to-slate-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="X"
                >
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2H21l-6.83 7.807L22 22h-6.946l-5.088-6.647L4.244 22H2l7.186-8.218L2 2h6.946l4.566 6.001L18.244 2zM16.512 20h1.812L8.512 4h-1.91l9.91 16z" />
                  </svg>
                </Link>
                <Link
                  href="https://www.instagram.com/syedmubashiralii"
                  target="_blank"
                  className="p-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                  aria-label="Instagram"
                >
                  <svg className="h-4 w-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-xl shadow-md w-full"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 outline-none"
              required
            />
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Send className="mr-2 h-4 w-4" />
              Send via WhatsApp
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
