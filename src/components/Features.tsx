import { Gift, BookOpen, BarChart, Bookmark, Target, Smartphone } from "lucide-react";
import { motion, type Variants } from "framer-motion";

const Features = () => {
  const features = [
    {
      title: "Free Trial",
      description: "Access +1000 questions for free and explore the full potential of our platform",
      icon: Gift,
    },
    {
      title: "Detailed Explanations",
      description: "Understand every answer with clear explanations for both correct and incorrect choices",
      icon: BookOpen,
    },
    {
      title: "Performance Statistics",
      description: "Track your progress with detailed performance analytics and insights",
      icon: BarChart,
    },
    {
      title: "Marked Questions",
      description: "Save questions to review later and focus on areas that matter most",
      icon: Bookmark,
    },
    {
      title: "Targeted Practice",
      description: "Solve only the questions you answered incorrectly for focused improvement",
      icon: Target,
    },
    {
      title: "Study on Two Devices",
      description: "Easily access your question bank on both your phone and iPad, with synchronized progress",
      icon: Smartphone,
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
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Amazing Features
        </motion.h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="feature-card"
            >
              <div className="mb-4">
                <feature.icon className="w-12 h-12 mx-auto" style={{ color: '#fcac4d' }} />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
