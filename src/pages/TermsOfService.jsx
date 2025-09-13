import React from "react";
export default function TermsOfService() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] text-white flex justify-center py-40 px-6">
      <div className="max-w-4xl w-full space-y-10">
        {/* Заголовок */}
        <h1 className="text-[#CAFF33] text-5xl font-bold">Terms of Service</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          By accessing and using YourBank’s services, you agree to comply with
          these Terms of Service. Please read them carefully to understand your
          rights and responsibilities when using our website, mobile
          applications, and financial services.
        </p>
        <div className="space-y-8 text-base text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Use of Services
            </h2>
            <p>
              You agree to use our services only for lawful purposes and in
              compliance with all applicable regulations. Any misuse of our
              services, including fraudulent or illegal activities, is strictly
              prohibited and may result in termination of your account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. Account Responsibilities
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account credentials and for all activities carried out under your
              account. If you suspect unauthorized access, you must notify us
              immediately. YourBank will not be liable for losses arising from
              failure to secure your login details.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Prohibited Activities
            </h2>
            <p>You may not use our services to engage in activities such as:</p>
            <ul className="list-disc list-inside mt-2 text-gray-400">
              <li>Money laundering, fraud, or financing illegal activities</li>
              <li>Sharing false or misleading information</li>
              <li>Attempting to hack, disrupt, or overload our systems</li>
              <li>
                Violating intellectual property rights or privacy of others
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Service Availability
            </h2>
            <p>
              While we strive to ensure uninterrupted access to our services, we
              do not guarantee that they will always be available or error-free.
              Scheduled maintenance, upgrades, or unforeseen technical issues
              may temporarily limit access.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Limitation of Liability
            </h2>
            <p>
              YourBank is not liable for any indirect, incidental, or
              consequential damages resulting from the use or inability to use
              our services. This includes, but is not limited to, financial
              loss, data corruption, or service interruption.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Modifications to Services
            </h2>
            <p>
              We reserve the right to modify, suspend, or discontinue any part
              of our services at any time without prior notice. Continued use of
              our services after such modifications constitutes acceptance of
              the updated Terms of Service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and interpreted in
              accordance with the laws of the United States. Any disputes
              arising under these terms shall be subject to the exclusive
              jurisdiction of the courts located in New York, USA.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate your account if you
              violate these Terms of Service or engage in activities that may
              harm YourBank, our customers, or third parties. Upon termination,
              your access to our services will be revoked immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              9. Contact Information
            </h2>
            <p>
              If you have any questions or concerns regarding these Terms of
              Service, please reach out to us:
            </p>
            <ul className="mt-2 text-gray-400">
              <li>Email: legal@yourbank.com</li>
              <li>Phone: +1 (800) 987-6543</li>
              <li>Address: 123 Compliance Road, New York, NY, USA</li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-10">
          Last updated: September 2025
        </p>
      </div>
    </section>
  );
}
