import React from "react";
import { ShieldCheck, Star, CheckCircle, Handshake } from "lucide-react";
import {motion} from 'framer-motion'
const TrustSection = ({darkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
  >
    <div className="bg-transparent p-6 rounded-lg shadow-md">
      <h2 className={`text-2xl items-center flex  justify-center font-semibold mb-5 border-b-2 border-pink-400 pb-2
            ${darkMode ? "text-white bg-yellow-500" : ""}`}>Why Trust Us?</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Secure Payment Badge */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <ShieldCheck className="text-green-600 w-8 h-8 mr-3" />
          <p className="text-gray-700 font-semibold">100% Secure Payment (Cash on Delivery)</p>
        </div>

        {/* Verified Seller */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <CheckCircle className="text-blue-500 w-8 h-8 mr-3" />
          <p className="text-gray-700 font-semibold">Trusted & Verified Seller</p>
        </div>

        {/* No Advance Payment Required */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <Handshake className="text-purple-500 w-8 h-8 mr-3" />
          <p className="text-gray-700 font-semibold">No Advance Payment Needed – Pay on Delivery</p>
        </div>

        {/* Customer Satisfaction */}
        <div className="flex items-center bg-white p-4 rounded-lg shadow">
          <Star className="text-yellow-500 w-8 h-8 mr-3" />
          <p className="text-gray-700 font-semibold">Thousands of Happy Customers</p>
        </div>
      </div>

      <p className={` mt-2 text-l text-center font-semibold mb-5 border-b-2 border-pink-400 pb-2
            ${darkMode ? "text-white" : ""}`}>
        We ensure a "hassle-free shopping experience". Pay only when your order is delivered!
      </p>
    </div>
    </motion.div>
  );
};

export default TrustSection;
