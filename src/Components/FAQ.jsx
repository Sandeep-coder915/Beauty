import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus, HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "What services do you offer?",
      answer:
        "We provide a variety of beauty services including facials, waxing, hair treatments, bridal makeup, and more at your doorstep.",
    },
    {
      question: "How can I book an appointment?",
      answer:
        "You can book an appointment directly on our website through the booking form or by contacting us via WhatsApp.",
    },
    {
      question: "Do you offer doorstep beauty services?",
      answer:
        "Yes! We provide all our beauty services at your convenience, right at your home with pay-at-home options.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept Cash on Delivery (COD), UPI, and credit/debit card payments for all services.",
    },
    {
      question: "Do you provide combo offers?",
      answer:
        "Yes, we have multiple combo offers for facials, waxing, hair treatments, and more. Check our 'Combo Offers' page for details.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex items-center justify-center mb-6">
        <HelpCircle className="text-blue-600 w-10 h-10 animate-pulse" />
        <h2 className="text-3xl font-bold text-gray-800 ml-2">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            className="border border-gray-300 rounded-lg shadow-md overflow-hidden"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <button
              className="flex justify-between items-center w-full p-4 bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold text-gray-700">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-red-600" />
              ) : (
                <Plus className="w-6 h-6 text-blue-600" />
              )}
            </button>

            {openIndex === index && (
              <motion.div
                className="p-4 bg-white text-gray-600"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
