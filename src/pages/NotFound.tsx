
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FileQuestion } from "lucide-react";

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
            <a href="/">Return to Home</a>
          </Button>
          <div className="text-sm text-gray-500">
            Or check out our <a href="/support" className="text-primary-blue hover:underline">help center</a> for assistance
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
