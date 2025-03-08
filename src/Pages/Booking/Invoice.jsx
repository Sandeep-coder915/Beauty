import React, { useEffect, useRef, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import cheersSound from "./yay-6326.mp3";

const Invoice = ({ darkmode }) => {
  const location = useLocation();
  const bookingData = location.state || {};
  const invoiceRef = useRef();
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Trigger confetti animation
    confetti({
      particleCount: 150,
      spread: 80,
      origin: { y: 0.6 },
    });

    // Play cheers sound only once
    if (!hasPlayed) {
      const audio = new Audio(cheersSound);
      audio.play().catch((err) => console.error("Audio playback failed:", err));
      setHasPlayed(true);
    }
  }, [hasPlayed]);

  const handlePrintPDF = () => {
    const content = document.getElementById("invoiceContent").innerHTML;

    const printWindow = document.createElement("iframe");
    printWindow.style.position = "absolute";
    printWindow.style.width = "0";
    printWindow.style.height = "0";
    printWindow.style.border = "none";
    document.body.appendChild(printWindow);

    const doc = printWindow.contentDocument || printWindow.contentWindow.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <title>Invoice</title>
          <style>
            @media print {
              body {
                font-family: Arial, sans-serif;
                margin: 20px;
                background: #fff;
                color: #000;
              }
              #printContent {
                max-width: 650px;
                margin: auto;
                border: 2px solid #000;
                padding: 20px;
                box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);
                text-align: center;
              }
              #printContent h2 {
                color: green;
                font-size: 24px;
                margin-bottom: 10px;
              }
              #printContent p {
                font-size: 16px;
                margin: 8px 0;
              }
            }
          </style>
        </head>
        <body>
          <div id="printContent">${content}</div>
          <script>
            window.onload = function() {
              window.print();
              setTimeout(() => { window.close(); }, 1000);
            };
          </script>
        </body>
      </html>
    `);
    doc.close();
  };

  return (
    <div
      className={`flex items-center justify-center   p-6 ${
        darkmode ? "bg-gray-100 text-gray-900" : "bg-gray-900 text-white"
      }`}
    >
      <motion.div
        id="invoiceContent"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="max-w-lg w-full bg-white text-gray-800 p-8 shadow-2xl rounded-xl border border-gray-300"
        ref={invoiceRef}
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

        {/* Print PDF Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-6 flex justify-center"
        >
          <button
            onClick={handlePrintPDF}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transform hover:scale-105 transition duration-300"
          >
            📥 Print / Save as PDF
          </button>
        </motion.div>

        {/* Home Button */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
          className="mt-4 flex justify-center"
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

export default Invoice;
