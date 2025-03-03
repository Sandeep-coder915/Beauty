import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services'
import WhyChooseUs from '../Components/WhyChooseUs'
import BeforeAfterGallery from '../Components/BeforeAfterGallery'

const Home = () => {
  return (
    <div>
      <Carousel />

      <PromotionalContent />
      <Services />
      <WhyChooseUs/>
      <BeforeAfterGallery/>

      <ServiceCard />
    </div>
  )
}

export default Home
