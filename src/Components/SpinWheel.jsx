import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRedo } from "react-icons/fa";

const discounts = [5, 10, 15, 20, 25, 30, 40, 50]; // Discount values

const SpinWheel = ({ onDiscountSelect }) => {
  const [spinning, setSpinning] = useState(false);
  const [selectedDiscount, setSelectedDiscount] = useState(null);
  const [alreadyClaimed, setAlreadyClaimed] = useState(false);

  useEffect(() => {
    const savedDiscount = localStorage.getItem("discount");
    if (savedDiscount) {
      setSelectedDiscount(parseInt(savedDiscount, 10));
      setAlreadyClaimed(true);
    }
  }, []);

  const spinWheel = () => {
    if (alreadyClaimed) {
      alert("You've already claimed your discount!");
      return;
    }

    setSpinning(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * discounts.length);
      const discount = discounts[randomIndex];
      setSelectedDiscount(discount);
      localStorage.setItem("discount", discount); // Save to prevent multiple spins
      setAlreadyClaimed(true);
      onDiscountSelect(discount); // Pass discount to parent component
      setSpinning(false);
    }, 3000); // Spinning animation duration
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-xl font-bold mb-4">🎡 Spin & Win a Discount!</h2>

      <motion.div
        animate={{ rotate: spinning ? 1080 : 0 }}
        transition={{ duration: 3, ease: "easeInOut" }}
        className="relative w-40 h-40 flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 rounded-full border-4 border-white shadow-xl"
      >
        <span className="text-white text-lg font-bold">
          {selectedDiscount ? `${selectedDiscount}% OFF` : "SPIN"}
        </span>
      </motion.div>

      <button
        onClick={spinWheel}
        className={`mt-4 px-4 py-2 text-white font-semibold rounded-lg shadow-md ${
          alreadyClaimed ? "bg-gray-400 cursor-not-allowed" : "bg-green-500 hover:bg-green-600"
        }`}
        disabled={alreadyClaimed}
      >
        {spinning ? "Spinning..." : alreadyClaimed ? "Claimed" : "Spin Now"}
      </button>

      {selectedDiscount && (
        <div className="mt-4 p-2 bg-yellow-200 text-yellow-900 font-bold rounded-lg">
          🎉 You won {selectedDiscount}% OFF!
        </div>
      )}

      {alreadyClaimed && (
        <button
          onClick={() => alert("Use your discount in the booking page!")}
          className="mt-2 flex items-center px-3 py-1 bg-blue-500 text-white rounded-lg"
        >
          <FaRedo className="mr-2" />
          Apply Discount
        </button>
      )}
    </div>
  );
};

export default SpinWheel;
