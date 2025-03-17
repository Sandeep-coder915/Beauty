import React, { Suspense, lazy, memo } from 'react';
import Carousel from '../Components/Carousel';
import PromotionalContent from '../Components/PromotionalContent';
import TrustSection from '../Components/TrustSection';

// Lazy loading for non-essential components
const Services = lazy(() => import('./Services/Services'));
const WhyChooseUs = lazy(() => import('../Components/WhyChooseUs'));
const BeauticiansList = lazy(() => import('../Components/BeauticiansList'));
const FAQ = lazy(() => import('../Components/FAQ'));
const ContactForm = lazy(() => import('./Contact'));
const TestimonialCarousel = lazy(() => import('./TestimonialCarousel'));
const HowWeWork = lazy(() => import('./HowWeWork'));

// Memoizing static components
const MemoizedCarousel = memo(Carousel);
const MemoizedPromotionalContent = memo(PromotionalContent);
const MemoizedTrustSection = memo(TrustSection);

const Home = ({ darkMode }) => {
  return (
    <div>
      <MemoizedCarousel />
      <MemoizedPromotionalContent darkMode={darkMode} />
      <Suspense fallback={<div>Loading...</div>}>
        <HowWeWork />
        <WhyChooseUs />
        <Services />
        <MemoizedTrustSection />
        <FAQ />
        <BeauticiansList />
        <ContactForm />
        <TestimonialCarousel />
      </Suspense>
    </div>
  );
};

export default Home;
