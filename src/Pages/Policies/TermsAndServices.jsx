import React from "react";

const TermsAndServices = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Terms & Services</h1>
      <p className="text-gray-600 mb-4">
        These Terms & Services govern your use of our website and services. By accessing our site, you agree to these terms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">1. Use of Services</h2>
      <p className="text-gray-600">
        Our services are provided to users for personal and non-commercial use only. Unauthorized use is strictly prohibited.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">2. Payments & Refunds</h2>
      <p className="text-gray-600">
        Payments must be made at the time of booking. Refund policies are subject to service-specific terms.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">3. Account Termination</h2>
      <p className="text-gray-600">
        We reserve the right to suspend or terminate accounts that violate our terms or engage in fraudulent activity.
      </p>

      <h2 className="text-2xl font-semibold text-gray-700 mt-6">4. Contact Us</h2>
      <p className="text-gray-600">
        For any inquiries regarding these terms, please contact us at <span className="text-blue-600">.</span>.
      </p>
    </div>
  );
};

export default TermsAndServices;
