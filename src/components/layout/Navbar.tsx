
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Bell, 
  ChevronDown, 
  HelpCircle, 
  LogOut,
  Menu, 
  Moon, 
  Search, 
  Settings, 
  Sun, 
  User 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/context/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Navbar: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, profile, signOut, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // Add actual dark mode toggle implementation here
  };

  const handleSignOut = async () => {
    await signOut();
  };

  const getInitials = () => {
    if (profile?.full_name) {
      return profile.full_name
        .split(' ')
        .map(name => name[0])
        .join('')
        .toUpperCase()
        .substring(0, 2);
    }
    return user?.email?.substring(0, 2).toUpperCase() || "U";
  };

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2">
              <div className="relative h-8 w-8 rounded-full bg-gradient-to-br from-primary-blue to-info flex items-center justify-center">
                <span className="font-bold text-white">M</span>
              </div>
              <span className="font-semibold text-xl tracking-tight hidden md:block">
                MarketFlow
              </span>
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-sm font-medium hover:text-primary-blue transition-colors">
              Dashboard
            </Link>
            <Link to="/markets" className="text-sm font-medium hover:text-primary-blue transition-colors">
              Markets
            </Link>
            <Link to="/orders" className="text-sm font-medium hover:text-primary-blue transition-colors">
              Orders
            </Link>
            <Link to="/portfolio" className="text-sm font-medium hover:text-primary-blue transition-colors">
              Portfolio
            </Link>
            <Link to="/insights" className="text-sm font-medium hover:text-primary-blue transition-colors">
              AI Insights
            </Link>
          </nav>

          {/* Search */}
          <div className="hidden lg:flex relative w-80">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search stocks, ETFs, indices..."
              className="w-full rounded-full bg-secondary pl-10"
            />
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            <button className="h-9 w-9 rounded-full flex items-center justify-center bg-secondary text-muted-foreground hover:text-foreground transition-colors" aria-label="Search">
              <Search className="h-5 w-5 md:hidden" />
            </button>
            
            <button className="h-9 w-9 rounded-full flex items-center justify-center bg-secondary text-muted-foreground hover:text-foreground transition-colors" aria-label="Notifications">
              <Bell className="h-5 w-5" />
            </button>
            
            <button className="h-9 w-9 rounded-full flex items-center justify-center bg-secondary text-muted-foreground hover:text-foreground transition-colors" aria-label="Toggle dark mode" onClick={toggleDarkMode}>
              {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-2 rounded-full bg-secondary px-2 py-1.5">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={profile?.avatar_url} />
                      <AvatarFallback className="bg-primary-blue text-white text-xs">
                        {getInitials()}
                      </AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium hidden sm:block">
                      {profile?.full_name || user?.email?.split('@')[0]}
                    </span>
                    <ChevronDown className="h-4 w-4 text-muted-foreground hidden sm:block" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="h-4 w-4 mr-2" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="h-4 w-4 mr-2" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <HelpCircle className="h-4 w-4 mr-2" />
                    <span>Help & Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut} className="text-destructive">
                    <LogOut className="h-4 w-4 mr-2" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Button onClick={() => navigate('/auth')} size="sm">
                Sign In
              </Button>
            )}

            {/* Mobile menu button */}
            <button 
              className="h-9 w-9 rounded-full md:hidden flex items-center justify-center bg-secondary" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden py-4 px-6 space-y-4 bg-background border-t border-border animate-fade-in">
          <Link to="/dashboard" className="block py-2 text-sm font-medium">Dashboard</Link>
          <Link to="/markets" className="block py-2 text-sm font-medium">Markets</Link>
          <Link to="/orders" className="block py-2 text-sm font-medium">Orders</Link>
          <Link to="/portfolio" className="block py-2 text-sm font-medium">Portfolio</Link>
          <Link to="/insights" className="block py-2 text-sm font-medium">AI Insights</Link>
          <div className="pt-2">
            <Input
              placeholder="Search stocks, ETFs, indices..."
              className="w-full"
            />
          </div>
          {isAuthenticated && (
            <Button 
              onClick={handleSignOut} 
              variant="destructive" 
              className="w-full mt-4"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Log Out
            </Button>
          )}
        </div>
      )}
    </header>
  );
};

export default Navbar;
