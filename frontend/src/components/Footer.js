import React from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaTwitter, FaYoutube, FaArrowUp } from 'react-icons/fa';

const footerLinks = [
  {
    title: "Quick Links",
    items: [
      { name: "Home", href: "#" },
      { name: "About Event", href: "#about" },
      { name: "Agenda", href: "#agenda" },
      { name: "Register", href: "#register" }
    ]
  },
  {
    title: "Resources",
    items: [
      { name: "Event Brochure", href: "#" },
      { name: "Finastra Solutions", href: "#" },
      { name: "Venue Info", href: "#" }
    ]
  }
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-finastra-blue text-white py-12 relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={scrollToTop}
        className="absolute top-0 right-6 -translate-y-1/2 bg-cogent-orange p-3 rounded-full shadow-lg"
        aria-label="Back to top"
      >
        <FaArrowUp size={20} />
      </motion.button>

      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-2"
          >
            <h3 className="text-xl font-bold mb-4">About Cogent Solutions</h3>
            <p className="mb-4">
              Leading technology consultancy delivering innovative solutions for the banking sector across MENA.
            </p>
            <div className="flex space-x-4">
              {[
                { icon: <FaLinkedin size={24} />, href: "#" },
                { icon: <FaTwitter size={24} />, href: "#" },
                { icon: <FaYoutube size={24} />, href: "#" }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  whileHover={{ y: -3, color: '#FF6B35' }}
                  className="transition-colors"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {footerLinks.map((column, i) => (
            <motion.div
              key={column.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.items.map((item) => (
                  <motion.li 
                    key={item.name}
                    whileHover={{ x: 5 }}
                  >
                    <a href={item.href} className="hover:text-cogent-orange transition">
                      {item.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic space-y-2">
              <p>Dusit Thani Dubai</p>
              <p>+971 4 343 3333</p>
              <p>events@cogentsolutions.ae</p>
            </address>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-blue-400 mt-8 pt-8 text-center md:text-left"
        >
          <p>© {new Date().getFullYear()} Cogent Solutions. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}