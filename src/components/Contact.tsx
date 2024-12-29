import { Instagram, Linkedin, Youtube, Mail, Send } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Instagram className="w-8 h-8 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110" />,
      url: "https://www.instagram.com/remedy_iq/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-8 h-8 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110" />,
      url: "https://www.linkedin.com/in/remedy-platform-928176334/",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="w-8 h-8 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110" />,
      url: "https://www.youtube.com/@ReMedy-i4t",
      label: "YouTube",
    },
    {
      icon: <Send className="w-8 h-8 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110" />,
      url: "https://t.me/+QxjT7L0JugA4YWYy",
      label: "Telegram",
    },
    {
      icon: <Mail className="w-8 h-8 opacity-60 hover:opacity-100 transition-all duration-200 hover:scale-110" />,
      url: "mailto:remedyplatform@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="section-title">Get in Touch</h2>
        <div className="flex justify-center space-x-8">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;