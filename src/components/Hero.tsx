const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="hero-text mb-6">
          Review. Retain. Succeed.
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ReMedy is your trusted companion for mastering medical exams and building confidence for your journey in medicine.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="#"
            className="flex items-center gap-2 bg-[#40E0D0] text-white px-8 py-3 rounded-full hover:bg-[#3CC7B9] transition-colors duration-200"
          >
            <img 
              src="/lovable-uploads/9f2a41a3-ca0c-4999-bd30-9043082c7f22.png" 
              alt="Apple logo" 
              className="w-6 h-6 invert"
            />
            iOS
          </a>
          <a
            href="#"
            className="flex items-center gap-2 bg-[#40E0D0] text-white px-8 py-3 rounded-full hover:bg-[#3CC7B9] transition-colors duration-200"
          >
            <img 
              src="/lovable-uploads/03583354-da4b-46f8-93ab-628d020863f9.png" 
              alt="Android logo" 
              className="w-6 h-6 invert"
            />
            Android
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;