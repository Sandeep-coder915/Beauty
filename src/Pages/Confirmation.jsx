import React, { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import cheersSound from "./yay-6326.mp3"; // Ensure this file is in the correct directory

const Confirmation = ({ darkmode }) => {
  const location = useLocation();
  const bookingData = location.state || {}; // Ensure bookingData exists
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    // Play cheers sound only once to prevent auto-play restrictions
    if (!hasPlayed) {
      const audio = new Audio(cheersSound);
      audio.play();
      setHasPlayed(true);
    }
  }, [hasPlayed]);

  return (
    <div
      className={`flex items-center justify-center min-h-screen p-6 ${
        darkmode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-lg w-full bg-white text-gray-800 p-8 shadow-2xl rounded-xl border border-gray-300"
      >
        {/* Success Message */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-3xl font-bold text-green-600 text-center mb-6"
        >
          ✅ Booking Confirmed!
        </motion.h2>

        {/* Booking Details */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-lg space-y-3 text-gray-700"
        >
          <p>📄 <strong>Booking ID:</strong> COD-{Date.now()}</p>
          <p>👤 <strong>Name:</strong> {bookingData.name || "N/A"}</p>
          <p>📞 <strong>Phone:</strong> {bookingData.phone || "N/A"}</p>
          <p>📌 <strong>Address:</strong> {bookingData.address || "N/A"}</p>
          <p>📍 <strong>Landmark:</strong> {bookingData.landmark || "N/A"}</p>
          <p>💆‍♀️ <strong>Services:</strong> {bookingData.services || "No service selected"}</p>
          <p>📅 <strong>Date:</strong> {bookingData.date || "N/A"}</p>
          <p>🕒 <strong>Time:</strong> {bookingData.time || "N/A"}</p>
          <p>💰 <strong>Amount:</strong> ₹{bookingData.amount || "N/A"}</p>
          <p>💳 <strong>Payment Mode:</strong> {bookingData.paymentMode || "N/A"}</p>
        </motion.div>

        {/* Celebration Icons */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-5xl text-center mt-6"
        >
          🎉🎊🥳
        </motion.div>

        {/* Home Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-6 flex justify-center"
        >
          <Link
            to="/"
            className="px-6 py-3 bg-pink-500 text-white font-semibold rounded-lg shadow-md hover:bg-pink-600 transform hover:scale-105 transition duration-300"
          >
            Go to Home 🏡
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Confirmation;
