import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services'
import WhyChooseUs from '../Components/WhyChooseUs'
import BeforeAfterGallery from '../Components/BeforeAfterGallery'
import BeauticiansList from '../Components/BeauticiansList'

const Home = () => {
  return (
    <div>
      <Carousel />

      <PromotionalContent />
      <Services />
      <WhyChooseUs/>
      <BeauticiansList/>
      <BeforeAfterGallery/>

      <ServiceCard />
    </div>
  )
}

export default Home
