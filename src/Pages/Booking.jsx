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
    pincode: "143001",
    service: "",
    date: "",
    time: "",
    paymentMode: "COD",
    amount: 500,
    email: "",
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

  const sendEmailConfirmation = async (paymentData) => {
    const emailParams = {
      to_name: paymentData.name,
      from_name: "Beauty At Home",
      email: paymentData.email,
      message: `
        Booking Confirmation

        Dear ${paymentData.name},

        Your booking has been confirmed! Here are the details:

        - Service: ${paymentData.service}
        - Date & Time: ${paymentData.date}, ${paymentData.time}
        - Amount: ₹${paymentData.amount}
        - Payment Mode: ${paymentData.paymentMode}
        - Payment ID: ${paymentData.paymentId}

        Address: ${paymentData.address}, ${paymentData.landmark}, ${paymentData.houseNumber}, ${paymentData.pincode}

        For any queries, contact us at support@beautyathome.com

        Best Regards,
        Beauty At Home
      `,
    };

    await emailjs
      .send("service_4dtz174", "template_4cl31bi", emailParams, "77GhrP483V-tWB0LE")
      .then(() => alert("Booking confirmed! Check your email."))
      .catch((error) => console.error("Email sending failed:", error));
  };

  const sendToGoogleSheet = async (data) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzwkct_PkGRdOWthV5PtYsQntlUTykH31FSy0zAvt_aXRUzrxJt9TS-gPssgRsTOmE0/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      const result = await response.text();
      console.log("Google Script Response:", result);
    } catch (error) {
      console.error("Error sending data to Google Sheets:", error);
    }
  };

  const handleCOD = async (e) => {
    e.preventDefault();

    const codData = {
      ...formData,
      paymentId: "COD-" + new Date().getTime(),
      status: "Pending",
    };

    await sendToGoogleSheet(codData);
    await sendEmailConfirmation(codData);
    alert("COD Order Placed Successfully! Check your email.");
    navigate("/confirmation", { state: { ...codData } });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-lg w-full bg-white p-8 shadow-xl rounded-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>
        <form onSubmit={handleCOD} className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
          <input name="email" type="email" placeholder="Email Address (optional)" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" />
          <input name="houseNumber" placeholder="House Number" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />

          <div className="relative">
            <input ref={addressInputRef} name="address" value={formData.address} placeholder="Street Address (Amritsar only)" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
            {!googleLoaded && suggestions.length > 0 && (
              <ul className="absolute bg-white border border-gray-300 w-full rounded-md mt-1 shadow-lg">
                {suggestions.map((location, index) => (
                  <li key={index} className="p-2 cursor-pointer hover:bg-gray-200" onClick={() => handleSelectAddress(location)}>
                    {location}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <input name="landmark" placeholder="Landmark" onChange={handleChange} className="input w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
          <input name="pincode" value="143001" className="input w-full px-4 py-2 border rounded-lg" readOnly />

          <input type="date" name="date" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />
          <input type="time" name="time" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-400" required />

          <button type="submit" className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 w-full">Confirm Booking (COD)</button>
        </form>
      </div>
    </div>
  );
};

export default Booking;
