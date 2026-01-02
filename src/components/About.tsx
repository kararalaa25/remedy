import { motion, type Variants } from "framer-motion";

const About = () => {
  const sections = [
    {
      title: "Mission",
      content: "At Remedy, our mission is to guide and support medical students and professionals from medical school through residency. The name Remedy comes from (Re) and (Medy), which stands for Review Medicine—reflecting our commitment to helping you review the most crucial medical knowledge.",
    },
    {
      title: "Vision",
      content: "Our vision is to be more than just a question bank. We aim to be a trusted partner in your medical journey, providing resources that will help you not only pass your exams but also grow into confident, capable healthcare professionals.",
    },
    {
      title: "Goal",
      content: "Right now, our goal is to offer a question bank that focuses on the key topics for the Wizary exam. We've carefully selected important content from trusted sources, and we depend on the official blueprint to ensure we focus on the most important topics.",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-title text-black"
        >
          About Remedy
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {sections.map((section) => (
            <motion.div
              key={section.title}
              variants={itemVariants}
              className="about-card"
            >
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-600">{section.content}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
