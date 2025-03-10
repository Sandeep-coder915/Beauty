import React from "react";
import { ShieldCheck, Star, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";

const beauticians = [
  {
    id: 1,
    name: "Sonia Kapoor",
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
    experience: "5+ Years",
    rating: 4.8,
    verified: true,
    certifications: ["Certified Makeup Artist", "Advanced Skincare Training"],
  },
  {
    id: 2,
    name: "Riya Sharma",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp",
    experience: "3+ Years",
    rating: 4.5,
    verified: true,
    certifications: ["Hair Styling Expert", "Nail Art Specialist"],
  },
  {
    id: 3,
    name: "Priya Mehta",
    image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
    experience: "7+ Years",
    rating: 4.9,
    verified: true,
    certifications: ["Bridal Makeup Expert", "Professional Hair Spa Specialist"],
  },
  // {
  //   id: 4,
  //   name: "Priya Mehta",
  //   image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
  //   experience: "7+ Years",
  //   rating: 4.9,
  //   verified: true,
  //   certifications: ["Bridal Makeup Expert", "Professional Hair Spa Specialist"],
  // },
  // {
  //   id: 5,
  //   name: "Priya Mehta",
  //   image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
  //   experience: "7+ Years",
  //   rating: 4.9,
  //   verified: true,
  //   certifications: ["Bridal Makeup Expert", "Professional Hair Spa Specialist"],
  // },
  // {
  //   id: 6,
  //   name: "Priya Mehta",
  //   image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp",
  //   experience: "7+ Years",
  //   rating: 4.9,
  //   verified: true,
  //   certifications: ["Bridal Makeup Expert", "Professional Hair Spa Specialist"],
  // },
];

const BeauticiansList =({darkMode}) => {
  return (
    <motion.div
    className="bg-white shadow-lg rounded-lg p-4"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the element is visible
  >

    <div className={`container mx-auto py-10 bg-transparent  px-6${darkMode ? 'bg-gray-100 text-white' : 'bg-gray-900  text-black'} `}>
      <h2 className="text-3xl font-bold text-center mb-6">🔒 Secure & Verified Beauticians</h2>
      <p className="text-center  mb-4">
        Our professionals are ID-verified, trained, and certified to provide the best beauty services at your home.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {beauticians.map((beautician) => (
          <div key={beautician.id} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <img
              src={beautician.image}
              alt={beautician.name}
              className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-pink-500"
            />
            <h3 className="text-xl font-semibold mt-3 border-red-400">{beautician.name}</h3>
            <p className="text-gray-500">{beautician.experience}</p>

            {/* Verified Badge */}
            {beautician.verified && (
              <div className="flex items-center justify-center gap-2 mt-2 text-green-600 font-medium">
                <ShieldCheck className="w-5 h-5" />
                <span>Verified Professional</span>
              </div>
            )}

            {/* Rating */}
            <div className="flex items-center justify-center mt-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-gray-700 font-bold ml-1">{beautician.rating}</span>
            </div>

            {/* Certifications */}
            <div className="mt-3">
              <h4 className="text-sm font-medium text-gray-700">Certifications:</h4>
              <ul className="text-gray-600 text-sm mt-1">
                {beautician.certifications.map((cert, index) => (
                  <li key={index} className="flex items-center justify-center gap-2">
                    <BadgeCheck className="w-4 h-4 text-blue-500" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>

            <button className="mt-4  bg-gray-900 text-white py-2 px-4 rounded-lg hover:bg-gray-500 hover:text-white transition">
              Book Now
            </button>

          </div>
        ))}
      </div>
    </div>
    </motion.div>
  );
};

export default BeauticiansList;
