
import React, { useState } from 'react';
import { 
  ArrowDownRight, 
  ArrowUpRight, 
  Eye, 
  MoreHorizontal, 
  Plus, 
  Search, 
  Trash2 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

// Mock watchlist data
const mockWatchlist = [
  { id: 1, symbol: 'AAPL', name: 'Apple Inc.', price: 190.42, change: 2.34, changePercent: 1.24 },
  { id: 2, symbol: 'MSFT', name: 'Microsoft Corporation', price: 380.89, change: 4.28, changePercent: 1.14 },
  { id: 3, symbol: 'GOOGL', name: 'Alphabet Inc.', price: 142.56, change: -1.25, changePercent: -0.87 },
  { id: 4, symbol: 'AMZN', name: 'Amazon.com, Inc.', price: 174.42, change: 1.87, changePercent: 1.08 },
  { id: 5, symbol: 'TSLA', name: 'Tesla, Inc.', price: 223.15, change: -5.23, changePercent: -2.29 },
  { id: 6, symbol: 'NVDA', name: 'NVIDIA Corporation', price: 481.77, change: 12.34, changePercent: 2.63 },
];

interface WatchlistProps {
  className?: string;
}

const Watchlist: React.FC<WatchlistProps> = ({ className }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlist, setWatchlist] = useState(mockWatchlist);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [newSymbol, setNewSymbol] = useState('');
  
  const filteredWatchlist = watchlist.filter(item => 
    item.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const handleRemoveStock = (id: number) => {
    setWatchlist(prevList => prevList.filter(item => item.id !== id));
  };
  
  const handleAddStock = () => {
    if (newSymbol) {
      // In a real app, you would validate the symbol and fetch company data
      const mockNewStock = {
        id: watchlist.length + 1,
        symbol: newSymbol.toUpperCase(),
        name: `${newSymbol.toUpperCase()} Corporation`, // This would come from an API
        price: Math.random() * 1000,
        change: Math.random() * 10 - 5,
        changePercent: Math.random() * 4 - 2
      };
      
      setWatchlist(prev => [...prev, mockNewStock]);
      setNewSymbol('');
      setIsAddDialogOpen(false);
    }
  };
  
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-primary-blue" />
            <CardTitle className="text-lg">Watchlist</CardTitle>
          </div>
          <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
            <DialogTrigger asChild>
              <Button size="sm" className="text-xs gap-1">
                <Plus className="h-3.5 w-3.5" />
                <span>Add</span>
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Add to Watchlist</DialogTitle>
                <DialogDescription>
                  Enter a stock symbol to add it to your watchlist.
                </DialogDescription>
              </DialogHeader>
              <div className="py-4">
                <Input
                  placeholder="Enter stock symbol (e.g., AAPL)"
                  value={newSymbol}
                  onChange={(e) => setNewSymbol(e.target.value)}
                  className="w-full"
                />
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
                <Button onClick={handleAddStock}>Add to Watchlist</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        <div className="flex items-center relative pt-2">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
          <Input 
            placeholder="Search symbols or companies" 
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="hover:bg-transparent">
                <TableHead className="w-24">Symbol</TableHead>
                <TableHead>Name</TableHead>
                <TableHead className="text-right">Price</TableHead>
                <TableHead className="text-right">Change</TableHead>
                <TableHead className="w-10"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredWatchlist.length > 0 ? (
                filteredWatchlist.map((stock) => (
                  <TableRow key={stock.id} className="group">
                    <TableCell className="font-medium">
                      <Link to={`/stocks/${stock.symbol}`} className="hover:text-primary-blue transition-colors">
                        {stock.symbol}
                      </Link>
                    </TableCell>
                    <TableCell className="text-muted-foreground max-w-[200px] truncate">
                      {stock.name}
                    </TableCell>
                    <TableCell className="text-right">${stock.price.toFixed(2)}</TableCell>
                    <TableCell className="text-right">
                      <div className={cn(
                        "flex items-center justify-end gap-1",
                        stock.change >= 0 ? "text-success" : "text-danger"
                      )}>
                        {stock.change >= 0 ? 
                          <ArrowUpRight className="h-3.5 w-3.5" /> : 
                          <ArrowDownRight className="h-3.5 w-3.5" />
                        }
                        <span>
                          {stock.change >= 0 ? "+" : ""}{stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-7 w-7 opacity-0 group-hover:opacity-100 transition-opacity focus:opacity-100">
                            <MoreHorizontal className="h-4 w-4" />
                            <span className="sr-only">More</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end">
                          <DropdownMenuItem>View Details</DropdownMenuItem>
                          <DropdownMenuItem>Buy</DropdownMenuItem>
                          <DropdownMenuItem>Set Alert</DropdownMenuItem>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem 
                            className="text-destructive focus:text-destructive"
                            onClick={() => handleRemoveStock(stock.id)}
                          >
                            <Trash2 className="h-4 w-4 mr-2" />
                            <span>Remove</span>
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} className="h-24 text-center">
                    {searchTerm ? 'No stocks match your search' : 'Your watchlist is empty'}
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default Watchlist;
