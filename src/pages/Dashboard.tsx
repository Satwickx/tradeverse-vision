
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import Footer from '@/components/layout/Footer';
import StockChart from '@/components/dashboard/StockChart';
import MarketInsights from '@/components/dashboard/MarketInsights';
import Watchlist from '@/components/dashboard/Watchlist';
import Portfolio from '@/components/dashboard/Portfolio';
import OrderPanel from '@/components/dashboard/OrderPanel';
import { 
  Activity, 
  ArrowDownRight, 
  ArrowUpRight, 
  BarChart4, 
  Bell, 
  Calendar, 
  Info, 
  Line, 
  LineChart, 
  Menu, 
  Plus 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';

// Market indices mock data
const marketIndices = [
  { id: 1, name: 'S&P 500', symbol: 'SPX', value: 5,021.84, change: 18.36, changePercent: 0.37 },
  { id: 2, name: 'Nasdaq', symbol: 'IXIC', value: 15,990.66, change: 54.83, changePercent: 0.34 },
  { id: 3, name: 'Dow Jones', symbol: 'DJI', value: 38,996.39, change: 125.69, changePercent: 0.32 },
  { id: 4, name: 'Russell 2000', symbol: 'RUT', value: 2,027.56, change: -8.32, changePercent: -0.41 },
];

const Dashboard: React.FC = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };
  
  return (
    <div className="h-screen flex flex-col bg-background">
      <Navbar />
      
      <div className="flex flex-1 overflow-hidden">
        <Sidebar collapsed={sidebarCollapsed} onToggle={toggleSidebar} />
        
        <main className="flex-1 overflow-y-auto">
          {/* Dashboard Header */}
          <div className="bg-background py-4 px-6 border-b">
            <div className="container mx-auto">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl font-bold">Dashboard</h1>
                  <p className="text-muted-foreground">
                    Welcome back to MarketFlow. Here's your market overview.
                  </p>
                </div>
                
                <div className="hidden md:flex items-center gap-3">
                  <Button variant="outline" size="sm" className="gap-1">
                    <Bell className="h-4 w-4" />
                    <span>Alerts</span>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>Earnings Calendar</span>
                  </Button>
                  <Button size="sm" className="gap-1">
                    <Plus className="h-4 w-4" />
                    <span>New Order</span>
                  </Button>
                </div>
                
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
          
          {/* Market Indices */}
          <div className="bg-secondary/50 border-b">
            <div className="container mx-auto py-2 px-6">
              <div className="flex items-center space-x-6 overflow-x-auto scrollbar-none">
                <div className="flex items-center gap-1 text-sm">
                  <Activity className="h-4 w-4 text-primary-blue" />
                  <span className="font-medium">Market</span>
                </div>
                {marketIndices.map((index) => (
                  <div key={index.id} className="flex items-center gap-2 whitespace-nowrap py-2">
                    <div>
                      <div className="text-sm font-medium">{index.name}</div>
                      <div className="text-xs text-muted-foreground">{index.symbol}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{index.value.toFixed(2)}</div>
                      <div className={cn(
                        "flex items-center text-xs",
                        index.change >= 0 ? "text-success" : "text-danger"
                      )}>
                        {index.change >= 0 ? 
                          <ArrowUpRight className="h-3 w-3 flex-shrink-0" /> : 
                          <ArrowDownRight className="h-3 w-3 flex-shrink-0" />
                        }
                        <span>
                          {index.change >= 0 ? "+" : ""}{index.change.toFixed(2)} ({index.changePercent.toFixed(2)}%)
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Main Dashboard Content */}
          <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Left Column */}
              <div className="lg:col-span-2 space-y-6">
                {/* Chart Section */}
                <StockChart />
                
                {/* Portfolio Section */}
                <Portfolio />
                
                {/* Watchlist */}
                <Watchlist />
              </div>
              
              {/* Right Column */}
              <div className="space-y-6">
                {/* Order Panel */}
                <OrderPanel />
                
                {/* AI Insights */}
                <MarketInsights />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
