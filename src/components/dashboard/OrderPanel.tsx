
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowDown, ArrowUp, BarChart3, Calculator, Check, Clock4, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface OrderPanelProps {
  className?: string;
  defaultSymbol?: string;
}

const OrderPanel: React.FC<OrderPanelProps> = ({ 
  className,
  defaultSymbol = 'AAPL' 
}) => {
  const [orderType, setOrderType] = useState('market');
  const [symbol, setSymbol] = useState(defaultSymbol);
  const [quantity, setQuantity] = useState('1');
  const [price, setPrice] = useState('');
  const [orderTab, setOrderTab] = useState('buy');
  
  // Mock data for the current stock price
  const currentPrice = 190.42;
  const estimatedTotal = currentPrice * Number(quantity);
  
  // Sample stock options for the dropdown
  const stocks = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'AMZN', name: 'Amazon.com, Inc.' },
    { symbol: 'TSLA', name: 'Tesla, Inc.' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation' },
  ];
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Only allow numbers
    const value = e.target.value.replace(/[^0-9]/g, '');
    setQuantity(value);
  };
  
  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Allow only numbers and a single decimal point
    const value = e.target.value.replace(/[^0-9.]/g, '');
    if (value === '.' || value === '') {
      setPrice(value);
      return;
    }
    
    // Ensure only one decimal point
    const parts = value.split('.');
    if (parts.length > 2) {
      return;
    }
    
    // Limit decimal places to 2
    if (parts.length === 2 && parts[1].length > 2) {
      return;
    }
    
    setPrice(value);
  };
  
  return (
    <Card className={cn("", className)}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-5 w-5 text-primary-blue" />
          <CardTitle className="text-lg">Place Order</CardTitle>
        </div>
        <CardDescription>
          Buy or sell stocks with advanced order options
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="buy" onValueChange={setOrderTab}>
          <TabsList className="grid grid-cols-2 mb-4">
            <TabsTrigger value="buy" className="flex items-center gap-1">
              <ArrowDown className="h-3.5 w-3.5 text-success" />
              Buy
            </TabsTrigger>
            <TabsTrigger value="sell" className="flex items-center gap-1">
              <ArrowUp className="h-3.5 w-3.5 text-danger" />
              Sell
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="buy" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="symbol">Symbol</Label>
              <Select defaultValue={symbol} onValueChange={setSymbol}>
                <SelectTrigger id="symbol">
                  <SelectValue placeholder="Select stock" />
                </SelectTrigger>
                <SelectContent>
                  {stocks.map((stock) => (
                    <SelectItem key={stock.symbol} value={stock.symbol}>
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{stock.symbol}</span>
                        <span className="text-muted-foreground text-xs">- {stock.name}</span>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input 
                  id="quantity" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  placeholder="Enter quantity"
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="price">Market Price</Label>
                  <span className="text-xs text-muted-foreground">
                    ${currentPrice.toFixed(2)}
                  </span>
                </div>
                <div className="relative">
                  <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                    <span className="text-muted-foreground">$</span>
                  </div>
                  <Input 
                    id="price" 
                    value={orderType === 'market' ? currentPrice.toFixed(2) : price} 
                    onChange={handlePriceChange}
                    className="pl-7"
                    disabled={orderType === 'market'}
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-2">
              <Label>Order Type</Label>
              <RadioGroup defaultValue="market" onValueChange={setOrderType} className="flex">
                <div className="flex items-center space-x-2 mr-6">
                  <RadioGroupItem value="market" id="market" />
                  <Label htmlFor="market" className="cursor-pointer text-sm">Market</Label>
                </div>
                <div className="flex items-center space-x-2 mr-6">
                  <RadioGroupItem value="limit" id="limit" />
                  <Label htmlFor="limit" className="cursor-pointer text-sm">Limit</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="stop" id="stop" />
                  <Label htmlFor="stop" className="cursor-pointer text-sm">Stop</Label>
                </div>
              </RadioGroup>
            </div>
            
            <div className="pt-4 border-t">
              <div className="flex justify-between mb-1.5">
                <span className="text-sm">Estimated Total</span>
                <span className="font-medium">${estimatedTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-xs text-muted-foreground">
                <span>Commission</span>
                <span>$0.00</span>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="sell" className="space-y-4">
            {/* The sell tab would be similar to the buy tab, 
                but with adjustments for selling stocks. Since it's
                largely identical, I'm omitting the duplicate code. */}
            <div className="h-48 flex items-center justify-center text-sm text-muted-foreground">
              Sell order interface would go here, similar to the buy interface.
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter className="flex flex-col gap-3">
        <Button 
          className={cn(
            "w-full",
            orderTab === 'buy' ? "bg-success hover:bg-success/90" : "bg-danger hover:bg-danger/90"
          )}
        >
          {orderTab === 'buy' ? (
            <>
              <ArrowDown className="h-4 w-4 mr-2" />
              Buy {symbol}
            </>
          ) : (
            <>
              <ArrowUp className="h-4 w-4 mr-2" />
              Sell {symbol}
            </>
          )}
        </Button>
        
        <div className="flex gap-2 self-stretch">
          <Button variant="outline" size="sm" className="flex-1 text-xs gap-1">
            <Calculator className="h-3.5 w-3.5" />
            <span>Calculator</span>
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs gap-1">
            <BarChart3 className="h-3.5 w-3.5" />
            <span>Analysis</span>
          </Button>
          <Button variant="outline" size="sm" className="flex-1 text-xs gap-1">
            <Clock4 className="h-3.5 w-3.5" />
            <span>Schedule</span>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default OrderPanel;
