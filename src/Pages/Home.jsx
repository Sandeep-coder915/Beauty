import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services'
import WhyChooseUs from '../Components/WhyChooseUs'

const Home = () => {
  return (
    <div>
      <Carousel />

      <PromotionalContent />
      <Services />
      <WhyChooseUs/>
      <ServiceCard />
    </div>
  )
}

export default Home
