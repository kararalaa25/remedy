import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/lovable-uploads/9df97c49-cd0d-46b4-be46-9c1b429470ac.png" 
              alt="ReMedy Logo" 
              className="h-10 w-10 md:h-12 md:w-12" 
            />
            <span className="text-2xl font-bold">
              <span style={{ color: "#fcac4d" }}>Re</span>
              <span style={{ color: "#34ccd2" }}>Medy</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('features')} className="nav-link">
              Features
            </button>
            <button onClick={() => scrollToSection('about')} className="nav-link">
              About Us
            </button>
            <button onClick={() => scrollToSection('contact')} className="nav-link">
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-gray-600" />
            ) : (
              <Menu className="h-6 w-6 text-gray-600" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b shadow-lg">
            <div className="flex flex-col space-y-4 px-4 py-6">
              <button 
                onClick={() => scrollToSection('features')} 
                className="nav-link text-left py-2"
              >
                Features
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="nav-link text-left py-2"
              >
                About Us
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="nav-link text-left py-2"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;