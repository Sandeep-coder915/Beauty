import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import ToplineHeader from "./ToplineHeader";
import desktopLogo from "/assets/1.svg"; // Corrected path for desktop logo
import mobileLogo from "/assets/1.svg"; // Corrected path for mobile logo

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <ToplineHeader />
      <nav className={`px-6 py-4 shadow-md fixed top-[35px] w-full z-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Desktop Logo (Visible on md and larger screens) */}
          <Link to="/" className="hidden md:block">
            <img src={desktopLogo} alt="Desktop Logo" className="h-10" />
          </Link>

          {/* Mobile Logo (Visible on small screens only) */}
          <Link to="/" className="md:hidden">
            <img src={mobileLogo} alt="Mobile Logo" className="h-10" />
          </Link>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="hover:text-pink-500">Home</Link>
            <Link to="/ComboOffers" className="hover:text-pink-500 font-semibold">Combo Offers</Link>
            <Link to="/about-us" className="hover:text-pink-500">About Us</Link>
            <Link to="/services" className="hover:text-pink-500">Services</Link>
            <Link to="/booking-form" className="hover:text-pink-500">Book Now</Link>
            <Link to="/contact" className="hover:text-pink-500">Contact</Link>

            {/* Dark Mode Toggle */}
            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-pink-500 flex items-center gap-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}


          <Link to="/ComboOffers" className="lg:hidden md:hidden text-lg font-semibold hover:text-pink-500">
            Combo Offers
          </Link>
          <div className="md:hidden flex items-center gap-4">

            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-pink-500 flex items-center gap-2">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className={`md:hidden flex flex-col items-center py-4 space-y-4 ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>
            <Link to="/" className="hover:text-pink-500">Home</Link>
            <Link to="/about-us" className="hover:text-pink-500">About Us</Link>
            <Link to="/services" className="hover:text-pink-500">Services</Link>
            <Link to="/booking-form" className="hover:text-pink-500">Book Now</Link>
            <Link to="/contact" className="hover:text-pink-500">Contact</Link>
          </div>
        )}
      </nav>

      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
