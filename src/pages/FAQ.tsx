
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Separator } from '@/components/ui/separator';

const FAQ: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Frequently Asked Questions</h1>
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Get answers to the most common questions about MarketFlow
            </p>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold mb-4">General Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q1">
                    <AccordionTrigger>What is MarketFlow?</AccordionTrigger>
                    <AccordionContent>
                      MarketFlow is an intelligent trading platform powered by AI that provides professional-grade tools to everyday investors. Our platform combines real-time market data, advanced analytics, and AI-driven insights to help you make better investment decisions.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q2">
                    <AccordionTrigger>Is MarketFlow suitable for beginners?</AccordionTrigger>
                    <AccordionContent>
                      Yes, MarketFlow is designed to be accessible for investors of all experience levels. We offer educational resources and a user-friendly interface for beginners, while also providing advanced tools for more experienced investors.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q3">
                    <AccordionTrigger>What markets does MarketFlow cover?</AccordionTrigger>
                    <AccordionContent>
                      MarketFlow covers a wide range of markets including US stocks, ETFs, mutual funds, options, cryptocurrencies, and global indices. We continuously expand our coverage to provide a comprehensive investment platform.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-bold mb-4">Account & Billing</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q4">
                    <AccordionTrigger>How do I create an account?</AccordionTrigger>
                    <AccordionContent>
                      To create an account, click the "Sign Up" button in the top-right corner of our website. You'll need to provide your email address and create a password. You can then choose a subscription plan that fits your needs.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q5">
                    <AccordionTrigger>What subscription plans do you offer?</AccordionTrigger>
                    <AccordionContent>
                      We offer three main subscription tiers: Basic, Pro, and Enterprise. Each plan includes different features and capabilities to suit various investment needs. You can view the detailed pricing and feature comparison on our Pricing page.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q6">
                    <AccordionTrigger>Can I change or cancel my subscription?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can change or cancel your subscription at any time from your Account Settings. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you cancel, you'll continue to have access until the end of your current billing period.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q7">
                    <AccordionTrigger>Do you offer a free trial?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we offer a 14-day free trial for all new users. During the trial, you'll have access to all features of our Pro plan. No credit card is required to start your trial.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-bold mb-4">Features & Functionality</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q8">
                    <AccordionTrigger>What is the AI Insights feature?</AccordionTrigger>
                    <AccordionContent>
                      AI Insights uses machine learning algorithms to analyze market data, news, and trends to provide you with actionable investment insights. The feature includes technical analysis, sentiment analysis, and personalized recommendations based on your portfolio and preferences.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q9">
                    <AccordionTrigger>How accurate are your market predictions?</AccordionTrigger>
                    <AccordionContent>
                      Our AI models are continuously trained on vast amounts of historical and real-time data to provide high-quality insights. However, it's important to understand that all investing involves risk, and past performance doesn't guarantee future results. We provide confidence levels with our insights to help you make informed decisions.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q10">
                    <AccordionTrigger>Can I connect my brokerage account?</AccordionTrigger>
                    <AccordionContent>
                      Yes, MarketFlow integrates with most major brokerage platforms. By connecting your brokerage account, you can view all your investments in one place, get personalized insights, and (depending on your broker) execute trades directly from our platform.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q11">
                    <AccordionTrigger>What technical indicators do you support?</AccordionTrigger>
                    <AccordionContent>
                      We support over 100 technical indicators including moving averages, RSI, MACD, Bollinger Bands, Fibonacci retracements, and many more. You can customize charts with multiple indicators and save your preferred layouts.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-bold mb-4">Security & Privacy</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q12">
                    <AccordionTrigger>How do you protect my data?</AccordionTrigger>
                    <AccordionContent>
                      We take security very seriously. All data is encrypted both in transit and at rest using industry-standard encryption methods. We implement multiple layers of security including two-factor authentication, regular security audits, and strict access controls for our staff.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q13">
                    <AccordionTrigger>Do you sell my data to third parties?</AccordionTrigger>
                    <AccordionContent>
                      No, we do not sell your personal data to third parties. We may use aggregated, anonymized data for improving our services and market analysis, but this never includes personally identifiable information. Please refer to our Privacy Policy for complete details.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q14">
                    <AccordionTrigger>Is my financial information secure?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we use bank-level security measures to protect your financial information. When you connect a brokerage account, we use secure OAuth protocols and do not store your brokerage credentials on our servers. All sensitive data is encrypted and we maintain SOC 2 compliance.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
              
              <Separator />
              
              <div>
                <h2 className="text-xl font-bold mb-4">Support & Resources</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="q15">
                    <AccordionTrigger>How can I get help with using MarketFlow?</AccordionTrigger>
                    <AccordionContent>
                      We offer multiple support channels including a comprehensive help center, live chat support during business hours, and email support. Pro and Enterprise customers also have access to priority support with faster response times.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q16">
                    <AccordionTrigger>Do you offer educational resources?</AccordionTrigger>
                    <AccordionContent>
                      Yes, we provide a variety of educational resources including tutorials, webinars, strategy guides, and a learning center. These resources cover everything from investing basics to advanced trading strategies and using MarketFlow's features.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="q17">
                    <AccordionTrigger>Can I request new features?</AccordionTrigger>
                    <AccordionContent>
                      Absolutely! We welcome feature requests from our users. You can submit suggestions through our support portal or directly to our product team. We regularly review user feedback to prioritize new features and improvements.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
