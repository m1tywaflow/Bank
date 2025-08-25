import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "How do I open an account with YourBank?",
      a: "Opening an account with YourBank is easy. Simply visit our website and click on the 'Open an Account' button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.",
    },
    {
      q: "What documents do I need to provide to apply for a loan?",
      a: "The documents required for a loan application may vary depending on the type of loan you are applying for. Generally, you will need to provide identification documents (such as a passport or driver's license), proof of income (such as pay stubs or tax returns), and information about the collateral (if applicable). Our loan officers will guide you through the specific requirements during the application process.",
    },
    {
      q: "How can I access my accounts online?",
      a: "Accessing your accounts online is simple and secure. Visit our website and click on the 'Login' button. Enter your username and password to access your accounts. If you haven’t registered for online banking, click on the 'Enroll Now' button and follow the registration process. If you need assistance, our customer support team is available to guide you.",
    },
    {
      q: "Are my transactions and personal information secure?",
      a: "At YourBank, we prioritize the security of your transactions and personal information. We employ industry-leading encryption and multi-factor authentication to ensure that your data is protected. Additionally, we regularly update our security measures to stay ahead of emerging threats. You can bank with confidence knowing that we have robust security systems in place.",
    },
    {
      q: "Can I apply for a loan online?",
      a: "Yes, you can apply for a loan online through our secure platform. Fill out the online application form, upload required documents, and our loan officers will contact you with next steps.",
    },
    {
      q: "How do I reset my online banking password?",
      a: "To reset your password, go to the login page and click on 'Forgot Password'. Follow the instructions to reset your password securely using your registered email or phone number.",
    },
    {
      q: "Does YourBank offer business accounts?",
      a: "Yes, YourBank offers a variety of business account solutions, including checking accounts, savings accounts, and merchant services to support your business needs.",
    },
    {
      q: "How do I contact customer support?",
      a: "You can contact our support team via live chat on the website, by calling our 24/7 hotline, or by emailing support@yourbank.com. Our team is always ready to help.",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="px-6 max-w-7xl mx-auto py-20">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-white">
          Frequently <span className="text-[#CAFF33]">Asked Questions</span>
        </h1>
        <p className="text-[#B3B3B3] mt-4">
          Still you have any questions? Contact our Team via{" "}
          <span className="text-white">support@yourbank.com</span>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.slice(0, 4).map((faq, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-2xl p-6 border border-[#1a1a1a]"
          >
            <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
      <div
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-700 ease-in-out overflow-hidden ${
          showAll ? "max-h-[2000px] opacity-100 mt-6" : "max-h-0 opacity-40"
        }`}
      >
        {faqs.slice(4).map((faq, idx) => (
          <div
            key={idx}
            className="bg-black/40 rounded-2xl p-6 border border-[#1a1a1a]"
          >
            <h3 className="text-white font-semibold mb-3">{faq.q}</h3>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">{faq.a}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <button
          onClick={() => setShowAll(!showAll)}
          className="bg-black px-6 py-3 rounded-full text-white hover:bg-[#1f1f1f] flex items-center gap-2 mx-auto transition"
        >
          {showAll ? "Show Less" : "Load All FAQs"}
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              showAll ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>
    </div>
  );
}
