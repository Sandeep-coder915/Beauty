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
    amount: 500, // Default amount (adjust based on service)
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendToGoogleSheet = async (paymentData) => {
    await fetch("YOUR_GOOGLE_APPS_SCRIPT_URL", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(paymentData),
    });
  };

  const sendEmailConfirmation = async (data) => {
    await emailjs.send("service_xxxx", "template_xxxx", data, "user_xxxx")
      .then(() => alert("Booking confirmed! Check your email."))
      .catch((error) => alert("Email sending failed", error));
  };

  const handleRazorpayPayment = () => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      const options = {
        key: "YOUR_RAZORPAY_KEY",
        amount: formData.amount * 100, // Convert to paise
        currency: "INR",
        name: "Revaais and Group",
        description: `Payment for ${formData.service}`,
        handler: function (response) {
          const paymentData = {
            ...formData,
            paymentId: response.razorpay_payment_id,
            status: "Paid",
          };

          sendToGoogleSheet(paymentData);
          sendEmailConfirmation(paymentData);
          alert("Payment Successful!");
          navigate("/confirmation", { state: { ...paymentData } });
        },
        prefill: {
          name: formData.name,
          email: "customer@example.com",
          contact: formData.phone,
        },
        theme: {
          color: "#F37254",
        },
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
  };

  const handleCOD = (e) => {
    e.preventDefault();
    const codData = {
      ...formData,
      paymentId: "COD-" + new Date().getTime(),
      status: "Pending",
    };

    sendToGoogleSheet(codData);
    sendEmailConfirmation(codData);
    alert("COD Order Placed Successfully!");
    navigate("/confirmation", { state: { ...codData } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-lg">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>
      <form onSubmit={handleCOD} className="space-y-4">
        <input name="name" placeholder="Full Name" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
        <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
        <input name="address" placeholder="Address" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
        <select name="service" onChange={handleChange} className=" w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required>
          <option value="">Select Service</option>
          <option value="Facial">Facial - ₹500</option>
          <option value="Hair Spa">Hair Spa - ₹800</option>
          <option value="Manicure">Manicure - ₹600</option>
        </select>
        <input type="date" name="date" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
        <input type="time" name="time" onChange={handleChange} className=" w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
        <select name="paymentMode" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400">
          <option value="COD">Cash on Delivery</option>
          <option value="UPI">UPI</option>
          <option value="Card">Credit/Debit Card</option>
        </select>

        <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 w-full">
          Confirm Booking (COD)
        </button>

        <button type="button" onClick={handleRazorpayPayment} className="bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 w-full mt-3">
          Pay Now (UPI/Card)
        </button>
      </form>
    </div>
    </div>
  );
};

export default Booking;
