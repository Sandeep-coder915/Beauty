import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    service: "",
    date: "",
    time: "",
    paymentMode: "COD",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send Email Confirmation
    emailjs.send("service_xxxx", "template_xxxx", formData, "user_xxxx")
      .then(() => alert("Booking confirmed! Check your email."))
      .catch((error) => alert("Email sending failed", error));

    // Redirect to confirmation page
    navigate("/confirmation", { state: { ...formData } });
  };

  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 shadow-lg rounded-md">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="input" required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" required />
        <input name="address" placeholder="Address" onChange={handleChange} className="input" required />
        <select name="service" onChange={handleChange} className="input" required>
          <option value="">Select Service</option>
          <option value="Facial">Facial</option>
          <option value="Hair Spa">Hair Spa</option>
          <option value="Manicure">Manicure</option>
        </select>
        <input type="date" name="date" onChange={handleChange} className="input" required />
        <input type="time" name="time" onChange={handleChange} className="input" required />
        <select name="paymentMode" onChange={handleChange} className="input">
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
        </select>
        <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 w-full">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;
