import React from "react";

export default function TermsOfService() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] text-white flex justify-center py-50 px-6">
      <div className="max-w-3xl w-full space-y-8">
        <h1 className="text-[#CAFF33] text-4xl font-bold">Terms of Service</h1>
        <p className="text-gray-400 text-sm leading-relaxed">
          By accessing and using YourBank’s services, you agree to comply with these Terms of Service.
        </p>

        <div className="space-y-4 text-sm text-gray-300">
          <h2 className="text-lg font-semibold text-white">1. Use of Services</h2>
          <p>You agree to use our services only for lawful purposes and in accordance with applicable regulations.</p>

          <h2 className="text-lg font-semibold text-white">2. Account Responsibilities</h2>
          <p>You are responsible for maintaining the confidentiality of your account and login credentials.</p>

          <h2 className="text-lg font-semibold text-white">3. Limitation of Liability</h2>
          <p>YourBank is not responsible for any damages arising from misuse of our services.</p>
        </div>
      </div>
    </section>
  );
}
