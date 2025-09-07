import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
    document.title = "404 - Page Not Found | MSR Portfolio";
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-6 p-8 glass-card rounded-xl max-w-md">
        <h1 className="text-8xl font-bold gradient-text">404</h1>
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground">
          Oops! The page you're looking for doesn't exist.
        </p>
        <div className="flex gap-4 justify-center pt-4">
          <Link to="/">
            <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Go Back
            </Button>
          </Link>
          <Link to="/">
            <Button className="bg-primary text-background hover:bg-primary/90">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
