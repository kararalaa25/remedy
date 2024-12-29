const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-24 pb-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="hero-text mb-8">
          Building knowledge that lasts
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
          ReMedy is your trusted companion for mastering medical exams and building confidence for your journey in medicine.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-6 max-w-md mx-auto">
          <a
            href="https://apps.apple.com/us/app/remedy-platform/id6737006336"
            target="_blank"
            rel="noopener noreferrer"
            className="app-button"
          >
            <img 
              src="/lovable-uploads/9f2a41a3-ca0c-4999-bd30-9043082c7f22.png" 
              alt="Apple logo" 
              className="w-6 h-6 brightness-0 invert"
            />
            Download for iOS
          </a>
          <a
            href="#"
            className="app-button"
          >
            <img 
              src="/lovable-uploads/03583354-da4b-46f8-93ab-628d020863f9.png" 
              alt="Android logo" 
              className="w-6 h-6 invert"
            />
            Download for Android
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;