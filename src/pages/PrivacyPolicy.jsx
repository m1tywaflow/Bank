import React from "react";

export default function PrivacyPolicy() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] text-white flex justify-center py-50 px-6">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-[#CAFF33] text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          At YourBank, we value your privacy and are committed to protecting your personal information. 
          This Privacy Policy explains how we collect, use, and safeguard your data.
        </p>

        <div className="space-y-4 text-sm text-gray-300">
          <h2 className="text-lg font-semibold text-white">1. Information We Collect</h2>
          <p>We may collect personal details such as your name, email, and financial information when you use our services.</p>

          <h2 className="text-lg font-semibold text-white">2. How We Use Your Data</h2>
          <p>We use your data to provide banking services, improve customer experience, and comply with legal obligations.</p>

          <h2 className="text-lg font-semibold text-white">3. Data Protection</h2>
          <p>We implement strong security measures to protect your personal data from unauthorized access or misuse.</p>
        </div>
      </div>
    </section>
  );
}
