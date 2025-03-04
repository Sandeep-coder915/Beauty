import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-6 text-center ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"}`}>
      <p>&copy; 2025 Beauty at Home. All Rights Reserved.</p>
      <p>Contact: support@beautyathome.com | +91 98765 43210</p>
    </footer>
  );
};

export default Footer;
