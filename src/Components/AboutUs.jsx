import { CheckCircle, Users, Star, ShieldCheck } from 'lucide-react';

export default function AboutUs({ darkMode }) {
  return (
    <div className='max-w-6xl mx-auto p-6 space-y-10 ' >
      <div className={`grid md:grid-cols-2 gap-6 items-center ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100  text-pink-400'} p-4 rounded-lg`}>
        <img src="data:image/jpeg;base64,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" alt="Our Story" className="w-full rounded-lg shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold">Our Story</h2>
          <p className={`mt-4 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} p-4 rounded-lg`}>
            Beauty at Home was created with a mission to make self-care convenient and accessible.
            Founded by Tania, Simran, and Sandeep, our platform connects skilled beauty professionals
            with customers who prefer the comfort of home. Our journey began with a vision of making
            beauty treatments stress-free, ensuring everyone can enjoy high-quality services at their convenience.
          </p>
        </div>
      </div>

      {/* About Company */}
      <div className="text-center">
        <h2 className="text-3xl font-bold  text-pink-400">Who We Are</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          We are a passionate team dedicated to redefining beauty services. With certified professionals,
          high-quality products, and personalized treatments, we bring spa-like experiences directly to you.
        </p>
      </div>

      {/* Founder Section */}
      <div className="grid md:grid-cols-3 gap-6">
        {[
          { name: "Tania", role: "Co-Founder", image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" },
          { name: "Simran", role: "Co-Founder", image: "https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp" },
          { name: "Sandeep", role: "Co-Founder", image: "https://cdn0.iconfinder.com/data/icons/avatars-3/512/avatar_bussiness_man-1024.png" }
        ].map((founder, index) => (
          <div key={index} className={`text-center shadow-lg p-6 rounded-2xl hover:shadow-2xl transition ${darkMode ? 'bg-gray-800 text-white' : 'bg-white  text-pink-400'}`}>
            <img src={founder.image} alt={founder.name} className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-pink-500" />
            <h3 className="text-xl font-semibold mt-4">{founder.name}</h3>
            <p className="text-gray-600">{founder.role}</p>
          </div>
        ))}
      </div>

      {/* Benefits Section */}
      <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-100 text-pink-400'}`}>
        <h2 className="text-3xl font-bold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          {[
            { icon: <CheckCircle className="text-green-500" size={40} />, title: "Certified Experts", desc: "Trained and experienced professionals at your service." },
            { icon: <Users className="text-blue-500" size={40} />, title: "Personalized Care", desc: "Customized beauty treatments tailored to your needs." },
            { icon: <Star className="text-yellow-500" size={40} />, title: "Premium Products", desc: "We use high-quality products for the best results." },
            { icon: <ShieldCheck className="text-red-500" size={40} />, title: "Safe & Hygienic", desc: "Strict hygiene protocols for a safe experience." }
          ].map((benefit, index) => (
            <div key={index} className={`p-4 rounded-2xl shadow-lg flex items-center space-x-4 hover:scale-105 transition-transform ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              <div>{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Facilities Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold">Customer Facilities</h2>
        <p className="mt-4 max-w-2xl mx-auto">
          We prioritize customer comfort with easy booking, flexible scheduling, doorstep service,
          and 24/7 support to ensure a seamless beauty experience.
        </p>
        <button className="mt-6 px-6 py-2 bg-pink-600 text-white rounded-lg hover:bg-pink-700 transition">Book a Service</button>
      </div>
    </div>
  );
}