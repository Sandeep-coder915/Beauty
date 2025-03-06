import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import beautyathomeLogo from "./ss.png";

const servicesList = [
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

  const handleCOD = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const selectedServices = formData.services.length > 0
    ? formData.services.map((s) => `${s.name} (₹${s.price})`).join(", ")
    : "No service selected";  // Prevent empty service issue

    // Prepare the booking data
    const bookingData = {
      ...formData,
      services: selectedServices, // Send as a string
      amount: totalAmount,
      timestamp,
    };


    // Send the email
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
        service: selectedServices, // Ensure service is sent correctly
        date: bookingData.date,
        time: bookingData.time,
        paymentMode: bookingData.paymentMode,
        amount: bookingData.amount
      },
      "77GhrP483V-tWB0LE"
    );

    // Generate PDF invoice
    const doc = new jsPDF();
    doc.addImage(beautyathomeLogo, "PNG", 80, 10, 50, 20);
    doc.setFontSize(18);
    doc.text("Booking Invoice", 80, 40);
    doc.setFontSize(12);
    doc.text(`Booking ID: COD-${Date.now()}`, 14, 50);
    doc.text(`Date: ${bookingData.date}`, 14, 60);
    doc.text(`Time: ${bookingData.time}`, 14, 70);
    doc.text(`Customer: ${bookingData.name}`, 14, 90);
    doc.text(`Total Amount: ₹${bookingData.amount}`, 14, 100);

    autoTable(doc, {
      startY: 110,
      head: [["Service", "Price (₹)"]],
      body: formData.services.map((s) => [s.name, s.price]),
      theme: "grid",
    });

    doc.save(`Invoice_${Date.now()}.pdf`);
    alert("Booking confirmed! Invoice downloaded.");
    navigate("/confirmation", { state: bookingData });
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

          <div className="text-black">Select Services:</div>
          {servicesList.map((service) => (
            <label key={service.name} className="flex items-center gap-2">
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
