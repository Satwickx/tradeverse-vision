
import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  BarChart, 
  DollarSign, 
  PercentIcon, 
  PieChart, 
  TrendingUp 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { cn } from '@/lib/utils';
import { PieChart as ReChartPie, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from 'recharts';

// Mock portfolio data
const mockHoldings = [
  { id: 1, symbol: 'AAPL', name: 'Apple Inc.', quantity: 15, price: 190.42, avgCost: 175.28, marketValue: 2856.30, returnValue: 227.10, returnPercent: 8.64 },
  { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', quantity: 8, price: 380.89, avgCost: 350.75, marketValue: 3047.12, returnValue: 241.12, returnPercent: 8.59 },
  { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 12, price: 142.56, avgCost: 138.40, marketValue: 1710.72, returnValue: 49.92, returnPercent: 3.01 },
  { id: 4, symbol: 'AMZN', name: 'Amazon.com, Inc.', quantity: 10, price: 174.42, avgCost: 165.80, marketValue: 1744.20, returnValue: 86.20, returnPercent: 5.20 },
  { id: 5, symbol: 'NVDA', name: 'NVIDIA Corporation', quantity: 5, price: 481.77, avgCost: 420.15, marketValue: 2408.85, returnValue: 308.10, returnPercent: 14.67 },
];

// Portfolio summary
const portfolioSummary = {
  totalValue: 11767.19,
  dayChange: 243.56,
  dayChangePercent: 2.11,
  totalReturn: 912.44,
  totalReturnPercent: 8.40,
};

// Asset allocation data for pie chart
const assetAllocation = [
  { name: 'Technology', value: 72.5, color: '#3B82F6' },
  { name: 'Consumer Cyclical', value: 14.8, color: '#10B981' },
  { name: 'Communication', value: 8.3, color: '#8B5CF6' },
  { name: 'Healthcare', value: 3.2, color: '#F59E0B' },
  { name: 'Other', value: 1.2, color: '#6B7280' },
];

const COLORS = ['#3B82F6', '#10B981', '#8B5CF6', '#F59E0B', '#6B7280'];

interface PortfolioProps {
  className?: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ className }) => {
  const [view, setView] = useState('holdings');
  
  const totalMarketValue = mockHoldings.reduce((sum, holding) => sum + holding.marketValue, 0);
  
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <PieChart className="h-5 w-5 text-primary-blue" />
            <CardTitle className="text-lg">Portfolio</CardTitle>
          </div>
          <Tabs defaultValue="holdings" className="w-auto" onValueChange={setView}>
            <TabsList className="grid grid-cols-2 h-8">
              <TabsTrigger value="holdings" className="text-xs px-3">Holdings</TabsTrigger>
              <TabsTrigger value="allocation" className="text-xs px-3">Allocation</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pt-2">
          <div>
            <div className="text-sm text-muted-foreground">Total Value</div>
            <div className="text-2xl font-semibold mt-1">${portfolioSummary.totalValue.toFixed(2)}</div>
            <div className={cn(
              "flex items-center gap-1 text-sm",
              portfolioSummary.dayChange >= 0 ? "text-success" : "text-danger"
            )}>
              {portfolioSummary.dayChange >= 0 ? 
                <ArrowUpRight className="h-3.5 w-3.5" /> : 
                <ArrowDownRight className="h-3.5 w-3.5" />
              }
              <span>
                {portfolioSummary.dayChange >= 0 ? "+" : ""}${portfolioSummary.dayChange.toFixed(2)} ({portfolioSummary.dayChangePercent.toFixed(2)}%) today
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex items-center px-3 py-2 bg-secondary rounded-lg">
              <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center mr-3">
                <DollarSign className="h-4 w-4 text-success" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Total Return</div>
                <div className="font-medium text-success">+${portfolioSummary.totalReturn.toFixed(2)}</div>
              </div>
            </div>
            <div className="flex items-center px-3 py-2 bg-secondary rounded-lg">
              <div className="h-8 w-8 rounded-full bg-success/20 flex items-center justify-center mr-3">
                <PercentIcon className="h-4 w-4 text-success" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">Return %</div>
                <div className="font-medium text-success">+{portfolioSummary.totalReturnPercent.toFixed(2)}%</div>
              </div>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-0">
        {view === 'holdings' ? (
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead>Symbol</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                  <TableHead className="text-right">Avg Cost</TableHead>
                  <TableHead className="text-right">Market Value</TableHead>
                  <TableHead className="text-right">Return</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {mockHoldings.map((holding) => (
                  <TableRow key={holding.id}>
                    <TableCell>
                      <div className="font-medium">{holding.symbol}</div>
                      <div className="text-xs text-muted-foreground">{holding.name}</div>
                    </TableCell>
                    <TableCell>{holding.quantity}</TableCell>
                    <TableCell className="text-right">${holding.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${holding.avgCost.toFixed(2)}</TableCell>
                    <TableCell className="text-right">${holding.marketValue.toFixed(2)}</TableCell>
                    <TableCell>
                      <div className="flex flex-col items-end">
                        <div className={cn(
                          "flex items-center gap-1",
                          holding.returnValue >= 0 ? "text-success" : "text-danger"
                        )}>
                          {holding.returnValue >= 0 ? 
                            <ArrowUpRight className="h-3.5 w-3.5" /> : 
                            <ArrowDownRight className="h-3.5 w-3.5" />
                          }
                          <span>
                            {holding.returnValue >= 0 ? "+" : ""}${holding.returnValue.toFixed(2)}
                          </span>
                        </div>
                        <div className={cn(
                          "text-xs",
                          holding.returnPercent >= 0 ? "text-success" : "text-danger"
                        )}>
                          {holding.returnPercent >= 0 ? "+" : ""}{holding.returnPercent.toFixed(2)}%
                        </div>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        ) : (
          <div className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ReChartPie>
                    <Pie
                      data={assetAllocation}
                      cx="50%"
                      cy="50%"
                      innerRadius={70}
                      outerRadius={90}
                      paddingAngle={2}
                      dataKey="value"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                      labelLine={false}
                    >
                      {assetAllocation.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip 
                      formatter={(value: number) => [`${value}%`, 'Allocation']}
                    />
                    <Legend />
                  </ReChartPie>
                </ResponsiveContainer>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium mb-2">Portfolio Allocation</h3>
                  <p className="text-sm text-muted-foreground">
                    Your portfolio is primarily weighted towards technology stocks, which comprise 72.5% of your holdings.
                    Consider diversifying into other sectors to reduce concentration risk.
                  </p>
                </div>
                <div>
                  <h3 className="text-sm font-medium mb-2">Sector Performance</h3>
                  <div className="space-y-2">
                    {assetAllocation.map((sector) => (
                      <div key={sector.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="h-3 w-3 rounded-full" style={{ backgroundColor: sector.color }}></div>
                          <span className="text-sm">{sector.name}</span>
                        </div>
                        <div className="text-sm font-medium">{sector.value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-2">
                  <div className="flex gap-2 items-center text-info">
                    <BarChart className="h-4 w-4" />
                    <span className="text-sm font-medium">Rebalance Recommendation</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">
                    Consider increasing exposure to Healthcare and Consumer Cyclical sectors for better diversification.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Portfolio;
