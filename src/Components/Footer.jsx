import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", path: "/" },
      { name: "About", path: "/about-us" },
      { name: "Services", path: "/services" },
      { name: "Blog", path: "/blog" },
      { name: "Contact", path: "/contact" },
    ],
  },
  {
    title: "Services",
    links: [
      { name: "Hair Care", path: "/services#hair-care" },
      { name: "Skin Care", path: "/services#skin-care" },
      { name: "Makeup", path: "/services#makeup" },
      { name: "Spa & Massage", path: "/services#spa-massage" },
      { name: "Nail Art", path: "/services#nail-art" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "FAQ", path: "/faq" },
     
      { name: "Privacy Policy", path: "/privacy-policy" },
      { name: "Terms of Service", path: "/terms-and-services" },
      { name: "How We work", path: "/how-we-work" },
    ],
  },
];

const socialIcons = [
  { icon: Facebook, link: "https://facebook.com" },
  { icon: Instagram, link: "https://instagram.com" },
  { icon: Twitter, link: "https://twitter.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-800   z-10 py-8 px-4 sm:px-6 lg:px-10 ">
      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo & Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4 dark:text-white">Beauty Services</h2>
          <p className="text-gray-400">Your beauty, our passion.</p>
          <div className="mt-4 space-y-2 text-sm ">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-pink-500" />
              <span className="dark:text-white">+918360161602</span>
            </div>
            {/* <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-pink-500" />
              <span className="sm:inline dark:text-white">contact@yourwebsite.com</span>
            </div> */}
            <div className="flex items-center gap-2 ">
              <MapPin className="w-5 h-5 text-pink-500" />
              <span className="dark:text-white">Amritsar, Punjab</span>
            </div>
          </div>
        </div>

        {/* Footer Links Section */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg dark:text-white font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-white transition">
                  <Link to={link.path} className="block">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center gap-6 dark:text-white">
        {socialIcons.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <social.icon className="w-6 h-6 hover:text-gray-400 transition" />
          </a>
        ))}
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} Beauty Services. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
