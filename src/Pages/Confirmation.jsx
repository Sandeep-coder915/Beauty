import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();
  const location = useLocation();
  const bookingData = location.state || {}; // Ensure we get the passed state

  return (
    <div className="container mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-500">Booking Confirmed!</h2>
      <p className="text-lg mt-2">Your appointment has been scheduled.</p>

      <div className="bg-white text-black shadow-lg p-6 rounded-md mt-6 max-w-lg mx-auto">
      <p>👤 <strong>Name:</strong> {bookingData.name}</p>
      <p>📞 <strong>Phone:</strong> {bookingData.phone}</p>
      <p>📌 <strong>Address:</strong> {bookingData.address}</p>
      <p>📍 <strong>Landmark:</strong> {bookingData.landmark}</p>
      <p>💆‍♀️ <strong>Services:</strong> {bookingData.services ? bookingData.services : "No service selected"}</p>
      <p>📅 <strong>Date:</strong> {bookingData.date}</p>
      <p>🕒 <strong>Time:</strong> {bookingData.time}</p>
      <p>📍 <strong>Payment Mode:</strong> {bookingData.paymentMode}</p>
      <p>💰 <strong>Amount:</strong> ₹{bookingData.amount}</p>
      </div>

      <Link to="/" className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600">
        Go to Home
      </Link>
    </div>
  );
};

export default Confirmation;
