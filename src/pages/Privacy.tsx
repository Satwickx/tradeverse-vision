
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Separator } from '@/components/ui/separator';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6">Privacy Policy</h1>
            <p className="text-muted-foreground mb-6">Last updated: June 15, 2023</p>
            
            <div className="prose prose-sm max-w-none">
              <h2 className="text-xl font-bold mt-8 mb-4">1. Introduction</h2>
              <p>
                At MarketFlow, we respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
              </p>
              <p className="mt-4">
                Please read this Privacy Policy carefully. If you do not agree with the terms of this Privacy Policy, please do not access the site or use our services.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.1 Personal Data</h3>
              <p>
                We may collect personal identification information from Users in various ways, including, but not limited to, when Users visit our site, register on the site, subscribe to our services, and in connection with other activities, services, features, or resources we make available. Users may be asked for, as appropriate:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Mailing address</li>
                <li>Payment information</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.2 Non-Personal Data</h3>
              <p>
                We may collect non-personal identification information about Users whenever they interact with our site. Non-personal identification information may include:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>Browser name</li>
                <li>Type of computer or device</li>
                <li>Technical information about Users' means of connection to our site</li>
                <li>Usage data and preferences</li>
              </ul>
              
              <h3 className="text-lg font-semibold mt-6 mb-3">2.3 Cookies and Tracking Technologies</h3>
              <p>
                Our site may use "cookies" and similar tracking technologies to enhance User experience. Users may choose to set their web browser to refuse cookies or to alert you when cookies are being sent. If they do so, note that some parts of the site may not function properly.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>
                We may use the information we collect from you for the following purposes:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>To provide and maintain our services</li>
                <li>To personalize user experience</li>
                <li>To improve our website and services</li>
                <li>To process transactions and subscriptions</li>
                <li>To send periodic emails and communications</li>
                <li>To provide customer support</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
              
              <h2 className="text-xl font-bold mt-8 mb-4">4. How We Protect Your Information</h2>
              <p>
                We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information, username, password, transaction information, and data stored on our site.
              </p>
              <p className="mt-4">
                Sensitive and private data exchange between the site and its Users happens over an SSL secured communication channel and is encrypted and protected with digital signatures.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">5. Sharing Your Information</h2>
              <p>
                We do not sell, trade, or rent Users' personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners, trusted affiliates, and advertisers for the purposes outlined above.
              </p>
              <p className="mt-4">
                We may use third-party service providers to help us operate our business and the site or administer activities on our behalf, such as sending out newsletters or surveys. We may share your information with these third parties for those limited purposes.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">6. Third-Party Websites</h2>
              <p>
                Users may find content on our site that links to the sites and services of our partners, suppliers, advertisers, sponsors, licensors, and other third parties. We do not control the content or links that appear on these sites and are not responsible for the practices employed by websites linked to or from our site.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">7. Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, such as:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>The right to access your personal data</li>
                <li>The right to rectify inaccurate or incomplete data</li>
                <li>The right to erase your personal data</li>
                <li>The right to restrict processing of your personal data</li>
                <li>The right to data portability</li>
                <li>The right to object to processing of your personal data</li>
              </ul>
              <p className="mt-4">
                To exercise any of these rights, please contact us using the information provided below.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">8. Changes to This Privacy Policy</h2>
              <p>
                MarketFlow has the discretion to update this Privacy Policy at any time. When we do, we will revise the updated date at the top of this page. We encourage Users to frequently check this page for any changes to stay informed about how we are helping to protect the personal information we collect.
              </p>
              
              <h2 className="text-xl font-bold mt-8 mb-4">9. Contacting Us</h2>
              <p>
                If you have any questions about this Privacy Policy, the practices of this site, or your dealings with this site, please contact us at:
              </p>
              <p className="mt-2">
                <a href="mailto:privacy@marketflow.com" className="text-primary-blue hover:underline">privacy@marketflow.com</a>
              </p>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Privacy;
