import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "News", path: "/news" },
  {
    label: "Procedures",
    children: [
      { label: "Septorhinoplasty", path: "/septorhinoplasty" },
      { label: "Septoplasty", path: "/septoplasty" },
      { label: "Sinus Surgery", path: "/sinus-surgery" },
      { label: "Turbinate Surgery", path: "/turbinate-surgery" },
      { label: "Skull Base", path: "/skull-base" },
      { label: "Revision Cases", path: "/revision-cases" },
      { label: "Further ENT", path: "/further-ent" },
    ],
  },
  { label: "Reviews", path: "/reviews" },
  { label: "Contact", path: "/contact" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [proceduresOpen, setProceduresOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between py-4 px-6 lg:px-8">
        <Link to="/" className="flex flex-col">
          <span className="font-display text-lg font-semibold tracking-wide text-primary">
            Dr. med. Marlene Speth
          </span>
          <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
            Rhinology & Facial Plastic Surgery
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative group"
                onMouseEnter={() => setProceduresOpen(true)}
                onMouseLeave={() => setProceduresOpen(false)}
              >
                <button className="px-4 py-2 text-sm font-body font-medium text-foreground/80 hover:text-accent transition-colors">
                  {item.label}
                </button>
                {proceduresOpen && (
                  <div className="absolute top-full left-0 mt-0 w-56 bg-card border border-border rounded-md shadow-lg py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-accent hover:bg-secondary transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path!}
                className={`px-4 py-2 text-sm font-body font-medium transition-colors ${
                  location.pathname === item.path
                    ? "text-accent"
                    : "text-foreground/80 hover:text-accent"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm hover:bg-primary/90 transition-colors"
          >
            Book Consultation
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-6 py-4 flex flex-col gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <span className="block py-2 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {item.label}
                  </span>
                  {item.children.map((child) => (
                    <Link
                      key={child.path}
                      to={child.path}
                      onClick={() => setMobileOpen(false)}
                      className="block py-2 pl-4 text-sm text-foreground/80 hover:text-accent"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/80 hover:text-accent"
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 text-center px-5 py-2.5 text-sm font-medium bg-primary text-primary-foreground rounded-sm"
            >
              Book Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
