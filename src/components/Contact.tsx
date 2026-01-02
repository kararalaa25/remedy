import { Instagram, Linkedin, Youtube, Mail, Send } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-8 h-8" />,
      url: "https://www.instagram.com/remedy_iq/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-8 h-8" />,
      url: "https://www.linkedin.com/in/remedy-platform-928176334/",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-8 h-8" />,
      url: "https://www.youtube.com/@ReMedy-i4t",
      label: "YouTube",
    },
    {
      icon: <Send className="w-8 h-8" />,
      url: "https://t.me/+QxjT7L0JugA4YWYy",
      label: "Telegram",
    },
    {
      icon: <Mail className="w-8 h-8" />,
      url: "mailto:remedyplatform@gmail.com",
      label: "Email",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Get in Touch
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex justify-center space-x-8"
        >
          {socialLinks.map((link) => (
            <motion.a
              key={link.label}
              variants={itemVariants}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="opacity-60 hover:opacity-100 transition-opacity duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
