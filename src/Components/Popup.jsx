import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Popup() {
  let [isOpen, setIsOpen] = useState(true);

  function close() {
    setIsOpen(false);
  }

  return (
    <>
      <Dialog open={isOpen} as="div" className="relative z-10" onClose={close}>
        {/* Background overlay with blur effect */}
        <div className="fixed inset-0 bg-black/30 backdrop-blur-md" aria-hidden="true"></div>

        {/* Popup Container */}
        <div className="fixed inset-0 z-20 flex items-center justify-center p-4">
          <DialogPanel className="w-full max-w-md rounded-xl bg-white p-6 shadow-lg relative">

            {/* Close Button (Top Right) */}
            <button
              className="absolute top-3 right-3 text-gray-600 hover:text-gray-900"
              onClick={close}
            >
              &#10005;
            </button>

            {/* Discount Offer Title */}
            <DialogTitle as="h3" className="text-lg font-bold text-gray-800 text-center">
              Special Holi Offer!
            </DialogTitle>

            {/* Discount Image */}
            <div className="mt-4 flex justify-center">
              <img
                src="/assets/banner/150.jpg"
                alt="Holi Discount Offer"
                className="w-48 h-48 object-cover rounded-md"
              />
            </div>

            {/* Discount Code */}
            <p className="mt-4 text-center text-gray-700 text-lg font-semibold">
              Use Code: <span className="text-red-500">HOLISPECIAL150</span>
            </p>
            <p className="text-center text-gray-500 text-sm mt-2">
              Get ₹150 off on your purchase. Hurry, limited time offer!
            </p>

            {/* Close Button */}
            <div className="mt-6 flex justify-center">
              <Link to='/booking-form'><button
                className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
                onClick={close}
              >
                Claim Offer
              </button></Link>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}