
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  ArrowLeft, 
  BarChart3, 
  BookOpen, 
  CreditCard, 
  Layers, 
  LayoutDashboard, 
  LineChart, 
  Newspaper, 
  PieChart, 
  Settings, 
  Sparkles, 
  TrendingUp
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface SidebarProps {
  collapsed?: boolean;
  onToggle?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ 
  collapsed = false, 
  onToggle 
}) => {
  const location = useLocation();
  
  const mainLinks = [
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    { name: 'Watchlist', href: '/watchlist', icon: Layers },
    { name: 'Markets', href: '/markets', icon: BarChart3 },
    { name: 'Portfolio', href: '/portfolio', icon: PieChart },
    { name: 'Orders', href: '/orders', icon: CreditCard },
    { name: 'Stock Analysis', href: '/analysis', icon: LineChart },
  ];
  
  const insightLinks = [
    { name: 'AI Insights', href: '/insights', icon: Sparkles },
    { name: 'Market News', href: '/news', icon: Newspaper },
    { name: 'Learning', href: '/learning', icon: BookOpen },
  ];

  const renderNavLink = (item: { name: string; href: string; icon: any }) => (
    <Link
      key={item.name}
      to={item.href}
      className={cn(
        "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
        location.pathname === item.href
          ? "bg-primary-blue text-white" 
          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
      )}
    >
      <item.icon className={cn("h-4 w-4", collapsed ? "mx-auto" : "")} />
      {!collapsed && <span>{item.name}</span>}
    </Link>
  );

  return (
    <div className={cn(
      "h-screen border-r bg-background flex flex-col transition-all duration-300",
      collapsed ? "w-16" : "w-60"
    )}>
      {/* Sidebar header with collapse button */}
      <div className="p-3 flex items-center justify-between border-b">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-full bg-gradient-to-br from-primary-blue to-info flex items-center justify-center">
              <span className="font-bold text-white text-xs">M</span>
            </div>
            <span className="font-semibold">MarketFlow</span>
          </div>
        )}
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle}
          className={cn("rounded-full", collapsed ? "mx-auto" : "")}
        >
          <ArrowLeft className={cn(
            "h-4 w-4 transition-transform", 
            collapsed ? "rotate-180" : ""
          )} />
        </Button>
      </div>

      {/* Sidebar content - scrollable */}
      <ScrollArea className="flex-1 py-4">
        <div className="px-3 space-y-6">
          <div className="space-y-1">
            {!collapsed && <h3 className="text-xs font-medium text-muted-foreground px-3 mb-1">MAIN</h3>}
            {mainLinks.map(renderNavLink)}
          </div>
          
          <div className="space-y-1">
            {!collapsed && <h3 className="text-xs font-medium text-muted-foreground px-3 mb-1">INSIGHTS</h3>}
            {insightLinks.map(renderNavLink)}
          </div>
        </div>
      </ScrollArea>
      
      {/* Sidebar footer */}
      <div className="mt-auto border-t p-3">
        <Link
          to="/settings"
          className={cn(
            "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
            location.pathname === '/settings'
              ? "bg-primary-blue text-white"
              : "text-muted-foreground hover:bg-secondary hover:text-foreground"
          )}
        >
          <Settings className={cn("h-4 w-4", collapsed ? "mx-auto" : "")} />
          {!collapsed && <span>Settings</span>}
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
