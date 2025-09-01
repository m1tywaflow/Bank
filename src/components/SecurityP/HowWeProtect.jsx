import React from "react";
import secureImg from "../../assets/Security/secureImg.png";
import multiImg from "../../assets/Security/multi-factorImg.png";
import mobileBankingImg from "../../assets/Security/mobileBankingImg.png";
import fraudImg from "../../assets/Security/fraudImg.png";
export default function HowWeProtect() {
  const protect = [
    {
      icon: secureImg,
      title: "Secure Online Banking Platform",
      text: "Our online banking platform is built with multiple layers of security to safeguard your information. We utilize industry-standard encryption protocols to ensure that your data remains confidential and protected during transmission.",
    },
    {
      icon: multiImg,
      title: "Multi-Factor Authentication",
      text: "To enhance the security of your online banking experience, we employ multi-factor authentication. This additional layer of security requires you to provide multiple pieces of identification, such as a password and a one-time verification code, to access your account.",
    },
    {
      icon: mobileBankingImg,
      title: "Secure Mobile Banking",
      text: "Our mobile banking app is designed with the same level of security as our online banking platform. You can confidently access your accounts, make transactions, and manage your finances on the go, knowing that your information is protected.",
    },
    {
      icon: fraudImg,
      title: "Fraud Monitoring",
      text: "We have sophisticated fraud detection systems in place to monitor your accounts for any suspicious activities. Our dedicated team works around the clock to detect and prevent unauthorized transactions, providing you with peace of mind.",
    },
  ];
  return (
    <section className="w-full bg-[#1a1a1a] flex justify-center py-20 px-6">
      <div className="max-w-7xl w-full">
        <div className="text-center md:text-left">
          <h1 className="text-white text-4xl font-bold">
            How We <span className="text-[#CAFF33]">Protect You</span>
          </h1>
          <p className="text-[#B3B3B3] text-sm pt-4 max-w-2xl">
            At YourBank, we prioritize the security and confidentiality of your
            financial information. Our state-of-the-art encryption technology
            and stringent data protection measures ensure your assets and
            transactions are safeguarded at all times
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {protect.map((item, index) => (
            <div
              key={index}
              className="bg-[#111] rounded-2xl p-6 flex items-start gap-4 relative overflow-hidden"
            >
              <div className="absolute -top-10 -left-10 w-32 h-32 bg-lime-400 opacity-20 rounded-full blur-3xl"></div>
              <div className="flex-shrink-0 rounded-full flex items-center justify-center">
                <img src={item.icon} alt={item.title} className="w-16 h-16" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm mt-2 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
