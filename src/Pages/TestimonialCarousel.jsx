import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    review: "Absolutely amazing service! My skin feels rejuvenated and glowing.",
    rating: 5,
    image: "https://mdbcdn.b-cdn.net/img/new/avatars/5.webp",
  },
  {
    name: "David Smith",
    review: "The team is professional and friendly. Highly recommend!",
    rating: 4,
    image: "https://www.pikpng.com/pngl/b/417-4172348_testimonial-user-icon-color-clipart.png",
  },
  {
    name: "Emma Brown",
    review: "A wonderful experience! The results exceeded my expectations.",
    rating: 5,
    image: "https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-1024.png",
  }, 
];

const TestimonialCarousel = () => {
  return (
    <div className="max-w-2xl mx-auto p-6 text-center">
      <h2 className="text-3xl font-bold mb-6">✨ What Our Clients Say</h2>
      <Carousel
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        autoPlay
        interval={4000}
        className="shadow-lg rounded-lg overflow-hidden"
      >
        {testimonials.map((testimonial, index) => (
          <div key={index} className="p-6 bg-white rounded-lg shadow-md">
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 mx-auto rounded-full object-contain border-2 border-pink-500"
              />
            <p className="text-gray-600 italic">"{testimonial.review}"</p>
            <div className="flex justify-center mt-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="text-yellow-500 w-5 h-5" />
              ))}
            </div>
            <p className="mt-2 font-semibold">- {testimonial.name}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
