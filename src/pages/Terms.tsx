
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Terms of Service</h1>
            <p className="text-muted-foreground mb-6">Last updated: June 15, 2023</p>
            
            <div className="prose prose-sm max-w-none">
              <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                Welcome to MarketFlow. These Terms of Service govern your use of our website, web application, and services. By accessing or using MarketFlow, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>"Service"</strong> refers to the MarketFlow website, web application, and related services.</li>
                <li><strong>"User"</strong> refers to any individual who accesses or uses the Service.</li>
                <li><strong>"Content"</strong> refers to all information, data, text, graphics, and other materials displayed on or available through the Service.</li>
                <li><strong>"Account"</strong> refers to a User's registration with MarketFlow that allows access to the Service.</li>
              </ul>
              
              <h2 className="text-xl font-bold mt-8 mb-4">3. Account Registration and Usage</h2>
              <p>
                To use certain features of the Service, you must register for an Account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete.
              </p>
              <p className="mt-4">
                You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your Account. We encourage you to use a strong password and to keep it secure.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">4. Subscription and Payments</h2>
              <p>
                Some aspects of the Service require payment of fees. All fees are stated in US dollars unless otherwise specified. You are responsible for paying all fees and applicable taxes in a timely manner with a valid payment method. MarketFlow reserves the right to change the fees for any Service at its discretion.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">5. Data and Privacy</h2>
              <p>
                Your use of the Service is subject to our Privacy Policy, which is incorporated into these Terms. Please review our Privacy Policy to understand how we collect, use, and disclose information about you.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">6. Investment Risk Disclosure</h2>
              <p>
                MarketFlow provides information and tools to assist users in making investment decisions, but we do not provide personalized investment advice. All investments involve risk, and the past performance of a security, industry, sector, market, or financial product does not guarantee future results.
              </p>
              <p className="mt-4">
                Users should consider their investment objectives and risks carefully before investing. The content provided through the Service is for informational purposes only and should not be considered as financial advice.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">7. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by MarketFlow and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">8. Termination</h2>
              <p>
                MarketFlow reserves the right to terminate or suspend your Account and access to the Service at any time, for any reason, including, without limitation, if you breach these Terms.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">9. Limitation of Liability</h2>
              <p>
                In no event shall MarketFlow, its directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">10. Changes to Terms</h2>
              <p>
                MarketFlow reserves the right to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">11. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at <a href="mailto:legal@marketflow.com" className="text-primary-blue hover:underline">legal@marketflow.com</a>.
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
