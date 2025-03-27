
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import StockChart from '@/components/dashboard/StockChart';
import OrderPanel from '@/components/dashboard/OrderPanel';
import { 
  AreaChart, 
  ArrowDownRight, 
  ArrowUpRight, 
  BarChart3, 
  BookOpen, 
  BrainCircuit, 
  Building2, 
  Calendar, 
  ChevronRight, 
  Coins, 
  DollarSign, 
  Eye, 
  FilePieChart, 
  LineChart, 
  Newspaper, 
  PieChart, 
  Star, 
  TrendingUp, 
  Users 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { AreaChart as RechartsArea, Area, BarChart, Bar, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { cn } from '@/lib/utils';

// Mock data for the stock details
const stockDetails = {
  AAPL: {
    name: 'Apple Inc.',
    price: 190.42,
    change: 2.34,
    changePercent: 1.24,
    marketCap: '2.98T',
    volume: '61.23M',
    avgVolume: '57.81M',
    peRatio: 31.45,
    eps: 6.05,
    dividend: 0.92,
    dividendYield: 0.48,
    high52Week: 199.62,
    low52Week: 143.90,
    open: 188.14,
    previousClose: 188.08,
    description: 'Apple Inc. designs, manufactures, and markets smartphones, personal computers, tablets, wearables, and accessories worldwide. The company offers iPhone, a line of smartphones; Mac, a line of personal computers; iPad, a line of multi-purpose tablets; and wearables, home, and accessories comprising AirPods, Apple TV, Apple Watch, Beats products, and HomePod.',
    sector: 'Technology',
    industry: 'Consumer Electronics',
    employees: '164,000',
    ceo: 'Tim Cook',
    founded: '1976',
    headquarters: 'Cupertino, California',
    website: 'apple.com',
  },
  MSFT: {
    name: 'Microsoft Corporation',
    price: 380.89,
    change: 4.28,
    changePercent: 1.14,
    marketCap: '2.83T',
    volume: '23.56M',
    avgVolume: '24.13M',
    peRatio: 34.62,
    eps: 11.00,
    dividend: 2.72,
    dividendYield: 0.71,
    high52Week: 384.30,
    low52Week: 275.37,
    open: 377.04,
    previousClose: 376.61,
    description: 'Microsoft Corporation develops, licenses, and supports software, services, devices, and solutions worldwide. The company operates in three segments: Productivity and Business Processes, Intelligent Cloud, and More Personal Computing.',
    sector: 'Technology',
    industry: 'Software—Infrastructure',
    employees: '221,000',
    ceo: 'Satya Nadella',
    founded: '1975',
    headquarters: 'Redmond, Washington',
    website: 'microsoft.com',
  },
};

// Mock news data
const mockNews = [
  {
    id: 1,
    title: 'Apple Reports Record 2023 Revenue Despite Challenges',
    source: 'MarketWatch',
    time: '2 hours ago',
    image: 'https://via.placeholder.com/60',
    summary: 'Apple reported better-than-expected earnings for Q4, with services revenue reaching an all-time high.'
  },
  {
    id: 2,
    title: 'New iPhone Models Expected to Drive Growth in 2024',
    source: 'CNBC',
    time: '5 hours ago',
    image: 'https://via.placeholder.com/60',
    summary: 'Analysts predict strong sales for upcoming iPhone models with enhanced AI capabilities.'
  },
  {
    id: 3,
    title: 'Apple Expands Its Services Portfolio with New Offerings',
    source: 'Bloomberg',
    time: '1 day ago',
    image: 'https://via.placeholder.com/60',
    summary: 'New subscription services announced as Apple continues to diversify revenue streams beyond hardware.'
  },
];

// Mock AI insights data
const mockInsights = [
  {
    id: 1,
    title: 'Technical Analysis',
    content: 'AAPL is showing a bullish pattern with a golden cross forming on the 50-day and 200-day moving averages. Momentum indicators suggest potential for continued upward movement in the near term.',
    confidence: 82,
    trend: 'bullish'
  },
  {
    id: 2,
    title: 'Fundamental Analysis',
    content: 'Current P/E ratio is above 5-year average but justified by strong services growth and margin expansion. Free cash flow continues to exceed expectations, supporting shareholder returns.',
    confidence: 76,
    trend: 'neutral'
  },
  {
    id: 3,
    title: 'Market Sentiment',
    content: 'Institutional investors have increased positions by 2.3% in the last quarter. Social media sentiment is moderately positive with growing interest in AI capabilities.',
    confidence: 68,
    trend: 'bullish'
  },
];

// Mock financials data
const mockFinancialsQuarterly = [
  { quarter: 'Q4 2023', revenue: 119.6, profit: 33.9, eps: 2.18 },
  { quarter: 'Q3 2023', revenue: 81.8, profit: 19.9, eps: 1.26 },
  { quarter: 'Q2 2023', revenue: 94.8, profit: 24.2, eps: 1.52 },
  { quarter: 'Q1 2023', revenue: 117.2, profit: 30.0, eps: 1.88 },
];

const mockFinancialsAnnual = [
  { year: '2023', revenue: 383.3, profit: 96.9, eps: 6.14 },
  { year: '2022', revenue: 394.3, profit: 99.8, eps: 6.11 },
  { year: '2021', revenue: 365.8, profit: 94.7, eps: 5.61 },
  { year: '2020', revenue: 274.5, profit: 57.4, eps: 3.28 },
];

// Mock analyst ratings data
const mockAnalystRatings = {
  buy: 28,
  hold: 12,
  sell: 2,
  targetPrice: 210.75,
  currentPrice: 190.42,
  highTarget: 240.00,
  lowTarget: 175.00
};

const StockDetail: React.FC = () => {
  const { symbol = 'AAPL' } = useParams<{ symbol: string }>();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // If the stock doesn't exist in our mock data, default to AAPL
  const stock = stockDetails[symbol as keyof typeof stockDetails] || stockDetails.AAPL;
  const isPositive = stock.change >= 0;
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  // Calculate analyst rating consensus percentage
  const totalRatings = mockAnalystRatings.buy + mockAnalystRatings.hold + mockAnalystRatings.sell;
  const buyPercentage = (mockAnalystRatings.buy / totalRatings) * 100;
  const holdPercentage = (mockAnalystRatings.hold / totalRatings) * 100;
  const sellPercentage = (mockAnalystRatings.sell / totalRatings) * 100;
  
  const upside = ((mockAnalystRatings.targetPrice - mockAnalystRatings.currentPrice) / mockAnalystRatings.currentPrice) * 100;
  
  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto">
          {/* Stock Header */}
          <div className="bg-background py-4 px-6 border-b">
            <div className="container mx-auto">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h1 className="text-2xl font-bold">{symbol}</h1>
                    <span className="text-lg text-muted-foreground">{stock.name}</span>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <Star className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xl font-semibold">${stock.price.toFixed(2)}</span>
                    <span className={cn(
                      "flex items-center gap-1 text-sm",
                      isPositive ? "text-success" : "text-danger"
                    )}>
                      {isPositive ? 
                        <ArrowUpRight className="h-4 w-4" /> : 
                        <ArrowDownRight className="h-4 w-4" />
                      }
                      <span>
                        {isPositive ? "+" : ""}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                      </span>
                    </span>
                    <Badge variant="secondary" className="ml-2">
                      <Building2 className="h-3 w-3 mr-1" />
                      {stock.sector}
                    </Badge>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Eye className="h-4 w-4" />
                    <span>Add to Watchlist</span>
                  </Button>
                  <Button variant="secondary" size="sm" className="gap-1 text-success">
                    <ArrowUpRight className="h-4 w-4" />
                    <span>Buy</span>
                  </Button>
                  <Button variant="secondary" size="sm" className="gap-1 text-danger">
                    <ArrowDownRight className="h-4 w-4" />
                    <span>Sell</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stock Detail Content */}
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Chart Section */}
                <StockChart 
                  symbol={symbol} 
                  name={stock.name}
                  currentPrice={stock.price}
                  change={stock.change}
                  changePercent={stock.changePercent}
                />
                
                {/* Key Statistics */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <LineChart className="h-5 w-5 text-primary-blue" />
                      <CardTitle className="text-lg">Key Statistics</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                      <div>
                        <h3 className="text-sm font-medium mb-3">Valuation</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Market Cap</span>
                            <span className="text-sm font-medium">${stock.marketCap}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">P/E Ratio</span>
                            <span className="text-sm font-medium">{stock.peRatio}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">EPS</span>
                            <span className="text-sm font-medium">${stock.eps}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-3">Trading Info</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Open</span>
                            <span className="text-sm font-medium">${stock.open}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Previous Close</span>
                            <span className="text-sm font-medium">${stock.previousClose}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Volume</span>
                            <span className="text-sm font-medium">{stock.volume}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-3">Price History</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">52W High</span>
                            <span className="text-sm font-medium">${stock.high52Week}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">52W Low</span>
                            <span className="text-sm font-medium">${stock.low52Week}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Avg. Volume</span>
                            <span className="text-sm font-medium">{stock.avgVolume}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-sm font-medium mb-3">Dividends</h3>
                        <div className="space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Dividend</span>
                            <span className="text-sm font-medium">${stock.dividend}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Dividend Yield</span>
                            <span className="text-sm font-medium">{stock.dividendYield}%</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Ex-Dividend Date</span>
                            <span className="text-sm font-medium">Feb 9, 2024</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* About & Analyst Ratings Tabs */}
                <Card>
                  <Tabs defaultValue="about">
                    <CardHeader className="pb-0">
                      <TabsList className="w-full">
                        <TabsTrigger value="about" className="flex-1">About</TabsTrigger>
                        <TabsTrigger value="financials" className="flex-1">Financials</TabsTrigger>
                        <TabsTrigger value="analyst" className="flex-1">Analyst Ratings</TabsTrigger>
                      </TabsList>
                    </CardHeader>
                    
                    <TabsContent value="about">
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-lg font-medium mb-2">Company Profile</h3>
                            <p className="text-sm text-muted-foreground">{stock.description}</p>
                          </div>
                          
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-2">
                            <div>
                              <span className="text-xs text-muted-foreground block">CEO</span>
                              <span className="text-sm font-medium">{stock.ceo}</span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground block">Founded</span>
                              <span className="text-sm font-medium">{stock.founded}</span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground block">Headquarters</span>
                              <span className="text-sm font-medium">{stock.headquarters}</span>
                            </div>
                            <div>
                              <span className="text-xs text-muted-foreground block">Employees</span>
                              <span className="text-sm font-medium">{stock.employees}</span>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-2">Related News</h3>
                            <div className="space-y-4">
                              {mockNews.map((item) => (
                                <div key={item.id} className="flex gap-4">
                                  <div className="h-14 w-14 rounded-md bg-secondary flex-shrink-0"></div>
                                  <div>
                                    <h4 className="text-sm font-medium">{item.title}</h4>
                                    <div className="flex items-center gap-2 mt-1">
                                      <span className="text-xs text-muted-foreground">{item.source}</span>
                                      <span className="text-xs text-muted-foreground">•</span>
                                      <span className="text-xs text-muted-foreground">{item.time}</span>
                                    </div>
                                  </div>
                                </div>
                              ))}
                              
                              <Button variant="ghost" size="sm" className="w-full mt-2 text-xs">
                                View All News
                                <ChevronRight className="h-3 w-3 ml-1" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </TabsContent>
                    
                    <TabsContent value="financials">
                      <CardContent className="pt-6">
                        <Tabs defaultValue="quarterly">
                          <div className="flex justify-between items-center mb-4">
                            <h3 className="text-lg font-medium">Financial Performance</h3>
                            <TabsList>
                              <TabsTrigger value="quarterly" className="text-xs">Quarterly</TabsTrigger>
                              <TabsTrigger value="annual" className="text-xs">Annual</TabsTrigger>
                            </TabsList>
                          </div>
                          
                          <TabsContent value="quarterly">
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={mockFinancialsQuarterly}
                                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="quarter" />
                                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                  <Tooltip />
                                  <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue ($B)" />
                                  <Bar yAxisId="right" dataKey="profit" fill="#82ca9d" name="Profit ($B)" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                            
                            <div className="mt-6">
                              <h4 className="text-sm font-medium mb-3">Quarterly Results (in billions)</h4>
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-border">
                                  <thead>
                                    <tr>
                                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Period</th>
                                      <th className="px-4 py-2 text-right text-xs font-medium text-muted-foreground">Revenue</th>
                                      <th className="px-4 py-2 text-right text-xs font-medium text-muted-foreground">Profit</th>
                                      <th className="px-4 py-2 text-right text-xs font-medium text-muted-foreground">EPS</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-border">
                                    {mockFinancialsQuarterly.map((item) => (
                                      <tr key={item.quarter}>
                                        <td className="px-4 py-2 text-sm">{item.quarter}</td>
                                        <td className="px-4 py-2 text-sm text-right">${item.revenue.toFixed(1)}B</td>
                                        <td className="px-4 py-2 text-sm text-right">${item.profit.toFixed(1)}B</td>
                                        <td className="px-4 py-2 text-sm text-right">${item.eps.toFixed(2)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </TabsContent>
                          
                          <TabsContent value="annual">
                            <div className="h-64">
                              <ResponsiveContainer width="100%" height="100%">
                                <BarChart
                                  data={mockFinancialsAnnual}
                                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                                >
                                  <CartesianGrid strokeDasharray="3 3" />
                                  <XAxis dataKey="year" />
                                  <YAxis yAxisId="left" orientation="left" stroke="#8884d8" />
                                  <YAxis yAxisId="right" orientation="right" stroke="#82ca9d" />
                                  <Tooltip />
                                  <Bar yAxisId="left" dataKey="revenue" fill="#8884d8" name="Revenue ($B)" />
                                  <Bar yAxisId="right" dataKey="profit" fill="#82ca9d" name="Profit ($B)" />
                                </BarChart>
                              </ResponsiveContainer>
                            </div>
                            
                            <div className="mt-6">
                              <h4 className="text-sm font-medium mb-3">Annual Results (in billions)</h4>
                              <div className="overflow-x-auto">
                                <table className="min-w-full divide-y divide-border">
                                  <thead>
                                    <tr>
                                      <th className="px-4 py-2 text-left text-xs font-medium text-muted-foreground">Year</th>
                                      <th className="px-4 py-2 text-right text-xs font-medium text-muted-foreground">Revenue</th>
                                      <th className="px-4 py-2 text-right text-xs font-medium text-muted-foreground">Profit</th>
                                      <th className="px-4 py-2 text-right text-xs font-medium text-muted-foreground">EPS</th>
                                    </tr>
                                  </thead>
                                  <tbody className="divide-y divide-border">
                                    {mockFinancialsAnnual.map((item) => (
                                      <tr key={item.year}>
                                        <td className="px-4 py-2 text-sm">{item.year}</td>
                                        <td className="px-4 py-2 text-sm text-right">${item.revenue.toFixed(1)}B</td>
                                        <td className="px-4 py-2 text-sm text-right">${item.profit.toFixed(1)}B</td>
                                        <td className="px-4 py-2 text-sm text-right">${item.eps.toFixed(2)}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </TabsContent>
                        </Tabs>
                      </CardContent>
                    </TabsContent>
                    
                    <TabsContent value="analyst">
                      <CardContent className="pt-6">
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <h3 className="text-lg font-medium mb-4">Consensus Rating</h3>
                              <div className="flex gap-4 items-end mb-2">
                                <div className="flex">
                                  <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold">{mockAnalystRatings.buy}</span>
                                    <span className="text-xs text-muted-foreground">Buy</span>
                                  </div>
                                  <Separator orientation="vertical" className="mx-3 h-10" />
                                  <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold">{mockAnalystRatings.hold}</span>
                                    <span className="text-xs text-muted-foreground">Hold</span>
                                  </div>
                                  <Separator orientation="vertical" className="mx-3 h-10" />
                                  <div className="flex flex-col items-center">
                                    <span className="text-3xl font-bold">{mockAnalystRatings.sell}</span>
                                    <span className="text-xs text-muted-foreground">Sell</span>
                                  </div>
                                </div>
                                <div className="ml-2">
                                  <Badge variant="outline" className="bg-success/10 text-success border-success/20">
                                    Buy
                                  </Badge>
                                </div>
                              </div>
                              
                              <div className="space-y-2 mt-4">
                                <div>
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs">Buy</span>
                                    <span className="text-xs">{buyPercentage.toFixed(1)}%</span>
                                  </div>
                                  <Progress value={buyPercentage} className="h-2" 
                                    style={{ backgroundColor: 'var(--success)' }} />
                                </div>
                                <div>
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs">Hold</span>
                                    <span className="text-xs">{holdPercentage.toFixed(1)}%</span>
                                  </div>
                                  <Progress value={holdPercentage} className="h-2"
                                    style={{ backgroundColor: 'var(--warning)' }} />
                                </div>
                                <div>
                                  <div className="flex justify-between items-center mb-1">
                                    <span className="text-xs">Sell</span>
                                    <span className="text-xs">{sellPercentage.toFixed(1)}%</span>
                                  </div>
                                  <Progress value={sellPercentage} className="h-2"
                                    style={{ backgroundColor: 'var(--danger)' }} />
                                </div>
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-lg font-medium mb-4">Price Target</h3>
                              <div className="flex items-end gap-3">
                                <div>
                                  <div className="text-3xl font-bold">${mockAnalystRatings.targetPrice.toFixed(2)}</div>
                                  <div className="text-xs text-muted-foreground">Average Target</div>
                                </div>
                                <div className={cn(
                                  "text-sm font-medium flex items-center",
                                  upside >= 0 ? "text-success" : "text-danger"
                                )}>
                                  {upside >= 0 ? 
                                    <ArrowUpRight className="h-4 w-4 mr-1" /> : 
                                    <ArrowDownRight className="h-4 w-4 mr-1" />
                                  }
                                  <span>
                                    {upside >= 0 ? "+" : ""}{upside.toFixed(2)}% upside
                                  </span>
                                </div>
                              </div>
                              
                              <div className="mt-6 space-y-3">
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">High Target</span>
                                  <span className="text-sm font-medium">${mockAnalystRatings.highTarget.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Average Target</span>
                                  <span className="text-sm font-medium">${mockAnalystRatings.targetPrice.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Low Target</span>
                                  <span className="text-sm font-medium">${mockAnalystRatings.lowTarget.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between items-center">
                                  <span className="text-sm">Current Price</span>
                                  <span className="text-sm font-medium">${mockAnalystRatings.currentPrice.toFixed(2)}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div>
                            <h3 className="text-lg font-medium mb-3">Recent Analyst Actions</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                <div>
                                  <div className="text-sm font-medium">Morgan Stanley</div>
                                  <div className="text-xs text-muted-foreground">Feb 12, 2024</div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center">
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20 mr-2">Buy</Badge>
                                    <span className="text-sm font-medium">$220</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">Maintained</div>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                <div>
                                  <div className="text-sm font-medium">JPMorgan</div>
                                  <div className="text-xs text-muted-foreground">Feb 2, 2024</div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center">
                                    <Badge variant="outline" className="bg-success/10 text-success border-success/20 mr-2">Buy</Badge>
                                    <span className="text-sm font-medium">$225</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">Raised from $210</div>
                                </div>
                              </div>
                              
                              <div className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                                <div>
                                  <div className="text-sm font-medium">Goldman Sachs</div>
                                  <div className="text-xs text-muted-foreground">Jan 25, 2024</div>
                                </div>
                                <div className="text-right">
                                  <div className="flex items-center">
                                    <Badge variant="outline" className="mr-2">Hold</Badge>
                                    <span className="text-sm font-medium">$195</span>
                                  </div>
                                  <div className="text-xs text-muted-foreground">Maintained</div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </TabsContent>
                  </Tabs>
                </Card>
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {/* Order Panel */}
                <OrderPanel defaultSymbol={symbol} />
                
                {/* AI Insights */}
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <BrainCircuit className="h-5 w-5 text-primary-blue" />
                      <CardTitle className="text-lg">AI Analysis</CardTitle>
                    </div>
                    <CardDescription>
                      AI-powered insights based on technical and fundamental analysis
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {mockInsights.map((insight) => (
                      <Card key={insight.id}>
                        <CardHeader className="py-3">
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-base">{insight.title}</CardTitle>
                            <Badge 
                              variant="outline" 
                              className={cn(
                                insight.trend === 'bullish' ? 'bg-success/10 text-success border-success/20' :
                                insight.trend === 'bearish' ? 'bg-danger/10 text-danger border-danger/20' :
                                'bg-warning/10 text-warning border-warning/20'
                              )}
                            >
                              {insight.trend}
                            </Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="py-2">
                          <p className="text-sm text-muted-foreground">{insight.content}</p>
                          <div className="mt-3 flex items-center">
                            <div className="text-xs font-medium">Confidence:</div>
                            <div className="ml-2 w-full max-w-24">
                              <Progress 
                                value={insight.confidence} 
                                className="h-1.5"
                                style={{ 
                                  backgroundColor: insight.confidence > 70 ? 
                                    'var(--success)' : insight.confidence > 50 ? 
                                    'var(--warning)' : 'var(--danger)'
                                }}
                              />
                            </div>
                            <div className="ml-2 text-xs">
                              {insight.confidence}%
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default StockDetail;
