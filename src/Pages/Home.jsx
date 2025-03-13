import React from 'react'
import ServiceCard from '../Components/ServiceCard'
import PromotionalContent from '../Components/PromotionalContent'
import Carousel from '../Components/Carousel'
import Services from './Services/Services'
import WhyChooseUs from '../Components/WhyChooseUs'
// import BeforeAfterGallery from '../Components/BeforeAfterGallery'
import BeauticiansList from '../Components/BeauticiansList'
import Popup from '../Components/Popup'
// import Reviews from './Reviews'
import TestimonialCarousel from './TestimonialCarousel'
import TrustSection from '../Components/TrustSection'
import FAQ from '../Components/FAQ'

import ContactForm from './Contact'
// import Popup from '../Components/Popup'

const Home = ({darkMode}) => {
  return (
    <div  >
<Popup/>
      <Carousel />
      {/* <TrueFocus
sentence="Payment After Service"
manualMode={false}
blurAmount={5}
borderColor="rgba(0,216,255,0.6)"
animationDuration={0.2}
pauseBetweenAnimations={1}
/> */}
      <PromotionalContent className={darkMode} />
      <TrustSection/>
      <Services />
      <WhyChooseUs/>
      <FAQ/>
      <BeauticiansList/>
      <ContactForm/>

      {/* <BeforeAfterGallery/> */}
{/* <Reviews/> */}
<TestimonialCarousel/>

    </div>
  )
}

export default Home
