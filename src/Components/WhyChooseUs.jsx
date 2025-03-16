import { Home, ShieldCheck, CreditCard, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
const WhyChooseUs = ({ darkMode }) => {
  const features = [
    {
      icon: <Home size={48} className="text-pink-500" />,
      title: "Convenient Home Services",
      description: "Book beauty services from the comfort of your home and get professional care at your doorstep.",
    },
    {
      icon: <CreditCard size={48} className="text-pink-500" />,
      title: "Flexible Payment Options",
      description: "Pay via Cash on Delivery (COD) And On Time of Delivery you can Pay Via Cah or  Upi also",
    },
    {
      icon: <ShieldCheck size={48} className="text-pink-500" />,
      title: "Highly Secure & Trusted",
      description: "Your safety is our priority with encrypted transactions and verified professionals.",
    },
    {
      icon: <Sparkles size={48} className="text-pink-500" />,
      title: "Premium Quality Services",
      description: "Our trained experts provide top-tier beauty and skincare services using premium products.",
    },
  ];

  return (
    <>
      <motion.div
      className=" shadow-lg rounded-lg p-4"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.2 }} // Ensures animation triggers when 20% of the element is visible
    >
        <section className={` bg-transparent p-4 rounded-lg`}>
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 ">Why Choose Us?</h2>
        <p className="text-lg max-w-2xl text-gray-500  mx-auto mb-10">
          Experience seamless beauty services at home with secure payments and professional care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4 text-black">{feature.title}</h3>
              <p className="text-gray-600 text-center mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
      </motion.div></>

  );
};

export default WhyChooseUs;
