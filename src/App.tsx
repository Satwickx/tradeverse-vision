
import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import StockDetail from "./pages/StockDetail";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import About from "./pages/About";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import { AuthProvider } from "./context/AuthContext";

// Create a client
const queryClient = new QueryClient();

const App: React.FC = () => (
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/stocks/:symbol" element={<StockDetail />} />
              <Route path="/auth" element={<Auth />} />
              {/* Pages */}
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/support" element={<Support />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/faq" element={<FAQ />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

export default App;
