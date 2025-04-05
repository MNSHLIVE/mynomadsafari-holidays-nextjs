import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | My Nomadsafari Holidays",
  description: "Privacy Policy and Terms of Service for My Nomadsafari Holidays",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      
      <div className="prose max-w-none">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
          <p>We collect information that you provide directly to us, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Name, email address, phone number, and contact information</li>
            <li>Travel preferences and requirements</li>
            <li>Booking and payment information</li>
            <li>Communication history with us</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Process your travel bookings and inquiries</li>
            <li>Communicate with you about your travel arrangements</li>
            <li>Send you promotional offers and updates (with your consent)</li>
            <li>Improve our services and website experience</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Cookie Policy</h2>
          <p>We use cookies and similar tracking technologies to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Remember your preferences and settings</li>
            <li>Understand how you use our website</li>
            <li>Improve our services and user experience</li>
            <li>Provide personalized content and advertisements</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
          <p>We implement appropriate security measures to protect your personal information, including:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Encryption of sensitive data</li>
            <li>Regular security assessments</li>
            <li>Limited access to personal information</li>
            <li>Secure data storage and transmission</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li>Access your personal information</li>
            <li>Correct inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Contact Us</h2>
          <p>For any privacy-related questions or concerns, please contact us at:</p>
          <p className="mt-2">
            <a href="mailto:mynomadsafariholidays@gmail.com" className="text-primary hover:underline">
              mynomadsafariholidays@gmail.com
            </a>
          </p>
        </section>
      </div>
    </div>
  );
} 