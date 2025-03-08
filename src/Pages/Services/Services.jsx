import React from "react";
import ServiceCard from "../../Components/ServiceCard";


const serviceCategories = [
  {
    title: "Facial & Skincare",
    services: [
      { name: "Gold Facial", image: "https://www.merakispa.in/cdn/shop/files/gold-facial-cost-procedure-how-to-do.jpg?v=1711968594", description: "Premium gold facial for glowing skin", price: "₹2000" },
      { name: "Diamond Facial", image: "https://cdn2.stylecraze.com/wp-content/uploads/2014/10/10-Best-Benefits-Of-Diamond-Facials.jpg.avif", description: "Luxury diamond facial treatment", price: "₹1499" },
      { name: "Bridal Facial", image: "https://cdn0.weddingwire.in/article/5275/3_2/1280/jpg/65725-tips-for-glowing-skin-dhanika-choksi-photography-lead-image.webp", description: "Special bridal facial package", price: "₹1500" },
      { name: "Fruit Facial", image: "https://cdn-ilcgphd.nitrocdn.com/qNViGcRtwnumSQfySEQiYhHcvdqvufzh/assets/images/optimized/rev-cd7a751/www.bodycraft.co.in/wp-content/uploads/healthy-beautiful-radiant-skin-woman-without-makeup-portrait-girl-smiling-against-wall-fruits.jpg", description: "Natural fruit facial for fresh skin", price: "₹799" },
      { name: "Bleach, Facial, Full Leg Wax, Arm Wax, Threading", image: "https://www.hellosalon.in/uploads/services/facial-27-2-24.jpg", description: "Complete skincare combo", price: "₹1800" },

    ],
  },
  {
    title: "Hair Treatments & Styling",
    services: [
      { name: "Any Hairstyle", image: "https://cdn.shopify.com/s/files/1/1412/4580/files/1_c81497c5-4134-4ba2-a943-9eb45f90e4ea_480x480.png?v=1655212092", description: "Customized stylish hairdos start with RS.600", price: "₹600+" },
      { name: "Rebonding (Normal Length)", image: "https://cdn.shopify.com/s/files/1/1412/4580/files/1_c81497c5-4134-4ba2-a943-9eb45f90e4ea_480x480.png?v=1655212092", description: "Straight and silky hair treatment", price: "₹4500" },
      { name: "Rebonding + Keratin + Highlights", image: "https://tigasouth-hairdresser.com/wp-content/uploads/2023/11/Highlights-ombre-1024x1024.webp", description: "Complete hair transformation", price: "₹5200" },
      { name: "KeratinSmooth", image: "https://www.libs.edu/wp-content/uploads/2018/10/KeratinSmoothingTreatments.jpg", description: "Smooth and shiny hair treatment", price: "₹4500" },
         ],
  },
  {
    title: "Waxing & Body Care",
    services: [
      { name: "Full Body Wax", image: "https://www.sophistimom.com/wp-content/uploads/2024/02/benefits-of-chocolate-waxing1-768x768.jpg", description: "Complete body waxing for smooth skin", price: "₹3000" },
      { name: "Bikini Wax", image: "https://silverinesalon.in/cdn/shop/products/8273b695-48f7-4870-931f-a97acfece77c-best-at-home-wax-strips-for-bikini-lines.jpg?v=1681655197&width=600", description: "Gentle bikini area waxing", price: "₹699" },
      { name: "Body Polishing", image: "https://cdn-ilcgphd.nitrocdn.com/qNViGcRtwnumSQfySEQiYhHcvdqvufzh/assets/images/optimized/rev-cd7a751/www.bodycraft.co.in/wp-content/uploads/side-view-woman-getting-massaged-spa-1.jpg", description: "Exfoliate and glow with body polishing", price: "₹2000" },
    ],
  },
  {
    title: "Hand & Foot Care",
    services: [
      { name: "Manicure & Pedicure", image: "https://naomisheadmasters.com/wp-content/uploads/2023/06/Manicures-And-Pedicures-Prices-In-India.jpg", description: "Relaxing hand and foot care", price: "₹1200" },
      { name: "Nail Cut & File + Foot Massage", image: "https://quickbeauty.in/wp-content/uploads/2023/10/Nail-Cut-File-and-Polish.webp", description: "Perfect nail care package", price: "₹500" },
    ],
  },
];
const Services = ({ darkMode }) => {
  return (
    <div className="container mx-auto py-10 px-6">
      <h2 className="text-3xl font-bold text-center mb-10 text-pink-600">✨ Our Beauty Services ✨</h2>

      {serviceCategories.map((category, index) => (
        <div key={index} className="mb-12">
          {/* Fix: Apply dark mode class here */}
          <h3 className={`text-2xl font-semibold mb-5 border-b-2 border-pink-400 pb-2 
            ${darkMode ? "text-white" : "text-gray-800"}`}>
            {category.title}
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
            {category.services.map((service, idx) => (
              <ServiceCard key={idx} service={service} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};



// import React from "react";
// import ServiceCard from "../../Components/ServiceCard";


// const Services =({ darkMode }) => {
//   return (
// <div className="container mx-auto py-9 px-5">
//   <h2 className="text-3xl font-bold  text-center mb-10 text-pink-900">
//     ✨ Our Beauty Services ✨
//   </h2>

//   {serviceCategories.map((category, index) => (
//     <div key={index} className="mb-12">
// <h3
//   className="text-2xl font-semibold text-center mb-5 border-b-2 border-pink-400 pb-2 text-black "
// >
//   {category.title}
// </h3>



//       {/* Responsive Grid Layout */}
//       <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2">
//         {category.services.map((service, idx) => (
//           <ServiceCard key={idx} service={service} />
//         ))}
//       </div>
//     </div>
//   ))}
// </div>

//   );
// };

export default Services;
