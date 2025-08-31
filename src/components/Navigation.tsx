import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export const Navigation = ({ isDark = false }: { isDark?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const navLinks = [
    { href: "/", label: "Beranda" },
    { href: "/tentang-kami", label: "Tentang Kami" },
    { href: "/produk", label: "Produk" },
    // { href: "/galeri", label: "Galeri" }, // Temporarily hidden
    { href: "/klien", label: "Klien" },
    { href: "/blog", label: "Blog" },
    { href: "/kontak", label: "Kontak" },
  ];

  const textColor = isDark ? "text-white" : "text-foreground";
  const hoverColor = isDark ? "hover:text-white/70" : "hover:text-primary";

  return (
    <nav className={`${isDark ? "absolute" : "relative"} top-0 left-0 right-0 z-50 p-6 ${!isDark ? "bg-background border-b" : ""}`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/88dd1ec6-51d4-4d75-8d4f-24a525b157a0.png" 
            alt="C Vent Logo" 
            className="h-16 w-auto"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`${textColor} ${hoverColor} transition-colors ${
                location.pathname === link.href ? "font-semibold border-b-2 border-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button variant={isDark ? "hero-outline" : "default"} size="sm">
            Konsultasi Gratis
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
                  location.pathname === link.href ? "font-semibold text-primary" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4">
              <Button variant="default" size="sm" className="w-full">
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};