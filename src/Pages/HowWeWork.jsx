const HowWeWork = () => {
    return (
      <div className="max-w-7xl mx-auto p-4 text-center">
        <h1 className="text-3xl font-bold mb-4">How We Work</h1>
        <p className="  mb-6">
          We provide professional beauty services at your doorstep with a seamless booking experience. Here’s how it works:
        </p>
  
        <div className="grid gap-6 md:grid-cols-3">
          {/* Step 1: Choose Service */}
          <div className="p-4 border rounded-lg shadow-md  ">
            <h2 className="text-xl font-semibold  ">1. Choose Your Service</h2>
            <p className="  mt-2">
              Browse our wide range of beauty services, from facials to bridal makeup, and select what suits you best.
            </p>
          </div>
  
          {/* Step 2: Book Appointment */}
          <div className="p-4 border rounded-lg shadow-md  ">
            <h2 className="text-xl font-semibold  ">2. Book Your Appointment</h2>
            <p className="  mt-2">
              Pick a convenient date and time, choose your payment method, and confirm your booking in just a few clicks.
            </p>
          </div>
  
          {/* Step 3: Enjoy the Service */}
          <div className="p-4 border rounded-lg shadow-md  ">
            <h2 className="text-xl font-semibold  ">3. Enjoy Professional Service</h2>
            <p className="  mt-2">
              Our trained beauticians arrive at your location on time, ensuring a top-notch, hygienic, and relaxing experience.
            </p>
          </div>
        </div>
  
        {/* <div className="mt-8">
          <h3 className="text-lg font-medium text-gray-700">Why Choose Us?</h3>
          <ul className="text-gray-600 mt-3 space-y-2">
            <li>✅ Certified & Experienced Beauticians</li>
            <li>✅ High-Quality, Hygienic Products</li>
            <li>✅ Convenient & Hassle-Free Booking</li>
            <li>✅ Affordable Pricing & Discounts</li>
          </ul>
        </div> */}
      </div>
    );
  };
  
  export default HowWeWork;
  