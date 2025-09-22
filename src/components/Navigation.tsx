import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/produk", label: "Produk" },
    { href: "/klien", label: "Klien" },
    { href: "/kontak", label: "Kontak" },
  ];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = isScrolled ? "text-foreground" : "text-white";
  const hoverColor = isScrolled ? "hover:text-primary" : "hover:text-white/70";
  const logoSrc = isScrolled
    ? "/lovable-uploads/cvent-logo-1.png" // hijau
    : "/lovable-uploads/cvent-logo-2.png"; // putih

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 p-6 transition-colors duration-300 ${
        isScrolled ? "bg-background border-b shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={logoSrc} alt="C Vent Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${textColor} ${hoverColor} transition-colors ${
                location.pathname === link.href
                  ? "font-semibold border-b-2 border-primary"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <Button
            variant={isScrolled ? "default" : "hero-outline"}
            size="sm"
            asChild
          >
            <Link to="/kontak">Konsultasi Gratis</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${textColor}`}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background shadow-lg border-b">
          <div className="container mx-auto py-4 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`block text-foreground hover:text-primary transition-colors py-2 ${
                  location.pathname === link.href
                    ? "font-semibold text-primary"
                    : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="default" size="sm" className="w-full" asChild>
                <Link to="/kontak">Konsultasi Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
