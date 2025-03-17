import React from "react";

const PrivacyPolicy = () => {
  const policySections = [
    {
      title: "1. Information We Collect",
      content: "We may collect personal information, including but not limited to:",
      list: [
        "Your name, email, and phone number when you contact us.",
        "Payment details when making transactions.",
        "Information you provide when using our services.",
        "Technical data such as IP address, browser type, and device details.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: "The collected data is used for the following purposes:",
      list: [
        "To provide and enhance our services.",
        "To process payments securely.",
        "To send important updates, promotions, or service-related notifications.",
        "To analyze trends and improve user experience.",
      ],
    },
    {
      title: "3. Data Protection & Security",
      content:
        "We implement strict security measures to safeguard your data from unauthorized access, modification, or disclosure. However, no method of transmission over the internet is 100% secure.",
    },
    {
      title: "4. Cookies & Tracking Technologies",
      content:
        "We may use cookies and similar tracking technologies to improve user experience. You can disable cookies through your browser settings, but some features may not function properly.",
    },
    {
      title: "5. Sharing Your Information",
      content: "We do not sell, rent, or trade your personal information. However, we may share data with trusted third-party partners for:",
      list: [
        "Payment processing (e.g., PayPal, Stripe, Razorpay).",
        "Analytics and website improvement.",
        "Compliance with legal requirements.",
      ],
    },
    {
      title: "6. Your Rights",
      content: "You have the right to:",
      list: [
        "Request access to the data we store about you.",
        "Request corrections or deletions of your personal data.",
        "Opt out of marketing emails at any time.",
      ],
    },
    {
      title: "7. Changes to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date.",
    },
    // {
    //   title: "8. Contact Us",
    //   content: (
    //     <>
    //       If you have any questions about our Privacy Policy, please reach out to us at{" "}
    //       <a href="mailto:support@example.com" className="text-blue-600 hover:underline">
    //         support@example.com
    //       </a>.
    //     </>
    //   ),
    // },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6  ">
      <h1 className="text-3xl font-bold mb-4 text-center">Privacy Policy</h1>
      <p className="mb-4 text-center">
        Your privacy is important to us. This policy explains how we collect, use, and protect your personal data.
      </p>

      {policySections.map((section, index) => (
        <div key={index} className="mt-6">
          <h2 className="text-2xl font-semibold">{section.title}</h2>
          <p className="mt-2">{section.content}</p>
          {section.list && (
            <ul className="list-disc pl-6 mt-2">
              {section.list.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}

      <p className="mt-6 text-sm text-center ">Last Updated: March 2025</p>
    </div>
  );
};

export default PrivacyPolicy;
