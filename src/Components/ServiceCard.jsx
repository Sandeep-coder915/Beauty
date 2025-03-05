// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

// const ServiceCard = ({ service }) => {
//   return (
// <div>
       
//       <Link to={`/booking-form?service=${encodeURIComponent(service?.name)}`}>
//         <img
//           src={service?.image || "https://via.placeholder.com/150"}
//           alt={service?.name || "Service Image"}
//           className="w-full h-60 object-cover rounded-lg"
//         />
//       </Link>

//       <h2 className="text-xl font-semibold text-pink-600 mt-3">{service?.name || "Service Name"}</h2>
//       <p className="text-gray-600 text-sm">{service?.description || "No description available."}</p>
//       <p className="text-pink-600 font-bold mt-2">{service?.price || "₹0"}</p>

//       <Link
//         to={`/booking-form?service=${encodeURIComponent(service?.name)}`}
//         className="mt-4 block bg-pink-500 text-white py-2 px-4 rounded-lg text-center hover:bg-pink-600 transition"
//       >
//         Book Now
//       </Link>
//     </div>
//   );
// };

// export default ServiceCard;

import React from "react";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <Link to={`/booking-form?service=${encodeURIComponent(service?.name)}`}>
        <img
          src={service?.image || "https://via.placeholder.com/150"}
          alt={service?.name || "Service Image"}
          className="w-full h-52 object-cover rounded-lg"
        />
      </Link>

      <h2 className="text-lg font-semibold text-pink-600 mt-3">{service?.name || "Service Name"}</h2>
      <p className="text-gray-600 text-sm mt-1">{service?.description || "No description available."}</p>
      <p className="text-pink-600 font-bold mt-2">{service?.price || "₹0"}</p>

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
