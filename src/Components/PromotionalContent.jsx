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
    <div className="overflow-hidden bg-white-900 py-3 flex justify-center    ">
      <div
        ref={marqueeRef}
        className=" text-gray-800 flex whitespace-nowrap space-x-10 text-lg font-semibold animate-marquee"
      >
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Truck className="w-6 h-6 text-yellow-400" />
          <span className="text-gray-800">Service Availible only in Amritsar</span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <Gift className="w-6 h-6 text-green-400" />
          <span>Special Holi Discount Offer </span>
        </div>
        <div className="flex items-center space-x-3 hover:text-pink-400 transition">
          <ShoppingCart className="w-6 h-6 text-blue-400" />
          <span>Use Code HOLISPECIAL150 to avail Discount</span>
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
