import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";


const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);


  return (
    <>
       <nav className={`px-6 py-4 shadow-md fixed top-0 w-full z-10 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link to="/" className="hover:text-pink-500 text-2xl font-bold">Beauty at Home</Link>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/about-us" className="hover:text-pink-500">AboutUs</Link>
          <Link to="/services" className="hover:text-pink-500">Services</Link>
          <Link to="/booking-form" className="hover:text-pink-500">Book Now</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>

          {/* Dark Mode Toggle */}
          <button onClick={() => setDarkMode(!darkMode)} className="hover:text-pink-500 flex items-center gap-2">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}

          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center  gap-4  ">
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
          <Link to="/about-us" className="hover:text-pink-500">AboutUs</Link>
          <Link to="/services" className="hover:text-pink-500">Services</Link>
          <Link to="/booking" className="hover:text-pink-500">Book Now</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>


        </div>
      )}
    </nav>

    <div className="h-10">

    </div>
    </>

  );
};

export default Navbar;
