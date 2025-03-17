import React from "react";

const termsData = [
  {
    title: "1. Use of Services",
    content: "Our services are provided for personal and non-commercial use only. Unauthorized use, including modification, reproduction, or resale of our content, is strictly prohibited.",
  },
  // {
  //   title: "2. Payments & Refunds",
  //   content: "Payments must be made at the time of booking. Refund eligibility depends on the service-specific cancellation policies, which will be clearly communicated at the time of booking.",
  // },
  {
    title: "2. Cancellations & Rescheduling",
    content: "If you wish to cancel or reschedule a booking, you must do so at least 24 hours in advance. Last-minute cancellations may not be eligible for refunds.",
  },
  {
    title: "3. User Obligations",
    content: "Users agree to provide accurate information and not to misuse or disrupt our services. Any violation may result in account suspension or legal action.",
  },
  {
    title: "4. Liability Disclaimer",
    content: "We strive to provide the best services, but we do not guarantee uninterrupted availability. We are not responsible for damages arising from service disruptions or user negligence.",
  },
  {
    title: "5. Account Termination",
    content: "We reserve the right to suspend or terminate accounts that violate our terms, engage in fraudulent activity, or misuse our services.",
  },
  {
    title: "6. Modifications to Terms",
    content: "We may update these Terms & Services from time to time. Continued use of our website or services after changes are made constitutes acceptance of the new terms.",
  },

];

const TermsAndServices = () => {
  return (
    <div className="max-w-4xl mx-auto p-6  ">
      <h1 className="text-3xl font-bold mb-4 text-center">Terms & Services</h1>
      <p className="mb-4 text-center">
        These Terms & Services govern your use of our website and services. By accessing our site, you agree to comply with these terms.
      </p>

      {termsData.map((term, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-2xl font-semibold">{term.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: term.content }}></p>
        </div>
      ))}

      <p className="mt-6 text-sm text-center text-gray-600">
        Last Updated: March 2025
      </p>
    </div>
  );
};

export default TermsAndServices;
