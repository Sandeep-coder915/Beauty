import { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send("service_2qgc2lp","template_peo6c8o", formData, "77GhrP483V-tWB0LE")
      .then(() => {
        setStatusMessage("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      })
      .catch(() => setStatusMessage("Failed to send message. Try again."))
      .finally(() => setLoading(false));
  };

  return (
    <div className={`flex items-center justify-center mt-2 bg-gray-100 px-4 darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"`}>
      <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>

        {/* Status Message */}
        {statusMessage && <p className="text-center text-green-500 font-semibold">{statusMessage}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4  text-black py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
            required
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full  text-black px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
            required
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4  text-black py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
            required
          />

          {/* Message */}
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4  text-black py-2 border rounded-lg focus:ring-2 focus:ring-pink-400 h-32 resize-none"
            required
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full  bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition font-semibold"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
