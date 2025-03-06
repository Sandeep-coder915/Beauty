import React, { useState, useEffect } from "react";
import { Star, Send } from "lucide-react";
import axios from "axios";

// Replace with actual URL
// const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbyokH5VDgsPCgjk-u-pDxB6--WYH0Su6E0429SpEMqaE-mKCgv6Dt_VO4OgxgnPo22D7g/exec"; 
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 5, review: "" });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(GOOGLE_SHEET_API_URL);
      setReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };
  const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbyokH5VDgsPCgjk-u-pDxB6--WYH0Su6E0429SpEMqaE-mKCgv6Dt_VO4OgxgnPo22D7g/exec";  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.review) return;
  
    try {
      await axios.post(GOOGLE_SHEET_API_URL, form, {
        headers: { "Content-Type": "application/json" }
      });
      setForm({ name: "", rating: 5, review: "" });
      fetchReviews(); // Refresh reviews after submission
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };
  

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-4">⭐ Customer Reviews</h2>

      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />
        <textarea
          placeholder="Your Review"
          value={form.review}
          onChange={(e) => setForm({ ...form, review: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        ></textarea>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600"
        >
          <Send className="w-5 h-5" /> Submit Review
        </button>
      </form>

      <div>
        {reviews.length === 0 ? (
          <p className="text-gray-500 text-center">No reviews yet.</p>
        ) : (
          reviews.map((r, index) => (
            <div key={index} className="border-b py-3">
              <p className="font-bold">{r.name} ⭐ {r.rating}</p>
              <p className="text-gray-700">{r.review}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Reviews;
