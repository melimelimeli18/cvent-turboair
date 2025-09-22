import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
export const Footer = () => {
  return <footer className="py-16 px-6 bg-primary-dark text-primary-foreground">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/cvent-logo-2.png" 
                alt="C Vent Logo" 
                className="h-12 w-auto"
              />
            </div>
            <p className="text-primary-foreground/70 mb-4">
              Solusi ventilasi premium untuk gedung & industri sejak 1997
            </p>
            <div className="space-y-2 text-primary-foreground/70 text-sm">
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Jakarta, Indonesia</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <div className="flex flex-col">
                  <span>Senin - Jumat: 08:00 - 17:00</span>
                  <span>Sabtu: 08:00 - 15:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Halaman</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <Link to="/" className="block hover:text-white transition-colors">Beranda</Link>
              <Link to="/tentang-kami" className="block hover:text-white transition-colors">Tentang Kami</Link>
              <Link to="/produk" className="block hover:text-white transition-colors">Produk</Link>
              
              <Link to="/klien" className="block hover:text-white transition-colors">Klien</Link>
              
              <Link to="/kontak" className="block hover:text-white transition-colors">Kontak</Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Hubungi Kami</h4>
            <div className="space-y-3 text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>62+ 8121 0017 168</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>cvent.ventilator@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Layanan</h4>
            <div className="space-y-2 text-primary-foreground/70">
              <p>Turbine Ventilator</p>
              <p>Ventilasi Industri</p>
              <p>Konsultasi Teknis</p>
              <p>Instalasi & Service</p>
              <p>Garansi Resmi</p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
            <div className="text-primary-foreground/50 text-sm">
              <p>&copy; 2024 C Vent. All rights reserved.</p>
            </div>
            <div className="text-primary-foreground/50 text-sm md:text-right">
              <p>C Vent bergaransi & terdaftar di Dirjen HKI</p>
              <p>Desain & paten untuk iklim tropis Indonesia</p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};