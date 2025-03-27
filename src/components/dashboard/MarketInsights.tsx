
import React from 'react';
import { 
  AlertTriangle, 
  ArrowDown, 
  ArrowUp, 
  BrainCircuit, 
  ChevronRight, 
  Lightbulb, 
  Zap 
} from 'lucide-react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Mock insights data
const mockInsights = [
  {
    id: 1,
    type: 'opportunity',
    title: 'NVDA showing bullish patterns',
    description: 'Technical indicators suggest potential upward movement based on recent volume patterns and price action.',
    confidence: 85,
    timestamp: '3 hours ago'
  },
  {
    id: 2,
    type: 'risk',
    title: 'TSLA potential resistance ahead',
    description: 'Approaching key resistance level at $242. Consider setting stop losses if you hold a position.',
    confidence: 73,
    timestamp: '5 hours ago'
  },
  {
    id: 3,
    type: 'news',
    title: 'AAPL earnings beat expectations',
    description: 'Recent quarterly results exceeded analyst expectations by 12%. Historical patterns show 2-3 day price impacts.',
    confidence: 91,
    timestamp: '1 day ago'
  }
];

interface InsightCardProps {
  insight: {
    id: number;
    type: string;
    title: string;
    description: string;
    confidence: number;
    timestamp: string;
  };
}

const InsightCard: React.FC<InsightCardProps> = ({ insight }) => {
  // Determine icon based on insight type
  const getIcon = () => {
    switch (insight.type) {
      case 'opportunity':
        return <ArrowUp className="h-4 w-4 text-success" />;
      case 'risk':
        return <AlertTriangle className="h-4 w-4 text-warning" />;
      case 'news':
        return <Zap className="h-4 w-4 text-info" />;
      default:
        return <Lightbulb className="h-4 w-4 text-info" />;
    }
  };
  
  // Determine badge color based on insight type
  const getBadgeVariant = () => {
    switch (insight.type) {
      case 'opportunity':
        return 'success';
      case 'risk':
        return 'warning';
      case 'news':
        return 'default';
      default:
        return 'secondary';
    }
  };
  
  return (
    <Card className="hover-scale">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <Badge variant={getBadgeVariant() as any} className="capitalize flex items-center gap-1">
            {getIcon()}
            {insight.type}
          </Badge>
          <div className="text-xs text-muted-foreground">{insight.timestamp}</div>
        </div>
        <CardTitle className="text-base mt-2">{insight.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-sm">
          {insight.description}
        </CardDescription>
        <div className="mt-3 flex items-center">
          <div className="text-xs font-medium">AI Confidence:</div>
          <div className="ml-2 h-2 bg-secondary rounded-full flex-1 overflow-hidden">
            <div 
              className={cn(
                "h-full rounded-full",
                insight.confidence > 80 ? "bg-success" : 
                insight.confidence > 60 ? "bg-info" : "bg-warning"
              )}
              style={{ width: `${insight.confidence}%` }}
            />
          </div>
          <div className="ml-2 text-xs font-medium">{insight.confidence}%</div>
        </div>
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="ml-auto text-xs gap-1">
          <span>View Details</span>
          <ChevronRight className="h-3 w-3" />
        </Button>
      </CardFooter>
    </Card>
  );
};

const MarketInsights: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <Card className={cn("", className)}>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BrainCircuit className="h-5 w-5 text-primary-blue" />
            <CardTitle className="text-lg">AI Market Insights</CardTitle>
          </div>
          <Button variant="outline" size="sm" className="text-xs">View All</Button>
        </div>
        <CardDescription>
          AI-powered analysis and opportunities based on market data
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {mockInsights.map((insight) => (
          <InsightCard key={insight.id} insight={insight} />
        ))}
      </CardContent>
    </Card>
  );
};

export default MarketInsights;
