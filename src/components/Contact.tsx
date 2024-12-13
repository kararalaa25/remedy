import { Instagram, Linkedin, Youtube, Mail } from "lucide-react";

const Contact = () => {
  const socialLinks = [
    {
      icon: <Instagram className="social-icon" />,
      url: "https://www.instagram.com/remedy_iq/",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="social-icon" />,
      url: "https://www.linkedin.com/in/remedy-platform-928176334/",
      label: "LinkedIn",
    },
    {
      icon: <Youtube className="social-icon" />,
      url: "https://www.youtube.com/@ReMedy-i4t",
      label: "YouTube",
    },
    {
      icon: <Mail className="social-icon" />,
      url: "mailto:remedyplatform@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
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