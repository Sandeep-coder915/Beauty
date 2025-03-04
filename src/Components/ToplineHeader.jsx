import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react";

const ToplineHeader = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-gray-900 text-white text-sm py-2 px-4 flex justify-between items-center z-50">
      {/* Left Section - Social Media Links */}
      <div className="flex gap-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <Facebook className="w-5 h-5 hover:text-blue-500 transition duration-200" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
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
          <span>+91 98765 43210</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="w-4 h-4" />
          <span>contact@yourwebsite.com</span>
        </div>
      </div>
    </div>
  );
};

export default ToplineHeader;
