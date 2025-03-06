import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import beautyathomeLogo from "./ss.png";


const servicesList = [

    { name: "Any Hairstyle", image: "https://cdn.shopify.com/s/files/1/1412/4580/files/1_c81497c5-4134-4ba2-a943-9eb45f90e4ea_480x480.png?v=1655212092", description: "Customized stylish hairdos start with RS.600", price: 600 },
    { name: "Rebonding (Normal Length)", image: "https://cdn.shopify.com/s/files/1/1412/4580/files/1_c81497c5-4134-4ba2-a943-9eb45f90e4ea_480x480.png?v=1655212092", description: "Straight and silky hair treatment", price: 4500},
    { name: "Rebonding + Keratin + Highlights", image: "https://tigasouth-hairdresser.com/wp-content/uploads/2023/11/Highlights-ombre-1024x1024.webp", description: "Complete hair transformation", price: 5200 },
    { name: "KeratinSmooth", image: "https://www.libs.edu/wp-content/uploads/2018/10/KeratinSmoothingTreatments.jpg", description: "Smooth and shiny hair treatment", price: 4500 },

  { name: "Gold Facial", price: 2000 },
  { name: "Diamond Facial", price: 1499 },
  { name: "Bridal Facial", price: 1500 },
  { name: "Fruit Facial", price: 799 },
  { name: "Bleach, Facial, Full Leg Wax, Arm Wax, Threading", price: 1800 },
];

const Booking = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    houseNumber: "",
    address: "",
    landmark: "",
    pincode: "143001",
    services: [],
    date: "",
    time: "",
    paymentMode: "COD",
  });

  const totalAmount = formData.services.reduce((sum, service) => sum + service.price, 0);

  const handleServiceSelection = (service) => {
    setFormData((prev) => {
      const isSelected = prev.services.find((s) => s.name === service.name);
      const updatedServices = isSelected
        ? prev.services.filter((s) => s.name !== service.name)
        : [...prev.services, service];
      return { ...prev, services: updatedServices };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const googleSheetURL =
    "https://script.google.com/macros/s/AKfycbwszHdLGMP-qS4f9u-g8jlT8XunhodzwjE9QNtXdTTi0mMvcivG4950CIZeMS7IrvDZ/exec";

  const handleCOD = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const selectedServices =
      formData.services.length > 0
        ? formData.services.map((s) => `${s.name} (₹${s.price})`).join(", ")
        : "No service selected";

    const bookingData = {
      ...formData,
      services: selectedServices,
      amount: totalAmount,
      timestamp,
    };

    // Send data to Google Sheets
    await fetch(googleSheetURL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(bookingData),
    });

    // Send confirmation email
    await emailjs.send(
      "service_4dtz174",
      "template_og9488e",
      {
        user_name: bookingData.name,
        phone: bookingData.phone,
        houseNumber: bookingData.houseNumber,
        address: bookingData.address,
        landmark: bookingData.landmark,
        pincode: bookingData.pincode,
        service: selectedServices,
        date: bookingData.date,
        time: bookingData.time,
        paymentMode: bookingData.paymentMode,
        amount: bookingData.amount,
      },
      "77GhrP483V-tWB0LE"
    );

    navigate("/invoice", { state: bookingData });

  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>
        <form onSubmit={handleCOD} className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <input name="email" type="email" placeholder="Email Address (optional)" onChange={handleChange} className="w-full px-4 py-2 border text-black rounded-lg" required />
          <input name="houseNumber" placeholder="House Number" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <input name="address" placeholder="Street Address (Amritsar only)" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <div className="grid grid-cols-2 gap-4">
            <input name="landmark" placeholder="Landmark" onChange={handleChange} className="w-full text-black px-4 py-2 border rounded-lg" required />
            <input name="pincode" value="143001" className="w-full px-4 py-2 border rounded-lg text-black" readOnly />
          </div>

          <div className="text-black  ">Select Services:</div>
          {servicesList.map((service) => (
            <label key={service.name} className="flex items-center gap-2 dark:text-black">
              <input type="checkbox" onChange={() => handleServiceSelection(service)} checked={formData.services.includes(service)} />
              {service.name} - ₹{service.price}
            </label>
          ))}

          <div className="text-lg font-bold text-black">Total Amount: ₹{totalAmount}</div>
          <input type="date" name="date" onChange={handleChange} className="w-full text-black px-4 py-2 border rounded-lg" required />
          <input type="time" name="time" onChange={handleChange} className="w-full px-4 py-2 text-black border rounded-lg" required />
          <button type="submit" className="py-2 px-4 rounded-lg w-full bg-gray-500 text-black hover:bg-gray-700">
            Confirm Booking (COD)
          </button>
        </form>
      </div>
    </div>
  );
};

export default Booking;