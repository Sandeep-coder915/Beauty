import { useEffect, useRef } from "react";
import { Truck, Gift, ShoppingCart } from "lucide-react";

const PromotionalContent = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let scrollAmount = 0;

    const animate = () => {
      if (marquee) {
        scrollAmount -= 1;
        marquee.style.transform = `translateX(${scrollAmount}px)`;

        if (Math.abs(scrollAmount) >= marquee.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <div className="overflow-hidden bg-white-900 text-gray-900 py-3 flex justify-center">
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap space-x-10 text-lg font-semibold animate-marquee"
      >
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Truck className="w-6 h-6 text-yellow-400" />
          <span>Service Availible only in Amristar</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Gift className="w-6 h-6 text-green-400" />
          <span>Exclusive Discounts for Members</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <ShoppingCart className="w-6 h-6 text-blue-400" />
          <span>Book an appointment and Get Extra 10% Off</span>
        </div>
      </div>
    </div>
  );
};

export default PromotionalContent;
