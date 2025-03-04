import { useEffect, useRef } from "react";
import { Truck, Gift, ShoppingCart ,Heart} from "lucide-react";

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
    <div className={`overflow-hidden bg-white-900   py-3 flex justify-center  darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"`}>
      <div
        ref={marqueeRef}
        className="flex whitespace-nowrap space-x-10 text-lg font-semibold animate-marquee"
      >
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Truck className="w-6 h-6 text-yellow-400" />
          <span>Service Availible only in Amritsar</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Gift className="w-6 h-6 text-green-400" />
          <span>Exclusive Discounts for Members</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <ShoppingCart className="w-6 h-6 text-blue-400" />
          <span>Book an appointment and Get Extra 10% Off</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Heart className="w-6 h-6   fill-amber-600" />
          <span>Pay At the Time Of Delivery(COD)</span>
        </div>
      </div>
    </div>
  );
};

export default PromotionalContent;
