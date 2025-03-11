import React from "react";
import ServiceCard from "../../Components/ServiceCard";

const serviceCategories = [
    {
      title: "Facial & Skincare",
      services: [
        { name: "Gold Facial", image: "https://www.merakispa.in/cdn/shop/files/gold-facial-cost-procedure-how-to-do.jpg?v=1711968594", description: "Premium gold facial for glowing skin", price: "₹2000"  ,link:'/gold-facial'},
        { name: "Diamond Facial", image: "https://cdn2.stylecraze.com/wp-content/uploads/2014/10/10-Best-Benefits-Of-Diamond-Facials.jpg.avif", description: "Luxury diamond facial treatment", price: "₹1499" },
        { name: "Bridal Facial", image: "https://cdn0.weddingwire.in/article/5275/3_2/1280/jpg/65725-tips-for-glowing-skin-dhanika-choksi-photography-lead-image.webp", description: "Special bridal facial package", price: "₹1500" },
        { name: "Party Makeup", image: "https://makeupbynidhisharma.com/wp-content/uploads/2022/08/party-11-768x960.jpg", description: "Special bridal facial package", price: "₹1500" },
        { name: "Fruit Facial", image: "https://cdn-ilcgphd.nitrocdn.com/qNViGcRtwnumSQfySEQiYhHcvdqvufzh/assets/images/optimized/rev-cd7a751/www.bodycraft.co.in/wp-content/uploads/healthy-beautiful-radiant-skin-woman-without-makeup-portrait-girl-smiling-against-wall-fruits.jpg", description: "Natural fruit facial for fresh skin", price: "₹799" },
        { name: "Aloevera Facial", image: "https://img.bebeautiful.in/www-bebeautiful-in/Try-out-this-aloe-vera-facial-at-home-for-healthy-glowing-skin_1.jpg?w=300", description: "ool, Calm & Hydrated – Let Aloe Work Its Wonders!", price: "₹699" },

        { name: "D-Tan  ", image: "https://anayrahomesalon.com/wp-content/uploads/2024/01/d-tan41646649742.jpg", description: "Sun Tan? Not a Problem – Restore Your True Skin Tone!", price: "₹1500" },
        { name: "Lotous Facial", image: "https://greendayspa.in/wp-content/uploads/2017/11/Lotus-24Karat-GOLDSHEEN-Facials-Parlour-in-Chennai.jpg", description: "Lotus Facial – The Ultimate Skin Pampering Experience!", price: "₹1500" },


        { name: "Wine Facial", image: "https://www.stackumbrella.com/wp-content/uploads/2021/01/imgpsh_fullsize_anim-57-696x409.jpg", description: "Uncork the Secret to Youthful, Glowing Skin!", price: "899" },
        { name: "Bleach, Facial, Full Leg Wax, Arm Wax, Threading", image: "https://www.hellosalon.in/uploads/services/facial-27-2-24.jpg", description: "Complete skincare combo", price: "₹1800" },



      ],
    }
  ];

const GoldFacial = ({darkMode}) => {
  return (
   <> <div className="max-w-2xl mx-auto p-6   shadow-lg rounded-lg">
   <h1 className="text-3xl font-bold text-center   mb-4">Gold Facial</h1>
   <img
     src="/assets/banner/1.jpg"
     alt="Gold Facial"
     className="w-full h-64 object-cover rounded-lg mb-4"
   />
   <p className="  text-lg mb-4">
     Gold facial is a luxurious skincare treatment that uses gold-infused products
     to rejuvenate and brighten the skin. It helps in reducing wrinkles, enhancing
     blood circulation, and providing a radiant glow.
   </p>
   <p className="  text-lg mb-4">
     Gold facial is a luxurious skincare treatment that uses gold-infused products
     to rejuvenate and brighten the skin. It helps in reducing wrinkles, enhancing
     blood circulation, and providing a radiant glow.
   </p>
   <p className="  text-lg mb-4">
     Gold facial is a luxurious skincare treatment that uses gold-infused products
     to rejuvenate and brighten the skin. It helps in reducing wrinkles, enhancing
     blood circulation, and providing a radiant glow.
   </p>
   <p className="  text-lg mb-4">
     Gold facial is a luxurious skincare treatment that uses gold-infused products
     to rejuvenate and brighten the skin. It helps in reducing wrinkles, enhancing
     blood circulation, and providing a radiant glow.
   </p>
   <p className="  text-lg mb-4">
     Gold facial is a luxurious skincare treatment that uses gold-infused products
     to rejuvenate and brighten the skin. It helps in reducing wrinkles, enhancing
     blood circulation, and providing a radiant glow.
   </p>
   <h2 className="text-2xl font-semibold   mb-3">Steps to Do Gold Facial</h2>
   <ol className="list-decimal pl-5 space-y-2  ">
     <li><strong>Cleansing:</strong> Wash the face with a mild cleanser to remove dirt and oil.</li>
     <li><strong>Exfoliation:</strong> Use a gentle scrub to remove dead skin cells.</li>
     <li><strong>Massage:</strong> Apply gold cream and massage for 10-15 minutes.</li>
     <li><strong>Gold Mask:</strong> Apply a gold mask and leave it for 15-20 minutes.</li>
     <li><strong>Toning & Moisturizing:</strong> Use toner and a hydrating moisturizer for a final touch.</li>
   </ol>
 </div>
 <div className="container mx-auto py-10 px-6">

      {serviceCategories.map((category, index) => (
        <div key={index} className="mb-12">
          {/* Fix: Apply dark mode class here */}
          <h3 className={`text-2xl text-center font-semibold mb-5 border-b-2 border-pink-400 pb-2
            ${darkMode ? "text-white" : ""}`}>
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

 </>
  );
};

export default GoldFacial;
