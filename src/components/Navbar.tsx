import { Link, useLocation } from "react-router-dom";
import { Gamepad2, Menu, X, User } from "lucide-react";
import { useState } from "react";

export function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/robot", label: "AI Bot" },
    { to: "/news", label: "News" },
    { to: "/community", label: "Community" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 glass-nav"></div>
      <div className="relative xl:max-w-7xl max-w-6xl mx-auto py-4 px-6">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center border border-primary/30 group-hover:box-glow-cyan transition-all duration-300">
              <Gamepad2 className="w-6 h-6 text-primary" />
            </div>
            <span className="text-2xl font-bold text-foreground font-display tracking-wider">
              HACK<span className="text-primary">GAMERS</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`transition-all duration-300 font-medium text-lg tracking-wide ${
                  location.pathname === link.to
                    ? "text-primary text-glow-cyan"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/auth" className="btn-ghost flex items-center gap-2">
              <User className="w-4 h-4" />
              Login
            </Link>
            <Link to="/auth" className="btn-primary">
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card mx-4 mt-2 p-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 transition-colors text-lg ${
                    location.pathname === link.to
                      ? "text-primary font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-border">
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="btn-ghost text-center"
                >
                  Login
                </Link>
                <Link
                  to="/auth"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary text-center"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
