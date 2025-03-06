import React from "react";
import ServiceCard from "../Components/ServiceCard";

const comboOffers = [
  {
    name: "Bleach + Facial + Full Leg Wax + Arm Wax + Under Arm + Threading (Upper Lips & Forehead)",
    image: "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg",
    description: "Complete skincare and waxing combo for a refreshed look.",
    price: "₹1800"
  },
  {
    name: "Bleach + Facial + Manicure + Pedicure",
    image: "https://vendor.mschirpy.com/blogs/1694368785.jpg",
    description: "A perfect facial and nail care package.",
    price: "₹1200"
  },
  {
    name: "Rebonding + Keratin + Highlights",
    image: "https://vendor.mschirpy.com/blogs/1694368785.jpg",
    description: "Give your hair a stunning transformation.",
    price: "₹5200"
  },
  {
    name: "Global Highlights + Keratin (Normal Length)",
    image: "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg",
    description: "Stylish highlights with deep keratin treatment.",
    price: "₹4500"
  },
  {
    name: "Trimming + Headwash",
    image: "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg",
    description: "Basic hair care combo for a fresh look.",
    price: "₹699"
  },
  {
    name: "Mehndi + Threading + Cleanup",
    image:  "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg",
    description: "Enhance your beauty with this special combo.",
    price: "₹600"
  },
  {
    name: "Nail Cut & File + Foot Massage",
    image: "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg",
    description: "Luxury nail and foot care experience.",
    price: "₹500"
  },
  {
    name: "Manicure + Pedicure + Hair Spa",
    image: "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg",
    description: "Pamper yourself with this relaxing package.",
    price: "₹1200"
  }
];

const ComboOffers = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center text-pink-600 mb-6">Exclusive Combo Offers</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {comboOffers.map((combo, index) => (
          <ServiceCard key={index} service={combo} />
        ))}
      </div>
    </div>
  );
};

export default ComboOffers;
