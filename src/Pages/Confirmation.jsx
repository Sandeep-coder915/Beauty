import { useLocation, Link } from "react-router-dom";

const Confirmation = () => {
  const { state } = useLocation();

  return (
    <div className="container mx-auto py-10 px-6 text-center">
      <h2 className="text-3xl font-bold text-green-500">Booking Confirmed!</h2>
      <p className="text-lg mt-2">Your appointment has been scheduled.</p>

      <div className="bg-white shadow-lg p-6 rounded-md mt-6 max-w-lg mx-auto">
        <p><strong>Name:</strong> {state.name}</p>
        <p><strong>Phone:</strong> {state.phone}</p>
        <p><strong>Address:</strong> {state.address}</p>
        <p><strong>Service:</strong> {state.service}</p>
        <p><strong>Date:</strong> {state.date}</p>
        <p><strong>Time:</strong> {state.time}</p>
        <p><strong>Payment Mode:</strong> {state.paymentMode}</p>
      </div>

      <Link to="/" className="mt-6 inline-block bg-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-600">
        Go to Home
      </Link>
    </div>
  );
};

export default Confirmation;
