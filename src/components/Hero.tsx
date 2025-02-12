
const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 pt-16">
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
          Building knowledge that lasts
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          ReMedy is your trusted companion for mastering medical exams and building confidence for your journey in medicine.
        </p>
        <div className="flex justify-center gap-6">
          <a
            href="https://apps.apple.com/us/app/remedy-platform/id6737006336"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#40E0D0] text-white px-8 py-3 rounded-full hover:bg-[#3CC7B9] transition-colors duration-200 w-36"
          >
            <img 
              src="/lovable-uploads/9f2a41a3-ca0c-4999-bd30-9043082c7f22.png" 
              alt="Apple logo" 
              className="w-6 h-6 brightness-0 invert"
            />
            iOS
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.enigma.remedy&pli=1"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#40E0D0] text-white px-8 py-3 rounded-full hover:bg-[#3CC7B9] transition-colors duration-200 w-36"
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
