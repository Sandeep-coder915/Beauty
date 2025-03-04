import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServiceCard = ({ service }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the element is visible
    >
      <Link to={service.link}>
        <img
          src={service?.image || "https://via.placeholder.com/150"}
          alt={service?.name || "Service Image"}
          className="w-full h-70 object-cover rounded-md"
        />
      </Link>
      
      <h2 className="text-xl font-semibold text-pink-600 mt-2">
        {service?.name || "Service Name"}
      </h2>
      <p className="text-gray-600">
        {service?.description || "No description available."}
      </p>
      <p className="text-pink-600 font-bold mt-2">
        {service?.price || "₹0"}
      </p>

      {/* Redirect to booking-form page with service name in query params */}
      <Link
        to={`/booking-form?service=${encodeURIComponent(service?.name)}`}
        className="mt-3 block bg-pink-500 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-600 transition"
      >
        Book Now
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
