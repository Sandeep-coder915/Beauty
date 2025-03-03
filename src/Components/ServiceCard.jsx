import React from 'react'
import Services from '../Pages/Services';
const ServiceCard = ({ service , onBook }) => {
    return (

      <div className="bg-white shadow-lg rounded-lg p-4">
        <img
          src={service?.image || "https://via.placeholder.com/150"}
          alt={service?.name || "Service Image"}
          className="w-full h-40 object-cover rounded-md"
        />
        <h2 className="text-xl font-semibold mt-2">{service?.name || "Service Name"}</h2>
        <p className="text-gray-600">{service?.description || "No description available."}</p>
        <p className="text-pink-600 font-bold mt-2">₹{service?.price || "0"}</p>
        <button
          onClick={() => onBook?.(service)}
          className="mt-3 bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition"
        >
          Book Now
        </button>
      </div>
    );
  };
  export default ServiceCard;


