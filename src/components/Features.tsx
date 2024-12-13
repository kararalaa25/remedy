import { Gift, BookOpen, BarChart, Bookmark, Target, Smartphone } from "lucide-react";

const Features = () => {
  const features = [
    {
      title: "Free Trial",
      description: "Access over 500 questions for free and explore the full potential of our platform",
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

  return (
    <section id="features" className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="mb-4">
                <feature.icon className="w-12 h-12 text-primary mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;