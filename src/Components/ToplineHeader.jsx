import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";


const ToplineHeader = ({ darkMode }) => {
  return (

   <>

    <div
      className={`fixed top-0 left-0 w-full text-sm py-2 px-4 sm:px-6 lg:px-10 flex justify-between items-center z-50 text-center ${
        darkMode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >

      {/* Left Section - Social Media Links */}
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 hover:text-blue-500 transition duration-200" />
        </a>
        <a href="https://www.instagram.com/share/p/BAI6VzTWfz" target="_blank" rel="noopener noreferrer">
          <Instagram className="w-5 h-5 hover:text-pink-500 transition duration-200" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Twitter className="w-5 h-5 hover:text-blue-400 transition duration-200" />
        </a>
      </div>


      {/* Right Section - Contact Info */}
      <div className="flex gap-6 items-center">
  <div className="flex items-center gap-2">
    <Phone className="w-4 h-4" />
    <a href="tel:+918360161602" className="hover:underline">
      +918360161602
    </a>
  </div>
  <div className="hidden sm:flex items-center gap-2">
    <Mail className="w-4 h-4" />
    <a href="mailto:taniarajput347@gmail.com" className="hover:underline">
      taniarajput347@gmail.com
    </a>
  </div>
</div>

    </div>

    </>
  );
};

export default ToplineHeader;
