import React from "react";
import { ShieldCheck, Star, CheckCircle, Handshake } from "lucide-react";
import { motion } from "framer-motion";

const trustItems = [
  { icon: ShieldCheck, text: "100% Secure Payment (Cash on Delivery)", color: "text-green-600" },
  { icon: CheckCircle, text: "Trusted & Verified Seller", color: "text-blue-500" },
  { icon: Handshake, text: "No Advance Payment Needed – Pay on Delivery", color: "text-purple-500" },
  { icon: Star, text: "Thousands of Happy Customers", color: "text-yellow-500" },
];

const TrustItem = ({ Icon, text, color }) => (
  <div className="flex items-center bg-white p-4 rounded-lg shadow">
    <Icon className={`${color} w-8 h-8 mr-3`} />
    <p className="text-gray-700 font-semibold">{text}</p>
  </div>
);

const TrustSection = ({ darkMode }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="bg-transparent p-6 rounded-lg shadow-md">
      <h2
        className={`text-2xl flex justify-center font-semibold mb-5 border-b-2 border-pink-400 pb-2 ${
          darkMode ? "text-white bg-yellow-500" : ""
        }`}
      >
        Why Trust Us?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {trustItems.map(({ icon: Icon, text, color }, index) => (
          <TrustItem key={index} Icon={Icon} text={text} color={color} />
        ))}
      </div>
      <p
        className={`mt-2 text-lg text-center font-semibold border-b-2 border-pink-400 pb-2 ${
          darkMode ? "text-white" : ""
        }`}
      >
        We ensure a "hassle-free shopping experience." Pay only when your order is delivered!
      </p>
    </div>
  </motion.div>
);

export default TrustSection;