"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const footerLinks = [
    {
      title: "Company",
      links: [
        { name: "About Us", href: "#about" },
        { name: "Careers", href: "#careers" },
        { name: "Press", href: "#press" },
        { name: "Blog", href: "#blog" },
      ],
    },
    {
      title: "Services",
      links: [
        { name: "Social Media", href: "#social" },
        { name: "SEO", href: "#seo" },
        { name: "PPC", href: "#ppc" },
        { name: "Content Marketing", href: "#content" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "#case-studies" },
        { name: "Guides", href: "#guides" },
        { name: "Tools", href: "#tools" },
        { name: "Webinars", href: "#webinars" },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#privacy" },
        { name: "Terms of Service", href: "#terms" },
        { name: "Cookie Policy", href: "#cookies" },
        { name: "GDPR", href: "#gdpr" },
      ],
    },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold gradient-text">XYZ Agency</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-xs">
              We help businesses grow with cutting-edge digital marketing strategies and solutions.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="bg-gray-800 hover:bg-primary p-2 rounded-full transition-colors"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className="text-lg font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {currentYear} XYZ Agency. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="#privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#cookies" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="mt-10 text-center text-xs text-gray-500"
      >
        Designed with ❤️ for optimal user experience
      </motion.div>
    </footer>
  );
};

export default Footer; 