import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/pharmasetu-logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Homepage</Link>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">About Us</Link>
            <Link to="/references" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">References</Link>

            {/* ✅ External Grants Link */}
            <a
              href="https://indiabioscience.org/grants"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium"
            >
              Grants
            </a>

            <Link to="/scholarships" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Scholarships</Link>
            <Link to="/internships" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Internships</Link>
            <Link to="/opportunities" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Opportunities</Link>
            <Link to="/competitive-exams" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Competitive Exams</Link>
            <Link to="/subscriptions" className="text-muted-foreground hover:text-foreground transition-colors text-sm font-medium">Subscription Policy</Link>
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

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden rounded-full"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* ✅ Mobile Dropdown Menu */}
        {open && (
          <div className="flex flex-col gap-4 py-4 lg:hidden">
            <Link to="/" onClick={() => setOpen(false)}>Homepage</Link>
            <Link to="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link to="/references" onClick={() => setOpen(false)}>References</Link>

            {/* ✅ External Grants Link Mobile */}
            <a
              href="https://indiabioscience.org/grants"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
            >
              Grants
            </a>

            <Link to="/scholarships" onClick={() => setOpen(false)}>Scholarships</Link>
            <Link to="/internships" onClick={() => setOpen(false)}>Internships</Link>
            <Link to="/opportunities" onClick={() => setOpen(false)}>Opportunities</Link>
            <Link to="/competitive-exams" onClick={() => setOpen(false)}>Competitive Exams</Link>
            <Link to="/subscriptions" onClick={() => setOpen(false)}>Subscription Policy</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
