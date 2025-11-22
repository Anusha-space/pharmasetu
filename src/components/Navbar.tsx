import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/pharmasetu-logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 group">
            <img src={logo} alt="PharmaSetu Logo" className="w-9 h-9 transition-transform group-hover:scale-105" />
            <span className="text-xl font-bold text-foreground">PharmaSetu</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-5">
            <Link to="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Opportunities
            </Link>
            <Link to="/internships" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Internships
            </Link>
            <Link to="/scholarships" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Scholarships
            </Link>
            <Link to="/competitive-exams" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Exams
            </Link>
            <Link to="/events" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Events
            </Link>
            <Link to="/subscriptions" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Subscriptions
            </Link>
            <Link to="/resources" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Resources
            </Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              About
            </Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="rounded-full hidden sm:inline-flex">Sign In</Button>
            <Button className="bg-gradient-primary hover:opacity-90 rounded-full">Get Started</Button>
            <Button variant="ghost" size="icon" className="lg:hidden rounded-full">
              <Menu className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;