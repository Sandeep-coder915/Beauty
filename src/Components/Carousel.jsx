import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

// Import images for Desktop & Mobile
import desktop1 from "./images/1.jpg";
import desktop2 from "./images/2.jpg";
import desktop3 from "./images/3.jpg";
import mobile1 from "./images/1.jpg";
import mobile2 from "./images/2.jpg";
import mobile3 from "./images/3.jpg";

// Image Data
const slides = [
  {
    desktop: desktop1,
    mobile: mobile1,
    title: "Premium Beauty Services",
    description: "Get the best beauty treatments at your doorstep.",
    buttonText: "Book Now",
    buttonLink: "/booking",
  },
  {
    desktop: desktop2,
    mobile: mobile2,
    title: "Hair & Skincare Experts",
    description: "Experience professional hair & skincare services.",
    buttonText: "Explore Services",
    buttonLink: "/services",
  },
  {
    desktop: desktop3,
    mobile: mobile3,
    title: "Luxury Spa Experience",
    description: "Relax & rejuvenate with our premium spa treatments.",
    buttonText: "View Packages",
    buttonLink: "/spa",
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
    <div className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
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
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
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
