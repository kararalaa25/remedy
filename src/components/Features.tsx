const Features = () => {
  const features = [
    {
      title: "Lightning Fast",
      description: "Experience blazing fast performance with our optimized platform",
      icon: "⚡️",
    },
    {
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security",
      icon: "🛡️",
    },
    {
      title: "Mobile First",
      description: "Perfect experience across all devices and screen sizes",
      icon: "📱",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title">Amazing Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="feature-card">
              <div className="text-4xl mb-4">{feature.icon}</div>
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