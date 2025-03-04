import React from "react";
import { Link } from "react-router-dom";
export default function FacialTreatmentPage() {
    return (
      <>
      <div className="max-w-6xl mx-auto p-6 space-y-6">
        {/* Hero Banner */}
        <div className="relative w-full h-96 bg-cover bg-center rounded-2xl" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPIKnpNDjY1khU81tZX2aiUQPb-oxorjhO1Q&s')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center p-6">
            <h1 className="text-5xl font-bold">Experience Ultimate Skincare</h1>
            <p className="text-lg mt-2">Rejuvenate your skin with our premium facial treatments.</p>
            <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">Book a Treatment</button>
          </div>
        </div>

        {/* Facial Treatments Section */}
        <h2 className="text-4xl font-bold text-center text-gray-800">Our Facial Treatments</h2>
        <p className="text-center text-gray-600">Explore our specialized treatments for radiant skin.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: "Deep Cleansing Facial", image: " https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "A rejuvenating treatment that deeply cleanses, exfoliates, and nourishes the skin." },
            { title: "Hydrating Facial", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Provides intense moisture and glow to dehydrated skin." },
            { title: "Anti-Aging Facial", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Targets fine lines and wrinkles, leaving your skin youthful and firm." },
            { title: "Acne Treatment Facial", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Helps reduce breakouts and balances oily skin." },
            { title: "Brightening Facial", image: "https://vendor.mschirpy.com/blogs/1694368785.jpg", description: "Enhances skin tone and gives a natural glow." }
          ].map((treatment, index) => (
            <div key={index} className="bg-white shadow-lg rounded-2xl p-4">
              <img src={treatment.image} alt={treatment.title} className="rounded-lg w-full h-60 object-cover" />
              <h3 className="text-xl font-semibold mt-4">{treatment.title}</h3>
              <p className="text-gray-600 mt-2">{treatment.description}</p>
              <Link to='/booking-form'>
                <button className="mt-4 px-4 py-2 bg-pink-600 text-white rounded-lg hover:bg-black">Book Now</button>
              </Link>
            </div>
          ))}
        </div>

        {/* Collage Gallery */}
        <div className="grid grid-cols-3 gap-4 mt-8">
          <img src="https://vendor.mschirpy.com/blogs/1694368785.jpg" alt="Gallery Image 1" className="rounded-lg w-full h-40 object-cover" />
          <img src="https://vendor.mschirpy.com/blogs/1694368785.jpg" alt="Gallery Image 2" className="rounded-lg w-full h-40 object-cover" />
          <img src="https://vendor.mschirpy.com/blogs/1694368785.jpg" alt="Gallery Image 3" className="rounded-lg w-full h-40 object-cover" />
        </div>

        {/* Customer Care Section with Floating Image */}
        <div className="flex flex-col md:flex-row items-center bg-gray-100 p-6 rounded-2xl mt-8">
          <img src="https://vendor.mschirpy.com/blogs/1694368785.jpg" alt="Customer Care" className="w-64 h-64 object-cover rounded-lg shadow-lg md:mr-6" />
          <div>
            <h2 className="text-2xl font-semibold">How We Treat Our Customers</h2>
            <p className="text-gray-700 mt-4">We prioritize customer satisfaction by using high-quality products, providing personalized skincare, and ensuring a relaxing and hygienic environment.</p>
            <button className="mt-4 px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">Contact Us</button>
          </div>
        </div>
      </div>

          <div className="max-w-4xl mx-auto p-6 space-y-6">
            <h1 className="text-4xl font-bold text-center text-gray-800">The Ultimate Guide to Skincare & Facial Treatments</h1>
            <p className="text-center text-gray-600">Discover the best practices for glowing, healthy skin with expert facial treatments.</p>

            <div className="mt-6 bg-white shadow-lg rounded-2xl p-6">
              <img
                src="/images/skincare-blog.jpg"
                alt="Skincare Blog"
                className="rounded-lg w-full h-64 object-cover"
              />
              <h2 className="text-2xl font-semibold mt-4">Why Facial Treatments Are Essential for Healthy Skin</h2>
              <p className="text-gray-700 mt-2">
                Facial treatments are more than just a luxury; they are a necessity for maintaining healthy, youthful skin.
                Regular facials help cleanse the skin, remove dead cells, and promote better absorption of skincare products.
                Whether you have dry, oily, or sensitive skin, there is a facial treatment tailored to meet your needs.
              </p>
            </div>

            <div className="mt-6 bg-gray-100 p-6 rounded-2xl">
              <h2 className="text-2xl font-semibold">Best Facial Treatments for Every Skin Type</h2>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                <li><strong>Hydrating Facial:</strong> Ideal for dry skin, it replenishes moisture and restores elasticity.</li>
                <li><strong>Deep Cleansing Facial:</strong> Perfect for oily and acne-prone skin, it unclogs pores and removes excess oil.</li>
                <li><strong>Anti-Aging Facial:</strong> Targets fine lines and wrinkles, boosting collagen production.</li>
                <li><strong>Brightening Facial:</strong> Helps even out skin tone and reduce dark spots for a radiant glow.</li>
                <li><strong>Soothing Facial:</strong> Designed for sensitive skin, it calms inflammation and redness.</li>
              </ul>
            </div>

            <div className="mt-6 bg-white shadow-lg rounded-2xl p-6">
              <h2 className="text-2xl font-semibold">How to Maintain Healthy Skin After a Facial</h2>
              <p className="text-gray-700 mt-2">
                To prolong the effects of your facial treatment, follow a good skincare routine:
              </p>
              <ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
                <li>Use a gentle cleanser and moisturizer daily.</li>
                <li>Apply sunscreen to protect against UV damage.</li>
                <li>Drink plenty of water to keep your skin hydrated.</li>
                <li>Avoid touching your face to prevent breakouts.</li>
                <li>Exfoliate weekly to remove dead skin cells and enhance glow.</li>
              </ul>
            </div>

            <div className="mt-6 text-center">
              <h2 className="text-2xl font-semibold">Ready to Get a Facial Treatment?</h2>
              <p className="text-gray-700 mt-2">Book your appointment today and give your skin the care it deserves.</p>
              <button className="mt-4 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700">Book Now</button>
            </div>
          </div>
          </>
    );
  }
