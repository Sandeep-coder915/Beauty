import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    title: "Glow with Natural Skincare",
    description: "Discover our organic skincare range for a radiant glow.",
    image: "https://www.exoticveda.com/static/media/New%20Products%20.3a4f94879e1dbd652d0e.png",
    buttonText: "Shop Now",
    link: "/shop",
  },
  {
    id: 2,
    title: "Revitalize Your Hair",
    description: "Get stronger, shinier hair with our herbal hair care products.",
    image: "/images/slide2.jpg",
    buttonText: "Explore",
    link: "/haircare",
  },
  {
    id: 3,
    title: "Beauty Services at Your Doorstep",
    description: "Book salon services online and enjoy professional beauty care.",
    image: "/images/slide3.jpg",
    buttonText: "Book Now",
    link: "/booking",
  },
  {
    id: 4,
    title: "Luxury Wellness & Beauty",
    description: "Indulge in premium beauty products for a spa-like experience.",
    image: "/images/slide4.jpg",
    buttonText: "Get Started",
    link: "/wellness",
  },
  {
    id: 5,
    title: "Special Discounts for You",
    description: "Enjoy exclusive deals and discounts on beauty essentials.",
    image: "/images/slide5.jpg",
    buttonText: "Grab Offers",
    link: "/offers",
  },
];

const Carousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[500px]"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div
            className="relative w-full h-[500px] flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="absolute inset-0 bg-black "></div>
            <div className="relative z-10 text-center text-white px-6 md:px-12">
              <h2 className="text-3xl md:text-5xl font-bold">{slide.title}</h2>
              <p className="mt-3 text-lg md:text-xl">{slide.description}</p>
              <a
                href={slide.link}
                className="mt-5 inline-block bg-pink-500 text-white py-3 px-6 rounded-lg text-lg hover:bg-pink-600 transition"
              >
                {slide.buttonText}
              </a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Carousel;
