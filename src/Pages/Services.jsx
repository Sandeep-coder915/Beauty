import { Link } from "react-router-dom";
import ServiceCard from "../Components/ServiceCard";

const services = [
  { name: "Facial", image: "https://leonardmedispa.com/wp-content/uploads/2017/03/facial-86487979-1-768x433.jpg", description: "Relaxing facial treatment", price: "₹999" },
  { name: "Hair Spa", image: "https://myhomesalon.in/wp-content/uploads/2023/07/Hair-Spa-Price-In-India.jpg", description: "Deep hair nourishment", price: "₹1299" },
  { name: "Manicure", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Luxury nail care", price: "₹799" },
  { name: "Bleach, Facial, Full Leg Wax, Arm Wax with Underarms, Threading, Upper Lips", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Complete facial and waxing package", price: "₹1000" },
  { name: "Manicure, Pedicure, Hair Spa", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Relaxing hand, foot, and hair care", price: "₹850" },
  { name: "Bleach, Facial, Manicure, Pedicure", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "A perfect skincare combo", price: "₹800" },
  { name: "Rebonding - Normal Length", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Straighten and nourish your hair", price: "₹3000" },
  { name: "Rebonding, Keratin with Highlights", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Transform your hair with premium treatment", price: "₹4500" },
  { name: "Kerasmoth", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Keratin smoothing treatment", price: "₹3500" },
  { name: "Global Highlights with Keratin Treatment - Normal Length", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Stylish highlights with keratin care", price: "₹3500" },
  { name: "Any Hairstyle", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Customizable stylish hairdos", price: "₹400+" },
  { name: "Party Makeup", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Glamorous makeup for special occasions", price: "₹1000" }
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
