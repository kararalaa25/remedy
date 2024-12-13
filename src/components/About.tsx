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

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-black">About Remedy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <div key={section.title} className="about-card">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <p className="text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;