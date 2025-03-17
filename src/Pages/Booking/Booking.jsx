import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "emailjs-com";
import PromotionalContent from "../../Components/PromotionalContent";
// Initialize loading state

const servicesList = [
  { name: "Gold Facial", price: 2100 },
  { name: "Diamond Facial", price: 1599 },
  { name: "Bridal Facial", price: 1600 },
  { name: "Party Makeup", price: 1600 },
  { name: "Fruit Facial", price: 899 },
  { name: "Aloevera Facial", price: 799 },
  { name: "D-Tan Facial", price: 1600 },
  { name: "Lotus Facial", price: 1600 },
  { name: "Wine Facial", price: 999 },
  { name: "Bleach, Facial, Full Leg Wax, Arm Wax, Threading", price: 1899 },
  { name: "Any Hairstyle", price: 699 },
  { name: "Trimming + Headwash", price: 799 },
  { name: "Hair Wash With Mask", price: 999 },
  { name: "Rebonding (Normal Length)", price: 4600 },
  { name: "Manicure + Pedicure + Hair Spa", price: 1299},
  { name: "Rebonding + Keratin + Highlights", price: 5300 },
  { name: "Global Highlights + Keratin (Normal Length)", price: 4599 },
  { name: "KeraSmooth", price: 4599 },
  { name: "Full Body Wax", price: 3199 },
  { name: "Bikini Wax", price: 799 },
  { name: "Body Polishing", price: 2100 },
  { name: "Manicure & Pedicure", price: 1299 },
  { name: "Nail Cut & File + Foot Massage", price: 599 },
  { name: "Mehndi + Threading + Cleanup", price: 699 },
];


const Booking = () => {
  const navigate = useNavigate();
  const [couponApplied, setCouponApplied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
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
    appliedCoupon: "",   // NEW: To store coupon code
    discountAmount: 0,
  });

  const totalAmount =   formData.services.reduce((sum, service) => sum + service.price, 0) - formData.discountAmount;

  const applyCoupon = () => {
    if (coupon === "HOLISPECIAL150") {
      setDiscount(150);
      setFormData((prevFormData) => ({
        ...prevFormData,
        appliedCoupon: "HOLISPECIAL150",
        discountAmount: 150,
      }));
      setCouponApplied(true);
    } else {
      setDiscount(0);
      setFormData((prevFormData) => ({
        ...prevFormData,
        appliedCoupon: "", // Clear if invalid
        discountAmount: 0,
      }));
      setCouponApplied(false);
      alert("Invalid Coupon Code");
    }
  };
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
    const currentDate = new Date();
    const { name, value } = e.target;
    if (name === "address") {
      // Address validation: Must contain "Amritsar"
      if (!value.toLowerCase().includes("amritsar")) {
        setError("Address must be within Amritsar.");
        return;
      } else {
        setError(""); // Clear error if valid
      }
    }
    if (name === "name") {
      if (value.length < 3) {
        setError("Full Name must be at least 3 characters long.");
        return;
      } else {
        setError("");
      }
    }

    // Phone Number Validation: Must be a 10-digit number
    if (name === "phone") {
      const phoneRegex = /^[0-9]{10}$/;
      if (!phoneRegex.test(value)) {
        setError("Phone Number must be a 10-digit number.");
        return;
      } else {
        setError("");
      }
    }

    // Email Validation: Must be a valid email format
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        setError("Please enter a valid Email Address.");
        return;
      } else {
        setError("");
      }
    }

    // House Number Validation: Must be alphanumeric
    if (name === "houseNumber") {
      const houseRegex = /^[a-zA-Z0-9\s\-]+$/;
      if (!houseRegex.test(value)) {
        setError("House Number must contain only letters, numbers, spaces, or hyphens.");
        return;
      } else {
        setError("");
      }
    }

    setFormData({ ...formData, [name]: value });

  };

  const googleSheetURL =
    "https://script.google.com/macros/s/AKfycbx7ANKqBk9rPjXBMSVg2CLuy2QAm23e3sMm7xZdSfZZTiQfwuO1-49wN2ls5EjT5q3E/exec";

  const handleCOD = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!formData.address.toLowerCase().includes("amritsar")) {
      setError("Please enter a valid address in Amritsar.");
      setLoading(false);
      return;
    }

    try {
      const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

      const selectedServices =
        formData.services.length > 0
          ? formData.services.map((s) => `${s.name} (₹${s.price})`).join(", ")
          : "No service selected";

      const bookingData = {
        ...formData,
        services: selectedServices,
        amount: totalAmount,
        appliedCoupon: formData.appliedCoupon || "No Coupon", // Default if no coupon
        discountAmount: formData.discountAmount || 0, // Default if no discount
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
          appliedCoupon: bookingData.appliedCoupon, // Include coupon in email
          discountAmount: bookingData.discountAmount,
        },
        "77GhrP483V-tWB0LE"
      );

      navigate("/invoice", { state: bookingData });
    } catch (error) {
      console.error("Error during booking:", error);
    } finally {
      setLoading(false); // Hide loader after processing
    }
  };


  return (
    <div className="flex items-center justify-center min-h-screen bg-transparent">
      <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-white text-black p-10 shadow-xl rounded-lg">

        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>
        <PromotionalContent/>
        <form onSubmit={handleCOD} className="space-y-4">
          <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <input name="email" type="email" placeholder="Email Address  " onChange={handleChange} className="w-full px-4 py-2 border text-black rounded-lg" required />
          <input name="houseNumber" placeholder="House Number" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          <input name="address" placeholder="Street Address (Amritsar only)" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          <div className="grid grid-cols-2 gap-4">
            <input name="landmark" placeholder="Landmark" onChange={handleChange} className="w-full text-black px-4 py-2 border rounded-lg" required />
            <input name="pincode" value="143001" className="w-full px-4 py-2 border rounded-lg text-black" readOnly />
          </div>

          <div className="text-xl font-semibold mb-2 text-gray-800  ">Select Services You Want:</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {servicesList.map((service) => (
              <label
                key={service.name}
                className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all
                  ${formData.services.includes(service) ? "border-green-500 bg-green-100 shadow-lg" : "border-gray-300 bg-white"}
                  hover:border-green-500 hover:bg-green-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700`}
              >
                <input
                  type="checkbox"
                  className="hidden"
                  onChange={() => handleServiceSelection(service)}
                  checked={formData.services.includes(service)}
                />
                <div className="flex items-center gap-3">
                  <div className={`w-6 h-6 flex items-center justify-center border-2 rounded-full ${formData.services.includes(service) ? "border-green-500 bg-green-500" : "border-gray-400"}`}>
                    {formData.services.includes(service) && <span className="text-white font-bold">✓</span>}
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{service.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">₹{service.price}</p>
                  </div>
                </div>
              </label>
            ))}
          </div>
          <div className="flex flex-col items-center">
  <input
    type="text"
    placeholder="Enter Coupon Code"
    value={coupon}
    onChange={(e) => setCoupon(e.target.value)}
    className="w-full px-4 py-2 border rounded-lg text-black"
  />
  <button
    type="button"
    onClick={applyCoupon}
    className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
  >
    Apply Coupon
  </button>

  {/* ✅ Show Cheer Up Icon on Successful Coupon Application */}
  {couponApplied && (
    <div className="mt-2 text-green-500 flex items-center">
      <span className="text-2xl">🎉</span>
      <span className="ml-2 font-semibold">Coupon Applied Successfully!</span>
    </div>
  )}
</div>

          {/* Display Total Amount */}
          <div className="text-xl font-semibold text-gray-800 text-center mt-4">
            Total Amount: <span className="text-green-500">₹{totalAmount}</span>
          </div>
{/* Apply Coupan Code here  */}
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg text-center">

  <div className="flex flex-col space-y-4">
    <div className="relative">
      <label className="block text-gray-300 font-medium mb-1">Select Date</label>
      <input
        type="date"
        name="date"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
        required
      />
    </div>

    {/* <div className="relative">
      <label className="block text-gray-300 font-medium mb-1">Select Time</label>
      <input
        type="time"
        name="time"
        onChange={handleChange}
        className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
      />
    </div> */}
  </div>
</div>
         <button
            type="submit"
            className="relative py-3 px-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
            disabled={loading} // Disable button when processing
          >
            {loading ? (
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Processing...
              </div>
            ) : (
              "Confirm Booking (COD) ➡️"
            )}
          </button>


        </form>
      </div>
    </div>
  );
};

export default Booking;










// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import emailjs from "emailjs-com";
// import PromotionalContent from "../../Components/PromotionalContent";
// // Initialize loading state
// const servicesList = {
//   Facial: [
//     { name: "Gold Facial", price: 2100 },
//     { name: "Party Makeup", price: 1600 },
//     { name: "Diamond Facial", price: 1599 },
//     { name: "Bridal Facial", price: 1600 },
//     { name: "Fruit Facial", price: 899 },
//     { name: "Aloevera Facial", price: 799 },
//     { name: "D-Tan Facial", price: 1600 },
//     { name: "Lotus Facial", price: 1600 },
//     { name: "Wine Facial", price: 999 },
//   ],
//   Skincare: [
//     { name: "Body Polishing", price: 2100 },
//     { name: "Full Body Wax", price: 3199 },
//     { name: "Bikini Wax", price: 799 },

//     { name: "Bleach, Facial, Full Leg Wax, Arm Wax, Threading", price: 1899 },
//   ],
//   Haircare: [
//     { name: "Any Hairstyle", price: 699 },
//     { name: "Trimming + Headwash", price: 799 },
//     { name: "Hair Wash With Mask", price: 999 },
//     { name: "Rebonding (Normal Length)", price: 4600 },
//     { name: "Rebonding + Keratin + Highlights", price: 5300 },
//     { name: "Global Highlights + Keratin (Normal Length)", price: 4599 },
//     { name: "KeraSmooth", price: 4599 },
//   ],

//   Combo: [
//     { name: "Manicure + Pedicure + Hair Spa", price: 1299 },
//     { name: "Manicure & Pedicure", price: 1299 },
//     { name: "Nail Cut & File + Foot Massage", price: 599 },
//     { name: "Mehndi + Threading + Cleanup", price: 699 },
//   ],
// };


// const Booking = () => {
//   const [activeTab, setActiveTab] = useState("Facial");
//   const navigate = useNavigate();
//   const [couponApplied, setCouponApplied] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const [coupon, setCoupon] = useState("");
//   const [discount, setDiscount] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     email: "",
//     houseNumber: "",
//     address: "",
//     landmark: "",
//     pincode: "143001",
//     services: [],
//     date: "",
//     time: "",
//     paymentMode: "COD",
//     appliedCoupon: "",   // NEW: To store coupon code
//     discountAmount: 0,
//   });

//   const totalAmount =   formData.services.reduce((sum, service) => sum + service.price, 0) - formData.discountAmount;

//   const applyCoupon = () => {
//     if (coupon === "HOLISPECIAL150") {
//       setDiscount(150);
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         appliedCoupon: "HOLISPECIAL150",
//         discountAmount: 150,
//       }));
//       setCouponApplied(true);
//     } else {
//       setDiscount(0);
//       setFormData((prevFormData) => ({
//         ...prevFormData,
//         appliedCoupon: "", // Clear if invalid
//         discountAmount: 0,
//       }));
//       setCouponApplied(false);
//       alert("Invalid Coupon Code");
//     }
//   };
//   const handleServiceSelection = (service) => {
//     setFormData((prev) => {
//       const isSelected = prev.services.find((s) => s.name === service.name);
//       const updatedServices = isSelected
//         ? prev.services.filter((s) => s.name !== service.name)
//         : [...prev.services, service];
//       return { ...prev, services: updatedServices };
//     });
//   };

//   const handleChange = (e) => {
//     const currentDate = new Date();
//     const { name, value } = e.target;
//     if (name === "address") {
//       // Address validation: Must contain "Amritsar"
//       if (!value.toLowerCase().includes("amritsar")) {
//         setError("Address must be within Amritsar.");
//         return;
//       } else {
//         setError(""); // Clear error if valid
//       }
//     }
//     if (name === "name") {
//       if (value.length < 3) {
//         setError("Full Name must be at least 3 characters long.");
//         return;
//       } else {
//         setError("");
//       }
//     }

//     // Phone Number Validation: Must be a 10-digit number
//     if (name === "phone") {
//       const phoneRegex = /^[0-9]{10}$/;
//       if (!phoneRegex.test(value)) {
//         setError("Phone Number must be a 10-digit number.");
//         return;
//       } else {
//         setError("");
//       }
//     }

//     // Email Validation: Must be a valid email format
//     if (name === "email") {
//       const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//       if (!emailRegex.test(value)) {
//         setError("Please enter a valid Email Address.");
//         return;
//       } else {
//         setError("");
//       }
//     }

//     // House Number Validation: Must be alphanumeric
//     if (name === "houseNumber") {
//       const houseRegex = /^[a-zA-Z0-9\s\-]+$/;
//       if (!houseRegex.test(value)) {
//         setError("House Number must contain only letters, numbers, spaces, or hyphens.");
//         return;
//       } else {
//         setError("");
//       }
//     }

//     setFormData({ ...formData, [name]: value });

//   };

//   const googleSheetURL =
//     "https://script.google.com/macros/s/AKfycbx7ANKqBk9rPjXBMSVg2CLuy2QAm23e3sMm7xZdSfZZTiQfwuO1-49wN2ls5EjT5q3E/exec";

//   const handleCOD = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     if (!formData.address.toLowerCase().includes("amritsar")) {
//       setError("Please enter a valid address in Amritsar.");
//       setLoading(false);
//       return;
//     }

//     try {
//       const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

//       const selectedServices =
//         formData.services.length > 0
//           ? formData.services.map((s) => `${s.name} (₹${s.price})`).join(", ")
//           : "No service selected";

//       const bookingData = {
//         ...formData,
//         services: selectedServices,
//         amount: totalAmount,
//         appliedCoupon: formData.appliedCoupon || "No Coupon", // Default if no coupon
//         discountAmount: formData.discountAmount || 0, // Default if no discount
//         timestamp,
//       };

//       // Send data to Google Sheets
//       await fetch(googleSheetURL, {
//         method: "POST",
//         mode: "no-cors",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(bookingData),
//       });

//       // Send confirmation email
//       await emailjs.send(
//         "service_4dtz174",
//         "template_og9488e",
//         {
//           user_name: bookingData.name,
//           phone: bookingData.phone,
//           houseNumber: bookingData.houseNumber,
//           address: bookingData.address,
//           landmark: bookingData.landmark,
//           pincode: bookingData.pincode,
//           service: selectedServices,
//           date: bookingData.date,
//           time: bookingData.time,
//           paymentMode: bookingData.paymentMode,
//           amount: bookingData.amount,
//           appliedCoupon: bookingData.appliedCoupon, // Include coupon in email
//           discountAmount: bookingData.discountAmount,
//         },
//         "77GhrP483V-tWB0LE"
//       );

//       navigate("/invoice", { state: bookingData });
//     } catch (error) {
//       console.error("Error during booking:", error);
//     } finally {
//       setLoading(false); // Hide loader after processing
//     }
//   };


//   return (
//     <div className="flex items-center justify-center min-h-screen bg-transparent">
//       <div className="w-full max-w-lg md:max-w-2xl lg:max-w-3xl bg-white text-black p-10 shadow-xl rounded-lg">

//         <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Book an Appointment</h2>
//         <PromotionalContent/>
//         <form onSubmit={handleCOD} className="space-y-4">
//           <input name="name" placeholder="Full Name" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
//           <input name="phone" placeholder="Phone Number must be 10 digit" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
//           <input name="email" type="email" placeholder="Email Address  " onChange={handleChange} className="w-full px-4 py-2 border text-black rounded-lg" required />
//           <input name="houseNumber" placeholder="House Number" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
//           <input name="address" placeholder="Street Address (Amritsar only)" onChange={handleChange} className="w-full px-4 py-2 border rounded-lg text-black" required />
//           {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
//           <div className="grid grid-cols-2 gap-4">
//             <input name="landmark" placeholder="Landmark" onChange={handleChange} className="w-full text-black px-4 py-2 border rounded-lg" required />
//             <input name="pincode" value="143001" className="w-full px-4 py-2 border rounded-lg text-black" readOnly />
//           </div>

//           <div className="p-4">
//       <div className="flex space-x-4 mb-4">
//         {Object.keys(servicesList).map((category) => (
//           <button
//             key={category}
//             className={`px-4 py-2 rounded-lg font-semibold transition-all ${
//               activeTab === category
//                 ? "bg-green-500 text-white"
//                 : "bg-gray-200 text-gray-800 hover:bg-green-200"
//             }`}
//             onClick={() => setActiveTab(category)}
//           >
//             {category}
//           </button>
//         ))}
//       </div>

//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//         {servicesList[activeTab].map((service) => (
//           <label
//             key={service.name}
//             className={`flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-all
//               ${formData.services.includes(service) ? "border-green-500 bg-green-100 shadow-lg" : "border-gray-300 bg-white"}
//               hover:border-green-500 hover:bg-green-50 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700`}
//           >
//             <input
//               type="checkbox"
//               className="hidden"
//               onChange={() => handleServiceSelection(service)}
//               checked={formData.services.includes(service)}
//             />
//             <div className="flex items-center gap-3">
//               <div className={`w-6 h-6 flex items-center justify-center border-2 rounded-full ${formData.services.includes(service) ? "border-green-500 bg-green-500" : "border-gray-400"}`}>
//                 {formData.services.includes(service) && <span className="text-white font-bold">✓</span>}
//               </div>
//               <div>
//                 <p className="font-medium text-gray-900 dark:text-white">{service.name}</p>
//                 <p className="text-sm text-gray-600 dark:text-gray-300">₹{service.price}</p>
//               </div>
//             </div>
//           </label>
//         ))}
//       </div>
//     </div>
//           <div className="flex flex-col items-center">
//   <input
//     type="text"
//     placeholder="Enter Coupon Code"
//     value={coupon}
//     onChange={(e) => setCoupon(e.target.value)}
//     className="w-full px-4 py-2 border rounded-lg text-black"
//   />
//   <button
//     type="button"
//     onClick={applyCoupon}
//     className="mt-2 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-700"
//   >
//     Apply Coupon
//   </button>

//   {/* ✅ Show Cheer Up Icon on Successful Coupon Application */}
//   {couponApplied && (
//     <div className="mt-2 text-green-500 flex items-center">
//       <span className="text-2xl">🎉</span>
//       <span className="ml-2 font-semibold">Coupon Applied Successfully!</span>
//     </div>
//   )}
// </div>

//           {/* Display Total Amount */}
//           <div className="text-xl font-semibold text-gray-800 text-center mt-4">
//             Total Amount: <span className="text-green-500">₹{totalAmount}</span>
//           </div>
// {/* Apply Coupan Code here  */}
//           <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl shadow-lg text-center">

//   <div className="flex flex-col space-y-4">
//     <div className="relative">
//       <label className="block text-gray-300 font-medium mb-1">Select Date</label>
//       <input
//         type="date"
//         name="date"
//         onChange={handleChange}
//         className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-400 focus:outline-none"
//         required
//       />
//     </div>

//     {/* <div className="relative">
//       <label className="block text-gray-300 font-medium mb-1">Select Time</label>
//       <input
//         type="time"
//         name="time"
//         onChange={handleChange}
//         className="w-full px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
//       />
//     </div> */}
//   </div>
// </div>
//          <button
//             type="submit"
//             className="relative py-3 px-6 w-full rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold shadow-lg hover:from-blue-600 hover:to-blue-800 transition-all duration-300 flex items-center justify-center"
//             disabled={loading} // Disable button when processing
//           >
//             {loading ? (
//               <div className="flex items-center gap-2">
//                 <svg className="w-5 h-5 animate-spin text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
//                   <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
//                   <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
//                 </svg>
//                 Processing...
//               </div>
//             ) : (
//               "Confirm Booking (COD) ➡️"
//             )}
//           </button>


//         </form>
//       </div>
//     </div>
//   );
// };

// export default Booking;