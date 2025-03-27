
import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  BarChart4, 
  BrainCircuit, 
  ChevronRight, 
  Globe, 
  LineChart, 
  Lock, 
  Rocket, 
  Shield, 
  Sparkles, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Footer from '@/components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const Index: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header/Navbar */}
      <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-primary-blue to-info flex items-center justify-center">
                  <span className="font-bold text-white">M</span>
                </div>
                <span className="font-semibold text-xl tracking-tight">
                  MarketFlow
                </span>
              </Link>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link to="/features" className="text-sm font-medium hover:text-primary-blue transition-colors">
                Features
              </Link>
              <Link to="/pricing" className="text-sm font-medium hover:text-primary-blue transition-colors">
                Pricing
              </Link>
              <Link to="/support" className="text-sm font-medium hover:text-primary-blue transition-colors">
                Support
              </Link>
              <Link to="/about" className="text-sm font-medium hover:text-primary-blue transition-colors">
                About Us
              </Link>
            </nav>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-4">
              <Link to="/auth">
                <Button variant="outline" size="sm">
                  Log in
                </Button>
              </Link>
              <Link to="/auth?tab=register">
                <Button size="sm">
                  Sign up
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-blue/20 to-transparent"></div>
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
          <Badge className="mb-4 bg-primary-blue/10 text-primary-blue border-primary-blue/20 px-3 py-1">
            <BrainCircuit className="h-3.5 w-3.5 mr-1" />
            <span>AI-Powered Trading</span>
          </Badge>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            <span className="block">Intelligent Trading Platform</span>
            <span className="block text-primary-blue">Powered by AI</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mb-10">
            MarketFlow combines cutting-edge artificial intelligence with elegant design to give you the edge in today's financial markets.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/auth?tab=register">
              <Button size="lg" className="gap-2">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/demo">
              <Button variant="outline" size="lg">
                View Demo
              </Button>
            </Link>
          </div>
          
          {/* Dashboard Preview */}
          <div className="mt-16 relative w-full max-w-5xl">
            <div className="w-full overflow-hidden rounded-xl border border-border shadow-xl">
              <div className="bg-secondary/50 border-b border-border flex items-center p-3 gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-danger"></div>
                  <div className="h-3 w-3 rounded-full bg-warning"></div>
                  <div className="h-3 w-3 rounded-full bg-success"></div>
                </div>
                <div className="text-xs text-muted-foreground ml-2 flex-1">MarketFlow - AI Trading Dashboard</div>
              </div>
              
              <div className="bg-background">
                <img
                  src="https://via.placeholder.com/1200x680"
                  alt="MarketFlow Dashboard"
                  className="w-full h-auto"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 h-12 w-12 rounded-full bg-primary-blue/20 backdrop-blur-xl border border-white/20"></div>
            <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-info/20 backdrop-blur-xl border border-white/20"></div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-success/10 text-success border-success/20 px-3 py-1">
              <Sparkles className="h-3.5 w-3.5 mr-1" />
              <span>Key Features</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Intelligent Features for Smarter Trading</h2>
            <p className="text-lg text-muted-foreground">
              Discover the powerful tools and features that make MarketFlow the leading AI-powered trading platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-5">
                  <BrainCircuit className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">AI Market Insights</h3>
                <p className="text-muted-foreground mb-4">
                  Get personalized trade recommendations and predictive analysis powered by advanced AI algorithms.
                </p>
                <Link to="/features/ai-insights" className="flex items-center text-sm font-medium text-primary-blue">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Feature Card 2 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-success/10 text-success flex items-center justify-center mb-5">
                  <BarChart4 className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                  Visualize market data with intuitive charts and powerful technical indicators for better decision-making.
                </p>
                <Link to="/features/analytics" className="flex items-center text-sm font-medium text-primary-blue">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Feature Card 3 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-info/10 text-info flex items-center justify-center mb-5">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Portfolio Optimization</h3>
                <p className="text-muted-foreground mb-4">
                  Automatically optimize your portfolio for maximum returns based on your risk tolerance and goals.
                </p>
                <Link to="/features/portfolio" className="flex items-center text-sm font-medium text-primary-blue">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Feature Card 4 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-warning/10 text-warning flex items-center justify-center mb-5">
                  <LineChart className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-time Tracking</h3>
                <p className="text-muted-foreground mb-4">
                  Monitor your investments in real-time with customizable alerts and notifications for price movements.
                </p>
                <Link to="/features/tracking" className="flex items-center text-sm font-medium text-primary-blue">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Feature Card 5 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-danger/10 text-danger flex items-center justify-center mb-5">
                  <Shield className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Risk Management</h3>
                <p className="text-muted-foreground mb-4">
                  Advanced risk assessment tools to protect your investments and make informed decisions.
                </p>
                <Link to="/features/risk" className="flex items-center text-sm font-medium text-primary-blue">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
            
            {/* Feature Card 6 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-primary-blue/10 text-primary-blue flex items-center justify-center mb-5">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-3">Global Markets</h3>
                <p className="text-muted-foreground mb-4">
                  Access stocks, ETFs, cryptocurrencies, and more from markets around the world in one platform.
                </p>
                <Link to="/features/markets" className="flex items-center text-sm font-medium text-primary-blue">
                  Learn more
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4 bg-info/10 text-info border-info/20 px-3 py-1">
              <Users className="h-3.5 w-3.5 mr-1" />
              <span>Testimonials</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">Trusted by Traders Worldwide</h2>
            <p className="text-lg text-muted-foreground">
              Hear from our users about how MarketFlow has transformed their trading experience and improved their returns.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary mr-3 flex items-center justify-center">
                    <span className="font-semibold">JD</span>
                  </div>
                  <div>
                    <div className="font-medium">John Doe</div>
                    <div className="text-sm text-muted-foreground">Day Trader</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "MarketFlow's AI insights have completely transformed my trading strategy. I'm seeing consistent returns and making more informed decisions than ever before."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 2 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary mr-3 flex items-center justify-center">
                    <span className="font-semibold">SR</span>
                  </div>
                  <div>
                    <div className="font-medium">Sarah Rodriguez</div>
                    <div className="text-sm text-muted-foreground">Portfolio Manager</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "The portfolio optimization tools are incredible. MarketFlow has helped me identify opportunities I would have missed and better manage risk across my clients' portfolios."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="#3B82F6" stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Testimonial 3 */}
            <Card className="hover-scale">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-10 w-10 rounded-full bg-secondary mr-3 flex items-center justify-center">
                    <span className="font-semibold">MT</span>
                  </div>
                  <div>
                    <div className="font-medium">Michael Thompson</div>
                    <div className="text-sm text-muted-foreground">Retail Investor</div>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">
                  "As a beginner investor, MarketFlow's educational resources and intuitive interface have made it easy to get started. The AI recommendations give me confidence in my trading decisions."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star, index) => (
                    <svg key={star} xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill={index < 4 ? "#3B82F6" : "#3B82F6"} stroke="none">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue/90 to-info/90 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30 px-3 py-1">
              <Rocket className="h-3.5 w-3.5 mr-1" />
              <span>Start Trading Today</span>
            </Badge>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Trading Experience?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Join thousands of traders who have already discovered the power of AI-driven market analysis. Start your journey today with MarketFlow.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/auth?tab=register">
                <Button size="lg" variant="default" className="bg-white text-primary-blue hover:bg-white/90 gap-2">
                  Create Free Account
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
              <Link to="/pricing">
                <Button size="lg" variant="outline" className="text-white border-white/30 hover:bg-white/10">
                  View Pricing Plans
                </Button>
              </Link>
            </div>
            <div className="mt-8 text-sm text-white/70 flex justify-center items-center">
              <Lock className="h-4 w-4 mr-1.5" />
              <span>Secure, encrypted platform. No credit card required to start.</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
