import { Link } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";

const services = [
  { name: "Facial", image: "/facial.jpg", description: "Relaxing facial treatment", price: "₹999" },
  { name: "Hair Spa", image: "/hairspa.jpg", description: "Deep hair nourishment", price: "₹1299" },
  { name: "Manicure", image: "/manicure.jpg", description: "Luxury nail care", price: "₹799" },
];

const Services = () => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Beauty Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
