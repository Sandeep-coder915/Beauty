import { Home, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Home size={48} className="text-pink-500" />,
      title: "Convenient Home Services",
      description: "Book beauty services from the comfort of your home and get professional care at your doorstep.",
    },
    {
      icon: <CreditCard size={48} className="text-pink-500" />,
      title: "Flexible Payment Options",
      description: "Pay via Cash on Delivery (COD), UPI, or credit/debit cards—secure and hassle-free.",
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
    <section className={`  darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"`}>
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl font-bold mb-6 text-pink-600">Why Choose Us?</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Experience seamless beauty services at home with secure payments and professional care.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center transition-transform transform hover:scale-105"
            >
              {feature.icon}
              <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
              <p className="text-gray-600 text-center mt-2">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
