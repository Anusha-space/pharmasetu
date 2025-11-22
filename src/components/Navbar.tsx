import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/pharmasetu-logo.png";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src={logo}
              alt="PharmaSetu Logo"
              className="w-9 h-9 transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-bold text-foreground">PharmaSetu</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-5">

            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Homepage
            </Link>

            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              About Us
            </Link>

            <Link to="/references" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              References
            </Link>

            <Link to="/grants" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Grants
            </Link>

            <Link to="/scholarships" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Scholarships
            </Link>

            <Link to="/internships" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Internships
            </Link>

            <Link to="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Opportunities
            </Link>

            <Link to="/competitive-exams" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Competitive Exams
            </Link>

            <Link to="/subscription-policy" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">
              Subscription Policy
            </Link>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-3">
            <Link to="/signin">
              <Button variant="ghost" className="rounded-full hidden sm:inline-flex">
                Sign In
              </Button>
            </Link>

            <Button className="bg-gradient-primary hover:opacity-90 rounded-full">
              Get Started
            </Button>

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
