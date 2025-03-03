import { useState } from "react";
import emailjs from "emailjs-com";

const BookingForm = () => {
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

    // Send confirmation email
    emailjs.send("service_xxxxx", "template_xxxxx", formData, "user_xxxxx")
      .then(() => alert("Booking confirmed! Check your email."))
      .catch((error) => alert("Failed to send confirmation email", error));

    // Store in Google Sheets (Use API call)
    console.log("Booking Details:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-lg p-6 rounded-md">
      <h2 className="text-2xl font-bold mb-4">Book an Appointment</h2>
      <input name="name" placeholder="Full Name" onChange={handleChange} className="input" required />
      <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input" required />
      <input name="address" placeholder="Address" onChange={handleChange} className="input" required />
      <select name="service" onChange={handleChange} className="input" required>
        <option value="">Select Service</option>
        <option value="Facial">Facial</option>
        <option value="Hair Spa">Hair Spa</option>
      </select>
      <input type="date" name="date" onChange={handleChange} className="input" required />
      <input type="time" name="time" onChange={handleChange} className="input" required />
      <select name="paymentMode" onChange={handleChange} className="input">
        <option value="COD">Cash on Delivery</option>
        <option value="UPI">UPI</option>
        <option value="Card">Credit/Debit Card</option>
      </select>
      <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600">Confirm Booking</button>
    </form>
  );
};

export default BookingForm;
