import React from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Booking from './Pages/Booking'

import { Routes, Route } from 'react-router-dom';

import ContactForm from './Pages/Contact';
 
import FacialTreatmentPage from './Pages/Categories/FacialTreatmentPage';
import AboutUs from './Components/AboutUs';
import ComboOffers from './Pages/ComboOffers';
import Invoice from './Pages/Invoice';
const AppRoutes = () => {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<ContactForm/>} />
      <Route path="/ComboOffers" element={<ComboOffers/>} />
      <Route path="/booking-form" element={<Booking/>} />

      <Route path="/facial-treatment" element={<FacialTreatmentPage/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/invoice" element={<Invoice/>} />

    </Routes>
    </div>
  )
}

export default AppRoutes
