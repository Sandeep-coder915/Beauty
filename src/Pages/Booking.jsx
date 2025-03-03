import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";

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
    houseNumber: "",
    address: "",
    landmark: "",
    pincode: "143001", // Default Amritsar Pincode
    service: "",
    date: "",
    time: "",
    paymentMode: "COD",
    amount: 500,
  });

  const [suggestions, setSuggestions] = useState([]);
  const [googleLoaded, setGoogleLoaded] = useState(false);

  useEffect(() => {
    if (window.google) {
      setGoogleLoaded(true);
      const autocomplete = new window.google.maps.places.Autocomplete(addressInputRef.current, {
        types: ["geocode"],
        componentRestrictions: { country: "IN" },
      });

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        const city = place.address_components.find((component) =>
          component.types.includes("locality")
        )?.long_name;

        if (city !== "Amritsar") {
          alert("Sorry, we only accept bookings in Amritsar.");
          setFormData({ ...formData, address: "" });
        } else {
          setFormData({ ...formData, address: place.formatted_address });
        }
      });
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "address" && !googleLoaded) {
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
        amount: formData.amount * 100,
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

          {/* House Number Input */}
          <input name="houseNumber" placeholder="House Number" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />

          {/* Address Input with Autocomplete */}
          <div className="relative">
            <input
              ref={addressInputRef}
              name="address"
              value={formData.address}
              placeholder="Street Address (Amritsar only)"
              onChange={handleChange}
              className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400"
              required
            />
            {!googleLoaded && suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 w-full rounded-md mt-1 shadow-lg">
                {suggestions.map((location, index) => (
                  <li
                    key={index}
                    className="p-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleSelectAddress(location)}
                  >
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Landmark & Pincode (Same Row) */}
          <div className="grid grid-cols-2 gap-4">
            <input name="landmark" placeholder="Landmark" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
            <input name="pincode" placeholder="144301" className="input w-full px-4 py-2 border rounded-lg " />
          </div>

          <select name="service" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required>
            <option value="">Select Service</option>
            <option value="Facial">Facial - ₹500</option>
            <option value="Hair Spa">Hair Spa - ₹800</option>
            <option value="Manicure">Manicure - ₹600</option>
          </select>

          <input type="date" name="date" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
          <input type="time" name="time" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />

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
