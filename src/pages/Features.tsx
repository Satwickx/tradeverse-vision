import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { 
  BarChart3, 
  LineChart, 
  Sparkles, 
  TrendingUp, 
  Lock, 
  BarChart, 
  BrainCircuit,
  Zap
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Features: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Powerful Features for Smart Investors</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Discover tools designed to help you make better investment decisions with real-time data, AI-powered insights, and professional-grade analytics.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="gap-2">
                <Zap className="h-4 w-4" />
                Get Started Free
              </Button>
              <Button size="lg" variant="outline" className="gap-2">
                See Demo
              </Button>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Core Platform Features</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <LineChart className="text-primary-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Real-Time Analytics</h3>
                  <p className="text-muted-foreground">
                    Track market movements with real-time data and advanced charting tools that professionals use.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <Sparkles className="text-primary-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
                  <p className="text-muted-foreground">
                    Leverage machine learning algorithms that analyze patterns and predict market trends with high accuracy.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <BarChart3 className="text-primary-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Portfolio Management</h3>
                  <p className="text-muted-foreground">
                    Manage all your investments in one place with automatic rebalancing suggestions and tax optimization.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <Lock className="text-primary-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Bank-Level Security</h3>
                  <p className="text-muted-foreground">
                    Your data is protected with enterprise-grade encryption and multi-factor authentication.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <TrendingUp className="text-primary-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Smart Alerts</h3>
                  <p className="text-muted-foreground">
                    Get notified about market opportunities, price changes, and important news affecting your investments.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-md">
                <CardContent className="pt-6">
                  <div className="mb-4 p-3 bg-primary-blue/10 rounded-full w-12 h-12 flex items-center justify-center">
                    <BrainCircuit className="text-primary-blue h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Learning Resources</h3>
                  <p className="text-muted-foreground">
                    Access educational content tailored to your experience level to improve your investment knowledge.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary-blue text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to transform your investment strategy?</h2>
            <p className="text-xl max-w-2xl mx-auto mb-10">
              Join thousands of investors who are making smarter decisions with MarketFlow.
            </p>
            <Button size="lg" variant="secondary" className="gap-2">
              Start Your Free Trial
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
