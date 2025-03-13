import React from 'react'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services/Services'
import WhyChooseUs from '../Components/WhyChooseUs'
import BeauticiansList from '../Components/BeauticiansList'
import Popup from '../Components/Popup'
import TestimonialCarousel from './TestimonialCarousel'
import TrustSection from '../Components/TrustSection'
import FAQ from '../Components/FAQ'
import ContactForm from './Contact'

const Home = ({ darkMode }) => {
  return (
    <div  >
      <Popup />
      <Carousel />
      <PromotionalContent className={darkMode} />
      <TrustSection />
      <Services />
      <WhyChooseUs />
      <FAQ />
      <BeauticiansList />
      <ContactForm />
      <TestimonialCarousel />
    </div>
  )
}

export default Home
