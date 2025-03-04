import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services'
import WhyChooseUs from '../Components/WhyChooseUs'
import BeforeAfterGallery from '../Components/BeforeAfterGallery'
import BeauticiansList from '../Components/BeauticiansList'
import Reviews from './Reviews'
import TestimonialCarousel from './TestimonialCarousel'
import TrustSection from '../Components/TrustSection'

const Home = () => {
  return (
    <div>
      <Carousel />
      <PromotionalContent />
      <TrustSection/>
      <Services />
      <WhyChooseUs/>
      <BeauticiansList/>
      <BeforeAfterGallery/>
{/* <Reviews/> */}
<TestimonialCarousel/>
      {/* <ServiceCard /> */}
    </div>
  )
}

export default Home
