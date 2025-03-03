import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white px-6 py-4 shadow-md fixed absolute top-0 w-full z-10">
      <div className="flex justify-between items-center max-w-7xl mx-auto">

        <Link to="/" className="hover:text-pink-500 text-2xl font-bold"> Beauty at Home</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/services" className="hover:text-pink-500">Services</Link>
          <Link to="/booking" className="hover:text-pink-500">Book Now</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
          {/* <Link to="/Blogs" className="hover:text-pink-500">Blogs</Link> */}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden flex flex-col items-center bg-gray-800 py-4 space-y-4">
          <Link to="/" className="hover:text-pink-500">Home</Link>
          <Link to="/services" className="hover:text-pink-500">Services</Link>
          <Link to="/booking" className="hover:text-pink-500">Book Now</Link>
          <Link to="/contact" className="hover:text-pink-500">Contact</Link>
          {/* <Link to="/Blogs" className="hover:text-pink-500">Blogs</Link> */}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
