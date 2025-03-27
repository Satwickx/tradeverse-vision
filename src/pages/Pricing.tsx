
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const Pricing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1">
        {/* Pricing Header */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Simple, Transparent Pricing</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the plan that fits your investment needs with no hidden fees or complicated tiers.
            </p>
          </div>
        </section>
        
        {/* Pricing Tabs */}
        <section className="pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="monthly" className="w-full max-w-4xl mx-auto">
              <div className="flex justify-center mb-8">
                <TabsList>
                  <TabsTrigger value="monthly">Monthly Billing</TabsTrigger>
                  <TabsTrigger value="annual">Annual Billing (Save 20%)</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Basic Plan */}
                  <Card className="border">
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>For individual investors just getting started</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$9</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Real-time market data</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Basic portfolio tracking</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>5 custom watchlists</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Daily market summaries</span>
                        </li>
                        <li className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>AI-powered insights</span>
                        </li>
                        <li className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>Advanced analytics</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Pro Plan */}
                  <Card className="border-2 border-primary-blue shadow-lg">
                    <CardHeader>
                      <div className="py-1 px-3 bg-primary-blue text-white text-xs font-semibold rounded-full w-fit mb-2">
                        MOST POPULAR
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>For active investors who want deeper insights</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$29</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>All Basic features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>AI-powered market insights</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Unlimited watchlists</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Advanced technical analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Real-time alerts</span>
                        </li>
                        <li className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>Premium research reports</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Enterprise Plan */}
                  <Card className="border">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For professional traders and investment firms</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$99</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>All Pro features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Premium research reports</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>White-label options</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Custom integrations</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
              
              <TabsContent value="annual">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Basic Plan Annual */}
                  <Card className="border">
                    <CardHeader>
                      <CardTitle>Basic</CardTitle>
                      <CardDescription>For individual investors just getting started</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$7</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-success mt-1">Save $24 per year</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Real-time market data</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Basic portfolio tracking</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>5 custom watchlists</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Daily market summaries</span>
                        </li>
                        <li className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>AI-powered insights</span>
                        </li>
                        <li className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>Advanced analytics</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Pro Plan Annual */}
                  <Card className="border-2 border-primary-blue shadow-lg">
                    <CardHeader>
                      <div className="py-1 px-3 bg-primary-blue text-white text-xs font-semibold rounded-full w-fit mb-2">
                        MOST POPULAR
                      </div>
                      <CardTitle>Pro</CardTitle>
                      <CardDescription>For active investors who want deeper insights</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$23</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-success mt-1">Save $72 per year</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>All Basic features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>AI-powered market insights</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Unlimited watchlists</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Advanced technical analysis</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Real-time alerts</span>
                        </li>
                        <li className="flex items-start text-muted-foreground">
                          <X className="h-5 w-5 mr-2 flex-shrink-0" />
                          <span>Premium research reports</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Get Started</Button>
                    </CardFooter>
                  </Card>
                  
                  {/* Enterprise Plan Annual */}
                  <Card className="border">
                    <CardHeader>
                      <CardTitle>Enterprise</CardTitle>
                      <CardDescription>For professional traders and investment firms</CardDescription>
                      <div className="mt-4">
                        <span className="text-4xl font-bold">$79</span>
                        <span className="text-muted-foreground">/month</span>
                      </div>
                      <p className="text-sm text-success mt-1">Save $240 per year</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>All Pro features</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Premium research reports</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Dedicated account manager</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>API access</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>White-label options</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="h-5 w-5 text-success mr-2 flex-shrink-0" />
                          <span>Custom integrations</span>
                        </li>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">Contact Sales</Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            
            <div className="max-w-3xl mx-auto space-y-6">
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Can I change my plan later?</h3>
                <p className="text-muted-foreground">Yes, you can upgrade or downgrade your plan at any time. Changes to your subscription will be prorated.</p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Is there a free trial?</h3>
                <p className="text-muted-foreground">Yes, we offer a 14-day free trial on all plans so you can experience the full range of features before committing.</p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">What payment methods do you accept?</h3>
                <p className="text-muted-foreground">We accept all major credit cards, PayPal, and bank transfers for annual enterprise plans.</p>
              </div>
              
              <div className="bg-background rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-medium mb-2">Can I cancel my subscription?</h3>
                <p className="text-muted-foreground">You can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Pricing;
