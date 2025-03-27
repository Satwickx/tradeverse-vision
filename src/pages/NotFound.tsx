
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion, Home, HelpCircle, Info } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-lg">
        <div className="flex justify-center mb-6">
          <div className="h-24 w-24 rounded-full bg-primary-blue/10 flex items-center justify-center">
            <FileQuestion className="h-12 w-12 text-primary-blue" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-xl text-gray-600 mb-8">
          We couldn't find the page you're looking for. The page may have been moved, deleted, or never existed.
        </p>
        <div className="space-y-4">
          <Button asChild size="lg" className="w-full sm:w-auto">
            <Link to="/">Return to Home</Link>
          </Button>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/features" className="flex flex-col items-center p-3 hover:bg-gray-200 rounded-lg transition-colors">
              <Info className="h-6 w-6 mb-1 text-primary-blue" />
              <span className="text-sm">Features</span>
            </Link>
            <Link to="/pricing" className="flex flex-col items-center p-3 hover:bg-gray-200 rounded-lg transition-colors">
              <Info className="h-6 w-6 mb-1 text-primary-blue" />
              <span className="text-sm">Pricing</span>
            </Link>
            <Link to="/support" className="flex flex-col items-center p-3 hover:bg-gray-200 rounded-lg transition-colors">
              <HelpCircle className="h-6 w-6 mb-1 text-primary-blue" />
              <span className="text-sm">Support</span>
            </Link>
            <Link to="/about" className="flex flex-col items-center p-3 hover:bg-gray-200 rounded-lg transition-colors">
              <Info className="h-6 w-6 mb-1 text-primary-blue" />
              <span className="text-sm">About</span>
            </Link>
          </div>
          <div className="text-sm text-gray-500 mt-4">
            Need help? Visit our <Link to="/support" className="text-primary-blue hover:underline">help center</Link> for assistance
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
