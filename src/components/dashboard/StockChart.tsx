
import React, { useState } from 'react';
import { 
  Area, 
  AreaChart, 
  CartesianGrid, 
  ResponsiveContainer, 
  Tooltip, 
  XAxis, 
  YAxis 
} from 'recharts';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data
const generateMockData = (trend: 'up' | 'down' | 'volatile', points: number = 24) => {
  const data = [];
  let baseValue = 400;
  
  if (trend === 'up') {
    for (let i = 0; i < points; i++) {
      baseValue += Math.random() * 20 - 5; // More positive than negative
      data.push({
        time: `${i}:00`,
        value: baseValue
      });
    }
  } else if (trend === 'down') {
    for (let i = 0; i < points; i++) {
      baseValue -= Math.random() * 20 - 5; // More negative than positive
      data.push({
        time: `${i}:00`,
        value: baseValue
      });
    }
  } else { // volatile
    for (let i = 0; i < points; i++) {
      baseValue += Math.random() * 40 - 20; // Equally positive and negative
      data.push({
        time: `${i}:00`,
        value: baseValue
      });
    }
  }
  
  return data;
};

const dailyData = generateMockData('up', 24);
const weeklyData = generateMockData('volatile', 7);
const monthlyData = generateMockData('down', 30);
const yearlyData = generateMockData('up', 12);

interface StockChartProps {
  symbol?: string;
  name?: string;
  currentPrice?: number;
  change?: number;
  changePercent?: number;
  className?: string;
}

const StockChart: React.FC<StockChartProps> = ({ 
  symbol = 'AAPL', 
  name = 'Apple Inc.',
  currentPrice = 190.42,
  change = 2.34,
  changePercent = 1.24,
  className
}) => {
  const [timeframe, setTimeframe] = useState('1D');
  
  const getChartData = () => {
    switch (timeframe) {
      case '1D': return dailyData;
      case '1W': return weeklyData;
      case '1M': return monthlyData;
      case '1Y': return yearlyData;
      default: return dailyData;
    }
  };
  
  const isPositive = change >= 0;
  const chartData = getChartData();
  const chartColor = isPositive ? 'rgba(16, 185, 129, 0.7)' : 'rgba(239, 68, 68, 0.7)';
  
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="flex items-center gap-2">
              {symbol}
              <span className="text-sm font-normal text-muted-foreground">{name}</span>
            </CardTitle>
            <CardDescription className="flex mt-1 items-center gap-1.5">
              <span className="text-xl font-semibold text-foreground">${currentPrice.toFixed(2)}</span>
              <span className={cn(
                "flex items-center text-sm", 
                isPositive ? "text-success" : "text-danger"
              )}>
                {isPositive ? <ArrowUpRight className="h-3.5 w-3.5" /> : <ArrowDownRight className="h-3.5 w-3.5" />}
                {isPositive ? "+" : ""}{change.toFixed(2)} ({changePercent.toFixed(2)}%)
              </span>
            </CardDescription>
          </div>
          
          <Tabs defaultValue="1D" className="w-auto" onValueChange={setTimeframe}>
            <TabsList className="grid grid-cols-4 h-8">
              <TabsTrigger value="1D" className="text-xs px-2.5">1D</TabsTrigger>
              <TabsTrigger value="1W" className="text-xs px-2.5">1W</TabsTrigger>
              <TabsTrigger value="1M" className="text-xs px-2.5">1M</TabsTrigger>
              <TabsTrigger value="1Y" className="text-xs px-2.5">1Y</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </CardHeader>
      
      <CardContent className="p-0 pt-2 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor={chartColor} stopOpacity={0.8} />
                <stop offset="95%" stopColor={chartColor} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="rgba(0,0,0,0.1)" />
            <XAxis 
              dataKey="time" 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 10 }} 
              tickMargin={8}
              minTickGap={15}
            />
            <YAxis 
              domain={['auto', 'auto']} 
              axisLine={false} 
              tickLine={false}
              tick={{ fontSize: 10 }} 
              tickMargin={8}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip 
              contentStyle={{ 
                borderRadius: '8px', 
                border: '1px solid rgba(0,0,0,0.1)',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              formatter={(value: number) => [`$${value.toFixed(2)}`, 'Price']}
              labelFormatter={(label) => `Time: ${label}`}
            />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke={isPositive ? 'rgb(16, 185, 129)' : 'rgb(239, 68, 68)'} 
              fillOpacity={1}
              fill="url(#colorValue)" 
              animationDuration={500}
              strokeWidth={2}
            />
          </AreaChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StockChart;
