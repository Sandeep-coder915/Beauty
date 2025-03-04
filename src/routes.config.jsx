import React from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Booking from './Pages/Booking'

import { Routes, Route } from 'react-router-dom';
import BookingForm from './Components/BookingForm'
import ContactForm from './Pages/Contact';
import Confirmation from './Pages/Confirmation';
const AppRoutes = () => {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<ContactForm/>} />
      <Route path="/booking-form" element={<Booking/>} />
      <Route path="/Confirmation" element={<Confirmation/>} />

    </Routes>
    </div>
  )
}

export default AppRoutes
