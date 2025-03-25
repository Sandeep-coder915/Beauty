import React from "react";
import { Routes, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import Home from "./Pages/Home";
import Services from './Pages/Services/Services'
import Booking from "./Pages/Booking/Booking";
import ContactForm from "./Pages/Contact";
import FacialTreatmentPage from "./Pages/Description/FacialTreatmentPage";
import AboutUs from "./Components/AboutUs";
import ComboOffers from "./Pages/Services/ComboOffers";
import Invoice from "./Pages/Booking/Invoice";
import FAQ from "./Components/FAQ";
import TermsAndServices from "./Pages/Policies/TermsAndServices";
import PrivacyPolicy from "./Pages/Policies/PrivacyPolicy";
import Reviews from "./Pages/Reviews";
import GoldFacial from "./Pages/Description/GoldFacial";
import HowWeWork from "./Pages/HowWeWork";
import SpinWheel from "./Components/SpinWheel";

// 404 Page Component
const NotFound =({ darkMode }) => {
  return (
    <motion.div
      className={`flex flex-col items-center justify-center  text-center p-20  ${darkMode ? 'bg-amber-600 text-white' : 'bg-yellow-50  text-pink-400'} `}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Warning Icon with Animation */}
      <AlertTriangle className="text-red-500 w-20 h-20 animate-bounce" />

      {/* Main 404 Message */}
      <h1 className="text-6xl font-extrabold text-gray-800 mt-6">404</h1>
      <p className="text-2xl text-gray-600 mt-2">Oops! Page Not Found</p>
      <p className="text-md text-gray-500 mt-2">
        The page you are looking for might have been removed or doesn't exist.
      </p>

      {/* Navigation Links */}
      <div className="mt-6 flex flex-wrap justify-center gap-4">
        <Link
          to="/"
          className="px-5 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          🔙 Go Back Home
        </Link>
        <Link
          to="/services"
          className="px-5 py-3 bg-green-600 text-white rounded-lg shadow-lg hover:bg-green-700 transition"
        >
          💆‍♀️ Explore Services
        </Link>
        <Link
          to="/about-us"
          className="px-5 py-3 bg-purple-600 text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
          ℹ️ About Us
        </Link>
        <Link
          to="/booking-form"
          className="px-5 py-3 bg-black text-white rounded-lg shadow-lg hover:bg-purple-700 transition"
        >
       Book An Appointment   ➡️
        </Link>
      </div>
      <FAQ/>
    </motion.div>
  );
};



const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<ContactForm />} />
      <Route path="/ComboOffers" element={<ComboOffers />} />
      <Route path="/booking-form" element={<Booking />} />
      <Route path="/facial-treatment" element={<FacialTreatmentPage />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/invoice" element={<Invoice />} />

      {/* Catch-all Route for 404 Page */}
      <Route path="*" element={<NotFound />} />
      <Route path="/FAQ" element={<FAQ/>} />
      <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
      <Route path="/terms-and-services" element={<TermsAndServices/>} />
      <Route path="/reviews" element={<Reviews/>} />


    {/* Pages  */}
    <Route path='/gold-facial' element={<GoldFacial/>} />
    <Route path='/how-we-work' element={<HowWeWork/>} />
    {/* <Route path='/spin' element={<SpinWheel/>} /> */}


    </Routes>
  );
};

export default AppRoutes;
