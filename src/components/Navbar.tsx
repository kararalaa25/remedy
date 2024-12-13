import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <img src="/remedy-logo.png" alt="ReMedy Logo" className="h-8 w-8" />
            <span className="text-2xl font-bold">
              <span style={{ color: "#fcac4d" }}>Re</span>
              <span style={{ color: "#34ccd2" }}>Medy</span>
            </span>
          </Link>
          <div className="flex space-x-8">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
            <Link to="/features" className="nav-link">
              Features
            </Link>
            <Link to="/contact" className="nav-link">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;