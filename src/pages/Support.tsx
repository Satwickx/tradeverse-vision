
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  HelpCircle, 
  FileText, 
  MessageSquare, 
  PhoneCall, 
  Mail, 
  Search, 
  BookOpen,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary-blue text-white py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">How Can We Help You?</h1>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Find answers to your questions or contact our support team for personalized assistance.
            </p>
            
            <div className="max-w-2xl mx-auto relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-muted-foreground" />
              <Input 
                placeholder="Search for help articles..." 
                className="pl-10 h-12 bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/60"
              />
            </div>
          </div>
        </section>
        
        {/* Support Options */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Support Options</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <FileText className="text-primary-blue h-8 w-8" />
                  </div>
                  <CardTitle>Knowledge Base</CardTitle>
                  <CardDescription>Browse our detailed help articles</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Find step-by-step guides, tutorials, and answers to common questions in our comprehensive knowledge base.
                  </p>
                  <Button variant="outline" className="gap-2">
                    Browse Articles
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <MessageSquare className="text-primary-blue h-8 w-8" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Chat with our support team</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Get real-time assistance from our experienced support team via live chat during business hours.
                  </p>
                  <Button className="gap-2">
                    Start Chat
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 p-3 bg-primary-blue/10 rounded-full w-16 h-16 flex items-center justify-center">
                    <Mail className="text-primary-blue h-8 w-8" />
                  </div>
                  <CardTitle>Email Support</CardTitle>
                  <CardDescription>Send us a message</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Submit your question or issue via email and we'll get back to you within 24 hours.
                  </p>
                  <Button variant="outline" className="gap-2">
                    Email Us
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Popular Help Topics */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Popular Help Topics</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <a href="#" className="block p-6 bg-background rounded-lg border hover:border-primary-blue transition-colors">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-blue" />
                  Getting Started Guide
                </h3>
                <p className="text-sm text-muted-foreground">Learn how to set up your account and start using the platform</p>
              </a>
              
              <a href="#" className="block p-6 bg-background rounded-lg border hover:border-primary-blue transition-colors">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-blue" />
                  Account Settings
                </h3>
                <p className="text-sm text-muted-foreground">Manage your profile, security settings, and preferences</p>
              </a>
              
              <a href="#" className="block p-6 bg-background rounded-lg border hover:border-primary-blue transition-colors">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-blue" />
                  Portfolio Management
                </h3>
                <p className="text-sm text-muted-foreground">How to create, monitor, and optimize your investment portfolio</p>
              </a>
              
              <a href="#" className="block p-6 bg-background rounded-lg border hover:border-primary-blue transition-colors">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-blue" />
                  Market Data
                </h3>
                <p className="text-sm text-muted-foreground">Understanding the real-time market data provided on the platform</p>
              </a>
              
              <a href="#" className="block p-6 bg-background rounded-lg border hover:border-primary-blue transition-colors">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-blue" />
                  AI Features
                </h3>
                <p className="text-sm text-muted-foreground">How to use AI-powered insights to make better investment decisions</p>
              </a>
              
              <a href="#" className="block p-6 bg-background rounded-lg border hover:border-primary-blue transition-colors">
                <h3 className="font-medium mb-2 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-primary-blue" />
                  Billing & Subscriptions
                </h3>
                <p className="text-sm text-muted-foreground">Managing your payments, invoices, and subscription plans</p>
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="md:flex">
                <div className="md:w-1/3 bg-primary-blue p-8 text-white">
                  <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <PhoneCall className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-white/80">+1 (888) 555-6789</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-white/80">support@marketflow.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <HelpCircle className="h-5 w-5 mr-3 mt-0.5" />
                      <div>
                        <p className="font-medium">Support Hours</p>
                        <p className="text-white/80">Mon-Fri: 9am - 8pm EST</p>
                        <p className="text-white/80">Sat: 10am - 4pm EST</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8">
                  <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                      <Input id="subject" placeholder="How can we help?" />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                      <Textarea id="message" placeholder="Describe your issue or question in detail..." className="min-h-32" />
                    </div>
                    
                    <Button className="w-full">Send Message</Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Support;
