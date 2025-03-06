import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, Info, Scissors, CalendarCheck, Mail, Gift, Sun, Moon } from "lucide-react";
import ToplineHeader from "./ToplineHeader";

const Navbar = ({darkMode,setDarkMode}) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  const navItems = [
    { name: "Home", path: "/", icon: <Home size={20} /> },
    { name: "Combo Offers", path: "/ComboOffers", icon: <Gift size={20} /> },
    { name: "About Us", path: "/about-us", icon: <Info size={20} /> },
    { name: "Services", path: "/services", icon: <Scissors size={20} /> },
    { name: "Book Now", path: "/booking-form", icon: <CalendarCheck size={20} /> },
    { name: "Contact", path: "/contact", icon: <Mail size={20} /> },
  ];

  return (
    <>
      <ToplineHeader />
      <nav className={`fixed top-8 w-full z-50 px-6 py-4 shadow-md transition-all duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>


        <div className="flex justify-between items-center max-w-7xl mx-auto">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold"><img src="/assets/1.svg" alt="" /></Link>

          {/* Centered Combo Offers (Only on small screens) */}
          <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
            <Link to="/ComboOffers" className="text-lg font-semibold hover:text-pink-500 flex items-center gap-2">
              <Gift size={20} /> Combo Offers
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 relative">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 pb-2 relative transition-all duration-300 ${activeLink === item.path ? "text-pink-500" : "hover:text-pink-500"}`}
              >
                {item.icon} {item.name}
                {activeLink === item.path && (
                  <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 transition-all duration-300"></span>
                )}
              </Link>
            ))}
          </div>

          {/* Dark Mode & Mobile Menu Button */}
          <div className="flex items-center gap-4">
            <button onClick={() => setDarkMode(!darkMode)} className="hover:text-pink-500">
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden fixed top-[90px] w-full flex flex-col items-center py-4 space-y-4 z-50 transition-all duration-300 ${menuOpen ? "h-auto opacity-100 visible" : "h-0 opacity-0 invisible"} ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-gray-900"}`}>


        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            onClick={() => setMenuOpen(false)}
            className={`flex items-center gap-2 pb-2 relative transition-all duration-300 ${activeLink === item.path ? "text-pink-500" : "hover:text-pink-500"}`}
          >
            {item.icon} {item.name}
            {activeLink === item.path && (
              <span className="absolute bottom-0 left-0 w-full h-1 bg-pink-500 transition-all duration-300"></span>
            )}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
