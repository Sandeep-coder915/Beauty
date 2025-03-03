import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services'

const Home = () => {
  return (
    <div>
      <Carousel />

      <PromotionalContent />
      <Services />
      <ServiceCard />
    </div>
  )
}

export default Home
