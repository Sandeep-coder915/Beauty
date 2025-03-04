import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import { jsPDF } from "jspdf";
import autoTable from "jspdf-autotable";
import beautyathomeLogo from "./ss.png"; // Adjust the path if needed

import { Loader } from "lucide-react"; // Import Loader icon for animation
const amritsarLocations = [
  "Golden Temple", "Ranjit Avenue", "Lawrence Road", "Mall Road",
  "Katra Jaimal Singh", "Wagah Border", "Alpha One Mall",
  "Guru Nanak Dev University", "Amritsar Railway Station", "Majitha Road",
  "Batala Road", "Sultanwind", "Green Avenue", "Putlighar", "Hall Bazar",
];

const Booking = () => {
  const navigate = useNavigate();
  const addressInputRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    houseNumber: "",
    address: "",
    landmark: "",
    pincode: "143001",
    service: "",
    date: "",
    time: "",
    paymentMode: "COD",
    amount: 500,
  });

  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "address") {
      const filteredSuggestions = amritsarLocations.filter((location) =>
        location.toLowerCase().startsWith(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    }
  };

  const handleSelectAddress = (address) => {
    setFormData({ ...formData, address });
    setSuggestions([]);
  };

  const sendEmailConfirmation = async (data) => {
    const emailData = {
      to_email: data.email,
      user_name: data.name,
      phone: data.phone,
      houseNumber: data.houseNumber,
      address: data.address,
      landmark: data.landmark,
      pincode: data.pincode,
      service: data.service,
      date: data.date,
      time: data.time,
      paymentMode: data.paymentMode,
      amount: data.amount,
    };

    await emailjs.send("service_4dtz174", "template_og9488e", emailData, "77GhrP483V-tWB0LE")
      .then(() => alert("Booking confirmed! Check your email."))
      .catch((error) => alert("Email sending failed", error));
  };


  const handleCOD = async (e) => {
    e.preventDefault();
    const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const codData = {
      ...formData,
      paymentId: "COD-" + new Date().getTime(),
      status: "Pending",
      timestamp, // Add timestamp
    };

    // Convert booking data to JSON format
    const jsonData = JSON.stringify(codData, null, 2);

    // Convert JSON to a base64 encoded string for sending via email
    const base64Json = btoa(unescape(encodeURIComponent(jsonData)));

    // Send JSON file to Admin via EmailJS
    await emailjs.send("service_4dtz174", "template_admin_notify", {
      to_email: "sandeep.revaais@gmail.com",  // Admin Email
      user_name: codData.name,
      phone: codData.phone,
      houseNumber: codData.houseNumber,
      address: codData.address,
      landmark: codData.landmark,
      pincode: codData.pincode,
      service: codData.service,
      date: codData.date,
      time: codData.time,
      paymentMode: codData.paymentMode,
      amount: codData.amount,
      json_attachment: base64Json,  // Attach JSON file
  }, "77GhrP483V-tWB0LE").then(() => console.log("Admin notified with JSON file"))
    .catch((error) => console.log("Failed to send JSON file to admin", error));

    // Send Confirmation Email to User
    await sendEmailConfirmation(codData);
    // 🔽 Generate PDF for Customer
    const doc = new jsPDF();

    // 🖼️ Add Logo
    doc.addImage(beautyathomeLogo, "PNG", 80, 10, 50, 20); // Centered logo

    // 🏷️ Add Title
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Booking Invoice", 80, 40);

    // 📌 Booking Info (Removed Icons)
    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");
    doc.text(`Booking ID: ${codData.paymentId}`, 14, 50);
    doc.text(`Date: ${codData.date}`, 14, 60);
    doc.text(`Time: ${codData.time}`, 14, 70);
    doc.text(`Status: ${codData.status}`, 14, 80);
    doc.text(`Timestamp: ${codData.timestamp}`, 14, 90);

    // 🙍 Customer Info (Removed Icons)
    doc.setFont("helvetica", "bold");
    doc.text("Customer Details:", 14, 100);
    doc.setFont("helvetica", "normal");
    doc.text(`Name: ${codData.name}`, 14, 110);
    doc.text(`Phone: ${codData.phone}`, 14, 120);
    doc.text(`Email: ${codData.email}`, 14, 130);
    doc.text(`Address: ${codData.houseNumber}, ${codData.address}`, 14, 140);
    doc.text(`Landmark: ${codData.landmark}`, 14, 150);
    doc.text(`Pincode: ${codData.pincode}`, 14, 160);

    // 🏷️ Booking Table
    autoTable(doc, {
      startY: 170,
      head: [["Service", "Amount (₹)", "Payment Mode"]],
      body: [[codData.service, codData.amount, codData.paymentMode]],
      theme: "grid",
      styles: { fontSize: 12, cellPadding: 5, halign: "center", valign: "middle" },
      headStyles: { fillColor: [100, 149, 237], textColor: [255, 255, 255] }, // Light blue header
      alternateRowStyles: { fillColor: [240, 248, 255] }, // Light alternate rows
    });

    // 🔽 Auto-Download Invoice as PDF
    doc.save(`Invoice_${codData.paymentId}.pdf`);

    // Show confirmation message
    alert("COD Order Placed Successfully! Invoice downloaded.");
    navigate("/confirmation", { state: { ...codData } });
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
          <div className="relative">
            <input ref={addressInputRef} name="address" value={formData.address} placeholder="Street Address (Amritsar only)" onChange={handleChange} className= " text-black w-full px-4 py-2 border rounded-lg" required />
            {suggestions.length > 0 && (
              <ul className="absolute bg-white border w-full text-black rounded-md mt-1 shadow-lg">
                {suggestions.map((location, index) => (
                  <li key={index} className="p-2 cursor-pointer text-black hover:bg-gray-200" onClick={() => handleSelectAddress(location)}>
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <input name="landmark" placeholder="Landmark" onChange={handleChange} className="w-full text-black px-4 py-2 border rounded-lg" required />
            <input name="pincode" value="143001" className="w-full px-4 py-2 border rounded-lg text-black" readOnly />
          </div>
          <select name="service" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required>
  <option value="">Select Service</option>
  <option value="Facial">Facial - ₹500</option>
  <option value="Hair Spa">Hair Spa - ₹800</option>
  <option value="Manicure">Manicure - ₹600</option>

  {/* Added Combo Services */}
  <option value="Bleach, Facial, Full Leg Wax, Arm Wax with Underarms, Threading, Upper Lips, Forehead">Bleach, Facial, Full Leg Wax, Arm Wax with Underarms, Threading, Upper Lips, Forehead - ₹1000</option>
  <option value="Manicure, Pedicure, Hair Spa">Manicure, Pedicure, Hair Spa - ₹850</option>
  <option value="Bleach, Facial, Manicure, Pedicure">Bleach, Facial, Manicure, Pedicure - ₹800</option>
  <option value="Rebonding (Normal Length)">Rebonding (Normal Length) - ₹3000</option>
  <option value="Rebonding + Keratin + Highlights">Rebonding + Keratin + Highlights - ₹4500</option>
  <option value="Kerasmoth">Kerasmoth - ₹3500</option>
  <option value="Global Highlights + Keratin (Normal Length)">Global Highlights + Keratin (Normal Length) - ₹3500</option>
  <option value="Any Hairstyle">Any Hairstyle (Starting from ₹400)</option>
  <option value="Party Makeup">Party Makeup - ₹1000</option>
</select>

          <input type="date" name="date" onChange={handleChange} className="w-full text-black px-4 py-2 border rounded-lg" required />
          <input type="time" name="time" onChange={handleChange} className="w-full px-4 py-2 text-black border rounded-lg" required />

          <button
      type="submit"
      className="flex items-center justify-center py-2 px-4 rounded-lg w-full transition-all duration-300 bg-gray-500 text-black hover:bg-gray-700"
      disabled={loading}
    >
      {loading ? <Loader className="animate-spin mr-2" size={18} /> : "Confirm Booking (COD)"}
    </button>
                  </form>
      </div>
    </div>
  );
};

export default Booking;