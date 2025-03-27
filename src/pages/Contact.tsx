
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-primary-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
            <p className="text-xl max-w-2xl mx-auto">
              Have questions about our platform? Our team is here to help you with any inquiries.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary-blue/10 rounded-full">
                      <MapPin className="h-6 w-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                      <p className="text-muted-foreground">
                        123 Market Street<br />
                        Suite 456<br />
                        San Francisco, CA 94105
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary-blue/10 rounded-full">
                      <Phone className="h-6 w-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Phone</h3>
                      <p className="text-muted-foreground">+1 (888) 555-6789</p>
                      <p className="text-sm text-muted-foreground">Mon-Fri from 9am to 6pm EST</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary-blue/10 rounded-full">
                      <Mail className="h-6 w-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Email</h3>
                      <p className="text-muted-foreground">info@marketflow.com</p>
                      <p className="text-sm text-muted-foreground">We respond within 24 hours</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mr-4 p-3 bg-primary-blue/10 rounded-full">
                      <Clock className="h-6 w-6 text-primary-blue" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">Working Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9am - 6pm EST<br />
                        Saturday: 10am - 2pm EST<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                    
                    <form className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name</label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name</label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                        <Input id="email" type="email" placeholder="john.doe@example.com" />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input id="phone" placeholder="+1 (555) 000-0000" />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                        <Input id="subject" placeholder="How can we help you?" />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                        <Textarea 
                          id="message" 
                          placeholder="Please describe your inquiry in detail..." 
                          className="min-h-[120px]" 
                        />
                      </div>
                      
                      <Button type="submit" className="w-full">Send Message</Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Visit Our Office</h2>
            
            {/* Map placeholder */}
            <div className="aspect-video max-w-4xl mx-auto bg-secondary rounded-lg shadow-md flex items-center justify-center">
              <p className="text-muted-foreground">Interactive map would be displayed here</p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
