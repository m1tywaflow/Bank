import React from "react";
export default function PrivacyPolicy() {
  return (
    <section className="w-full min-h-screen bg-[#1A1A1A] text-white flex justify-center py-40 px-6">
      <div className="max-w-4xl w-full space-y-10">
        <h1 className="text-[#CAFF33] text-5xl font-bold">Privacy Policy</h1>
        <p className="text-gray-400 text-base leading-relaxed">
          At YourBank, we value your privacy and are committed to protecting
          your personal information. This Privacy Policy outlines how we
          collect, use, disclose, and safeguard your data when you interact with
          our services — both online and offline.
        </p>
        <div className="space-y-8 text-base text-gray-300 leading-relaxed">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              1. Information We Collect
            </h2>
            <p>
              We may collect personal details such as your name, email address,
              phone number, home address, and financial information when you
              open an account, apply for a loan, or use other banking services.
              We also collect technical data such as device information, IP
              addresses, and browsing activity on our website or mobile app.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              2. How We Use Your Data
            </h2>
            <p>
              Your information is used to deliver high-quality financial
              services, including processing transactions, verifying your
              identity, providing customer support, and personalizing your
              banking experience. We may also use your data to comply with legal
              obligations and prevent fraudulent activities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              3. Data Protection
            </h2>
            <p>
              We implement strong technical and organizational security measures
              to protect your personal data from unauthorized access,
              alteration, disclosure, or destruction. This includes encryption,
              firewalls, secure servers, and multi-factor authentication.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              4. Cookies and Tracking
            </h2>
            <p>
              Our website uses cookies and similar technologies to improve
              functionality, analyze site traffic, and enhance user experience.
              You may choose to disable cookies in your browser settings, though
              some features of our website may not work properly without them.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              5. Sharing Your Information
            </h2>
            <p>
              We do not sell or rent your personal data. However, we may share
              your information with trusted third-party service providers,
              regulatory authorities, and legal entities when necessary to
              deliver services or comply with applicable laws.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              6. Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. You may also request that we restrict or stop
              processing your data under certain circumstances. To exercise
              these rights, please contact our support team.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              7. Children’s Privacy
            </h2>
            <p>
              Our services are not directed at children under the age of 18. We
              do not knowingly collect personal data from minors. If we discover
              that we have collected such information, we will delete it
              immediately.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              8. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or legal requirements. We encourage you
              to review this page regularly to stay informed about how we
              protect your data.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-white mb-2">
              9. Contact Us
            </h2>
            <p>
              If you have any questions or concerns about this Privacy Policy,
              please contact us at:
            </p>
            <ul className="mt-2 text-gray-400">
              <li>Email: support@yourbank.com</li>
              <li>Phone: +1 (800) 123-4567</li>
              <li>Address: 123 Finance Street, New York, NY, USA</li>
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
