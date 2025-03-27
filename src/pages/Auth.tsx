
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthForm from '@/components/auth/AuthForm';
import { Button } from '@/components/ui/button';

const Auth: React.FC = () => {
  const navigate = useNavigate();
  
  const handleAuthSuccess = () => {
    // Navigate to dashboard on successful authentication
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      {/* Left column - Form */}
      <div className="flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <div className="mb-10">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-blue to-info flex items-center justify-center">
                <span className="font-bold text-white">M</span>
              </div>
              <span className="text-2xl font-bold">MarketFlow</span>
            </Link>
            <h1 className="mt-8 text-2xl font-bold">Welcome to MarketFlow</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sign in to your account or create a new one to access the smartest trading platform.
            </p>
          </div>
          
          <AuthForm onSuccess={handleAuthSuccess} />
        </div>
      </div>
      
      {/* Right column - Image/Info */}
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-blue to-info opacity-90"></div>
        <div className="absolute inset-0 flex flex-col justify-center px-10 text-white">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-6">Intelligent Trading, Simplified</h2>
            <p className="text-lg mb-8">
              MarketFlow combines cutting-edge AI with elegant design to give you the edge in today's markets.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2"></path><path d="M18 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path><path d="M21 15a3 3 0 0 0-3-3"></path></svg>
                </div>
                <h3 className="text-lg font-medium mb-1">AI-Powered Insights</h3>
                <p className="text-sm text-white/80">
                  Get personalized trading recommendations and market analysis powered by our advanced AI.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Real-time Tracking</h3>
                <p className="text-sm text-white/80">
                  Monitor your portfolio in real-time with advanced analytics and customizable dashboards.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18h8"></path><path d="M3 22h18"></path><path d="M14 22a7 7 0 1 0 0-14h-1"></path><path d="M9 14h2"></path><path d="M9 12a2 2 0 0 1 0-4h1"></path><path d="M7 8h8"></path><path d="M7 6h2"></path><path d="M15 6h2"></path></svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Smart Automation</h3>
                <p className="text-sm text-white/80">
                  Set up custom alerts, automated trading rules, and scheduled investments.
                </p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
                <div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center mb-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 3h20"></path><path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3"></path><path d="m7 21 5-5 5 5"></path></svg>
                </div>
                <h3 className="text-lg font-medium mb-1">Educational Resources</h3>
                <p className="text-sm text-white/80">
                  Access comprehensive learning materials to improve your trading knowledge and skills.
                </p>
              </div>
            </div>
            
            <div className="mt-8 flex items-center">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-blue text-xs font-medium">JD</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-blue text-xs font-medium">SK</div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-primary-blue text-xs font-medium">RL</div>
              </div>
              <div className="ml-4 text-sm">
                <span className="font-medium">Trusted by 100,000+ traders</span> worldwide
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
