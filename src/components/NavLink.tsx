import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="w-full bg-blue-900 text-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between py-3">

          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-wide">
            PharmaSetu
          </Link>

          {/* Navigation Menu */}
          <ul className="flex flex-wrap gap-4 text-sm md:text-base font-medium">

            <li><Link to="/">Homepage</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/references">References</Link></li>
            <li><Link to="/grants">Grants</Link></li>
            <li><Link to="/scholarships">Scholarships</Link></li>
            <li><Link to="/internships">Internships</Link></li>
            <li><Link to="/opportunities">Opportunities</Link></li>
            <li><Link to="/competitive-exams">Competitive Exams</Link></li>
            <li><Link to="/subscription-policy">Subscription Policy</Link></li>

            {/* Sign In Button */}
            <li>
              <Link
                to="/signin"
                className="bg-yellow-400 text-black px-3 py-1 rounded hover:bg-yellow-300"
              >
                Sign In
              </Link>
            </li>

          </ul>
        </div>
      </nav>
    </header>
  );
}
