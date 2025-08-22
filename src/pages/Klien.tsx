import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function Klien() {
  const clientLogos = [
    { nama: "PT. ASTER DECORINDO ABADI", industri: "Furniture & Dekorasi", daerah: "Curug - Tangerang" },
    { nama: "PT. BINTANG TOEDJOEH", industri: "Farmasi & Kesehatan", daerah: "Jakarta" },
    { nama: "PT. BERLINA Tbk", industri: "Kemasan Plastik & Botol", daerah: "Jababeka I - Cikarang" },
    { nama: "PT. BERLEI INDONESIA", industri: "Tekstil & Pakaian Dalam", daerah: "Jababeka - Cikarang" },
    { nama: "PT. CIPTA AQUATEC", industri: "Perikanan & Aquaculture", daerah: "Dadap - Tangerang" },
    { nama: "PT. CHUBB SAFES INDONESIA", industri: "Keamanan & Brankas", daerah: "Cibitung - Bekasi" },
    { nama: "PT. CARITA BOAT INDONESIA", industri: "Perkapalan & Fiberglass", daerah: "BSD - Tangerang" },
    { nama: "PT. CATUR KARYA BERSAMA", industri: "Konstruksi & Material", daerah: "Tambun - Bekasi" },
    { nama: "PT. COSMO MASKMUR INDONESIA", industri: "Plastik & Manufaktur", daerah: "Cileungsi - Bogor" },
    { nama: "PT. DYNAPLAST Tbk", industri: "Kemasan Plastik", daerah: "Cibitung" },
    { nama: "PT. INDOFOOD FRITOLAY MAKMUR", industri: "Makanan & Minuman (Snack)", daerah: "Tangerang" },
    { nama: "PT. INDOFOOD SUKSES MAKMUR", industri: "Makanan & Minuman", daerah: "Tangerang" },
    { nama: "PT. SARIMELATI KENCANA", industri: "Restoran & F&B (Pizza Hut)", daerah: "Jakarta" },
    { nama: "PT. KANZEN MOTOR INDONESIA", industri: "Otomotif (Sepeda Motor)", daerah: "Karawang" },
    { nama: "PT. MORITA TJOKRO GEARINDO", industri: "Komponen Mesin & Gear", daerah: "Jakarta" },
    { nama: "PT. SUPERnova FLEXIBLE PACKAGING", industri: "Flexible Packaging", daerah: "Cikarang" },
    { nama: "PT. VOKSEL ELECTRONICS", industri: "Kabel & Elektronik", daerah: "Narogong" },
    { nama: "PT. INDONESIA POWER / PLTU", industri: "Energi & Pembangkit Listrik", daerah: "Surabaya" },
    { nama: "PT. INDAH KIAT PULP & PAPER Tbk", industri: "Pulp & Kertas", daerah: "Serpong - Tangerang" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Klien <span className="font-bold">Kami</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Dipercaya oleh perusahaan terkemuka dan institusi bergengsi di Indonesia
          </p>
        </div>
      </section>

      {/* Client Logos Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light mb-6" style={{ color: '#222222' }}>
              Dipercaya Oleh <span className="font-semibold">Perusahaan Terkemuka</span>
            </h2>
            <p className="text-lg mb-8" style={{ color: '#666666' }}>
              C Vent telah digunakan di berbagai sektor: pabrik, gudang, perkantoran, rumah makan, hingga fasilitas publik.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="bg-white p-6 text-center transition-all duration-200 hover:border-gray-400"
                style={{ 
                  border: '1px solid #EAEAEA',
                  borderRadius: '8px'
                }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <span className="text-gray-400 text-xs">LOGO</span>
                </div>
                <h3 className="font-semibold text-sm mb-2" style={{ color: '#222222' }}>
                  {client.nama}
                </h3>
                <p className="text-xs mb-1" style={{ color: '#666666' }}>
                  {client.industri}
                </p>
                <p className="text-xs" style={{ color: '#999999' }}>
                  {client.daerah}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p style={{ color: '#666666' }}>
              <strong>19+ perusahaan</strong> telah mempercayakan solusi ventilasi mereka kepada C Vent
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Bergabunglah dengan <span className="font-semibold">Klien Kami</span>
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/80">
            Konsultasi gratis untuk mengetahui potensi penghematan di gedung Anda
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero-outline" size="lg" className="px-12">
              Konsultasi Gratis Sekarang
            </Button>
            <Button variant="hero-outline" size="lg" className="px-12">
              Minta Studi Kelayakan
            </Button>
          </div>
          
          <div className="mt-8 text-sm text-primary-foreground/70">
            <p>Analisis ROI dan potensi penghematan tersedia gratis untuk semua calon klien</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}