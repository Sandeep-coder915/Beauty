import React from 'react'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Booking from './Pages/Booking'
import Contact from './Pages/Contact'
import { Routes, Route } from 'react-router-dom';
import BookingForm from './Components/BookingForm'
const AppRoutes = () => {
  return (
    <div>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/services" element={<Services />} />

      <Route path="/contact" element={<Contact/>} />
      <Route path="/booking-form" element={<Booking/>} />

    </Routes>
    </div>
  )
}

export default AppRoutes
