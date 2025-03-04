import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Quick Links",
    links: ["Home", "About", "Services", "Blog", "Contact"],
  },
  {
    title: "Services",
    links: ["Hair Care", "Skin Care", "Makeup", "Spa & Massage", "Nail Art"],
  },
  {
    title: "Support",
    links: ["FAQ", "Privacy Policy", "Terms of Service", "Refund Policy"],
  },
];

const socialIcons = [
  { icon: Facebook, link: "https://facebook.com" },
  { icon: Instagram, link: "https://instagram.com" },
  { icon: Twitter, link: "https://twitter.com" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        
        {/* Logo & Contact Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Beauty Services</h2>
          <p className="text-gray-400">Your beauty, our passion.</p>
          <div className="mt-4 space-y-2 text-sm">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="sm:inline">contact@yourwebsite.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span>Amritsar, Punjab</span>
            </div>
          </div>
        </div>

        {/* Footer Links Section (Uses map function) */}
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
            <ul className="space-y-2 text-gray-400">
              {section.links.map((link, idx) => (
                <li key={idx} className="hover:text-white transition">
                  <a href="#" className="block">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Social Media Links */}
      <div className="mt-8 flex justify-center gap-6">
        {socialIcons.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
            <social.icon className="w-5 h-5 hover:text-gray-400 transition" />
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
