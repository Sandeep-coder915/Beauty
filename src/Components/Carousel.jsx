import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Import images for Desktop & Mobile


// Image Data
const slides = [
  {
    desktop: '/assets/banner/1.jpg',
    mobile: '/assets/banner/1.jpg',
    title: " ",
    description: " ",
    buttonText: "Book Now",
    buttonLink: "/booking-form",
  },
  {
    desktop: 'https://plus.unsplash.com/premium_photo-1701767501250-fda0c8f7907f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    mobile: "https://plus.unsplash.com/premium_photo-1701767501250-fda0c8f7907f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Hair & Skincare Experts",
    description: "Experience professional hair & skincare services.",
    buttonText: "Explore Services",
    buttonLink: "/booking-form",
  },
  {
    desktop: 'https://plus.unsplash.com/premium_photo-1701767501250-fda0c8f7907f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    mobile: "https://plus.unsplash.com/premium_photo-1701767501250-fda0c8f7907f?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

    title: "Luxury Spa Experience",
    description: "Relax & rejuvenate with our premium spa treatments.",
    buttonText: "View Packages",
    buttonLink: "/booking-form",
  },
];

const useWindowWidth = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
};

const useAutoSlide = (nextSlide, intervalTime = 4000) => {
  useEffect(() => {
    const interval = setInterval(nextSlide, intervalTime);
    return () => clearInterval(interval);
  }, [nextSlide, intervalTime]);
};

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isMobile = useWindowWidth();

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  useAutoSlide(nextSlide);

  return (
    <div className="absolute w-full h-[500px] md:h-[600px] overflow-hidden z-10">

      {slides.map((slide, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: index === currentIndex ? 1 : 0, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.8 }}
          className={`absolute inset-0 transition-opacity ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={isMobile ? slide.mobile : slide.desktop}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0  flex flex-col items-center justify-center text-center text-white p-6">
            <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
            <p className="text-md md:text-lg mt-2">{slide.description}</p>
            <a
              href={slide.buttonLink}
              className="mt-4 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-lg text-lg font-medium transition"
            >
              {slide.buttonText}
            </a>
          </div>
        </motion.div>
      ))}

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full text-white hover:bg-black/70 transition"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 flex justify-center w-full">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 mx-1 rounded-full transition ${
              index === currentIndex ? "bg-pink-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      desktop: PropTypes.string.isRequired,
      mobile: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      buttonText: PropTypes.string.isRequired,
      buttonLink: PropTypes.string.isRequired,
    })
  ),
};

export default Carousel;
