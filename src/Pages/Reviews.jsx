import React, { useState, useEffect } from "react";
import { Star, Send } from "lucide-react";
import axios from "axios";

const GOOGLE_SHEET_API_URL = "https://script.google.com/macros/s/AKfycbxvEepwLA6-mSbltxCAf-I9GT-Vq1YrdIB33KNffaabQE39ma_XdNi25f4vDan5srNKdw/exec";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [form, setForm] = useState({ name: "", rating: 5, review: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await axios.get(GOOGLE_SHEET_API_URL);
      const approvedReviews = response.data.filter((r) => r.status === "done"); // Only fetch "done" reviews
      setReviews(approvedReviews);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.review) return;

    setLoading(true);
    try {
      const reviewData = { ...form, status: "pending" }; // Default status is "pending"
      await axios.post(GOOGLE_SHEET_API_URL, reviewData, {
        headers: { "Content-Type": "application/json" }
      });

      setForm({ name: "", rating: 5, review: "" });
      alert("Review submitted! It will be visible after approval.");
    } catch (error) {
      console.error("Error submitting review:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">⭐ Customer Reviews</h2>

      {/* Review Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        />

        <select
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        >
          {[5, 4, 3, 2, 1].map((star) => (
            <option key={star} value={star}>
              {Array(star).fill("⭐").join("")}
            </option>
          ))}
        </select>

        <textarea
          placeholder="Your Review"
          value={form.review}
          onChange={(e) => setForm({ ...form, review: e.target.value })}
          className="w-full p-2 border rounded mb-2"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded flex items-center gap-2 hover:bg-blue-600 w-full"
          disabled={loading}
        >
          {loading ? "Submitting..." : <> <Send className="w-5 h-5" /> Submit Review </>}
        </button>
      </form>

      {/* Display Approved Reviews */}
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
