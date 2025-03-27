
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  Users, 
  TrendingUp, 
  Shield, 
  Zap, 
  Globe, 
  LineChart 
} from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24 relative overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Making Smart Investing Accessible to Everyone
              </h1>
              <p className="text-xl text-muted-foreground mb-10">
                We're on a mission to democratize financial markets by providing powerful tools powered by AI and data science.
              </p>
              <Button size="lg" className="gap-2">
                Join Our Journey
                <TrendingUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-primary-blue/10 to-transparent -z-0 hidden md:block"></div>
        </section>
        
        {/* Our Story */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="aspect-video bg-gradient-to-br from-primary-blue to-blue-400 rounded-lg shadow-lg"></div>
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-6">
                  MarketFlow was founded in 2020 by a team of financial experts and technology innovators who saw a gap in the market. Traditional financial tools were either too complex for everyday investors or too simplistic for meaningful analysis.
                </p>
                <p className="text-lg text-muted-foreground mb-6">
                  We set out to build a platform that combines professional-grade market analysis with an intuitive user experience, making sophisticated investing strategies accessible to everyone.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, MarketFlow serves thousands of investors across the globe, from beginners taking their first steps into the market to seasoned professionals who rely on our advanced analytics.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Our Core Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-primary-blue/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <Shield className="text-primary-blue h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We believe in complete transparency in everything we do, from our pricing to how our algorithms work.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-primary-blue/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <Zap className="text-primary-blue h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We're constantly pushing the boundaries of what's possible with financial technology and AI.
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto mb-6 p-4 bg-primary-blue/10 rounded-full w-20 h-20 flex items-center justify-center">
                  <Users className="text-primary-blue h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                <p className="text-muted-foreground">
                  We design our platform to be accessible to everyone, regardless of their experience level or background.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16 md:py-24 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-16">Meet Our Leadership Team</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="aspect-square bg-primary-blue/20 rounded-full mb-4 mx-auto w-40 h-40"></div>
                <h3 className="text-xl font-semibold">Sarah Johnson</h3>
                <p className="text-sm text-muted-foreground mb-2">Co-Founder & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Former investment banker with 15+ years of experience in financial markets.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square bg-primary-blue/20 rounded-full mb-4 mx-auto w-40 h-40"></div>
                <h3 className="text-xl font-semibold">David Chen</h3>
                <p className="text-sm text-muted-foreground mb-2">Co-Founder & CTO</p>
                <p className="text-sm text-muted-foreground">
                  Machine learning expert who previously led AI initiatives at major tech companies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square bg-primary-blue/20 rounded-full mb-4 mx-auto w-40 h-40"></div>
                <h3 className="text-xl font-semibold">Michael Okonjo</h3>
                <p className="text-sm text-muted-foreground mb-2">Chief Product Officer</p>
                <p className="text-sm text-muted-foreground">
                  Experienced product leader who has built financial products used by millions.
                </p>
              </div>
              
              <div className="text-center">
                <div className="aspect-square bg-primary-blue/20 rounded-full mb-4 mx-auto w-40 h-40"></div>
                <h3 className="text-xl font-semibold">Elena Petrov</h3>
                <p className="text-sm text-muted-foreground mb-2">Chief Financial Officer</p>
                <p className="text-sm text-muted-foreground">
                  Seasoned financial executive with experience at both startups and Fortune 500 companies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Stats Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">50,000+</div>
                <p className="text-muted-foreground">Active Users</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">$2.5B+</div>
                <p className="text-muted-foreground">Assets Tracked</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">94%</div>
                <p className="text-muted-foreground">Customer Satisfaction</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary-blue mb-2">35</div>
                <p className="text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Investors Section */}
        <section className="py-16 md:py-24 bg-primary-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-12">Backed By World-Class Investors</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="flex items-center justify-center">
                <div className="h-16 w-40 bg-white/20 rounded-lg"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-40 bg-white/20 rounded-lg"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-40 bg-white/20 rounded-lg"></div>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-16 w-40 bg-white/20 rounded-lg"></div>
              </div>
            </div>
            
            <p className="text-lg max-w-2xl mx-auto mb-8">
              We're fortunate to be supported by investors who share our vision of making smart investing accessible to everyone.
            </p>
            
            <Button variant="secondary" size="lg">
              Join Our Team
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
