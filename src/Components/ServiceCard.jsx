import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
     <Link to={service.link}>
      <img
        src={service?.image || "https://via.placeholder.com/150"}
        alt={service?.name || "Service Image"}
        className="w-full h-70 object-cover rounded-md"
      />
      </Link>
      <h2 className="text-xl font-semibold mt-2">{service?.name || "Service Name"}</h2>
      <p className="text-gray-600">{service?.description || "No description available."}</p>
      <p className="text-pink-600 font-bold mt-2">{service?.price || "₹0"}</p>

      {/* Redirect to booking-form page with service name in query params */}
      <Link
        to={`/booking-form?service=${encodeURIComponent(service?.name)}`}
        className="mt-3 block bg-pink-500 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-600 transition"
      >
        Book Now
      </Link>
    </div>
  );
};

export default ServiceCard;
