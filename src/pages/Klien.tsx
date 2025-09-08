import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";

export default function Klien() {
  const clientLogos = [
    { nama: "PT. ASTER DECORINDO ABADI", industri: "Umum/Manufaktur", daerah: "Curug - Tangerang" },
    { nama: "PT. BINTANG TOEDJOEH", industri: "Farmasi & Kesehatan", daerah: "Jakarta" },
    { nama: "PT. BERLINA Tbk", industri: "Kemasan Plastik", daerah: "Jababeka I - Cikarang" },
    { nama: "PT. BERLEI INDONESIA", industri: "Tekstil & Pakaian", daerah: "Jababeka - Cikarang" },
    { nama: "PT. CIPTA AQUATEC", industri: "Perikanan & Aquaculture", daerah: "Dadap - Tangerang" },
    { nama: "PT. CHUBB SAFES INDONESIA", industri: "Keamanan & Brankas", daerah: "Cibitung - Bekasi" },
    { nama: "PT. CARITA BOAT INDONESIA", industri: "Perkapalan & Fiberglass", daerah: "BSD - Tangerang" },
    { nama: "PT. CATUR KARYA BERSAMA", industri: "Konstruksi", daerah: "Tambun - Bekasi" },
    { nama: "PT. COSMO MASKMUR INDONESIA", industri: "Plastik & Manufaktur", daerah: "Cileungsi - Bogor" },
    { nama: "PT. DONGAN KREASI INDONESIA", industri: "Umum/Manufaktur", daerah: "Jatimulya - Bekasi" },
    { nama: "PT. DONG JUNG", industri: "Umum/Manufaktur", daerah: "Curug - Tangerang" },
    { nama: "PT. DYNAPLAST Tbk", industri: "Kemasan Plastik", daerah: "Cibitung" },
    { nama: "PT. DYNATECH PERKASA", industri: "Mesin & Teknologi", daerah: "Jababeka - Cikarang" },
    { nama: "PT. DWIMITRA INDONESIA", industri: "Umum/Manufaktur", daerah: "Cibinong" },
    { nama: "PT. ELANG PERDANA", industri: "Umum/Manufaktur", daerah: "Citereup - Bogor" },
    { nama: "PT. EKAPRASARANA ARYAGUNASATYA", industri: "Konstruksi", daerah: "Pulogadung - Jakarta" },
    { nama: "PT. FEDERAL NITTAN INDUSTRIES", industri: "Komponen Otomotif", daerah: "Cibitung - Bekasi" },
    { nama: "PT. FRINA LESTARI NUSANTARA", industri: "Umum/Manufaktur", daerah: "Citereup - Bogor" },
    { nama: "PT. FUJITEC", industri: "Lift & Eskalator", daerah: "KIIC - Karawang" },
    { nama: "PT. GALIC BINA MADA", industri: "Umum/Manufaktur", daerah: "Cibitung - Bekasi" },
    { nama: "PT. GAJAH MAJU JAYA", industri: "Umum/Manufaktur", daerah: "Tangerang" },
    { nama: "PT. GRAPINDO MITRA LESTARI", industri: "Umum/Manufaktur", daerah: "Cikarang" },
    { nama: "PT. GUNUNG SALAK", industri: "Agrikultur", daerah: "Sukabumi" },
    { nama: "PT. GOLD COIN", industri: "Pakan Ternak", daerah: "Bekasi" },
    { nama: "PT. HALONI JANE", industri: "Karet & Sarung Tangan", daerah: "Cikupa - Tangerang" },
    { nama: "PT. HARSEN INDONESIA", industri: "Farmasi", daerah: "Bogor" },
    { nama: "PT. INTERBUL BAG", industri: "Tekstil & Karung", daerah: "Klari - Jawa Barat" },
    { nama: "PT. INDONESIA TORAY SYNTHETICS", industri: "Tekstil & Serat", daerah: "Tangerang" },
    { nama: "PT. INDONESIA POWER / PLTU", industri: "Energi & Pembangkit Listrik", daerah: "Surabaya" },
    { nama: "PT. INDAH KIAT PULP & PAPER Tbk", industri: "Pulp & Kertas", daerah: "Serpong - Tangerang" },
    { nama: "PT. INDOFOOD FRITOLAY MAKMUR", industri: "Makanan & Minuman (Snack)", daerah: "Tangerang" },
    { nama: "PT. INDOFOOD SUKSES MAKMUR", industri: "Makanan & Minuman", daerah: "Tangerang" },
    { nama: "PT. INATAI GOLDEN INDUSTRI", industri: "Manufaktur", daerah: "KBN - Cakung" },
    { nama: "PT. IRONTAMA PRAKARSA", industri: "Metal & Baja", daerah: "BSD - Tangerang" },
    { nama: "PT. JAKARTA MARTEN LOGAMINDO", industri: "Metal & Baja", daerah: "Pulogadung - Jakarta" },
    { nama: "PT. JAKARTA MARTEN LOGAMINDO", industri: "Metal & Baja", daerah: "Jatiuwung - Tangerang" },
    { nama: "PT. JIBUHIN BAKRIE INDONESIA", industri: "Komponen Otomotif", daerah: "KIIC - Karawang" },
    { nama: "PT. KARYA TARUNA PERKASA", industri: "Konstruksi", daerah: "Jakarta Timur" },
    { nama: "PT. KEL INDONESIA", industri: "Elektronik", daerah: "Cibitung" },
    { nama: "PT. KENCANA GEMILANG", industri: "Umum/Manufaktur", daerah: "Tangerang" },
    { nama: "PT. WILIS BOX", industri: "Kemasan Karton", daerah: "Jakarta" },
    { nama: "PT. AVERY DENISON INDONESIA", industri: "Label & Adhesive", daerah: "Cikarang" },
    { nama: "PT. BIROTIKA SEMESTA (DHL)", industri: "Logistik", daerah: "Jakarta" },
    { nama: "PT. KRAKATAU BANDAR SAMUDRA", industri: "Pelabuhan & Logistik", daerah: "Jawa Barat" },
    { nama: "PT. KANZEN MOTOR INDONESIA", industri: "Otomotif", daerah: "Karawang" },
    { nama: "PT. KIMBERLY LEVER INDONESIA", industri: "Consumer Goods", daerah: "Cikarang" },
    { nama: "PT. KMK PLASTICS", industri: "Plastik", daerah: "Cikarang" },
    { nama: "PT. KREASI SENTOSA ABADI", industri: "Umum/Manufaktur", daerah: "Jakarta" },
    { nama: "PT. KORINDO STAINLES STEEL", industri: "Baja & Stainless Steel", daerah: "Cibinong" },
    { nama: "PT. KERAMIKA INDONESIA ASSOSIASI (KIA)", industri: "Keramik", daerah: "Cileungsi - Bogor" },
    { nama: "PT. KERAMINDO MEGAH PERTIWI", industri: "Keramik", daerah: "Serang" },
    { nama: "PT. LAZUARDI RUKUN PERKASA", industri: "Manufaktur", daerah: "Serang" },
    { nama: "PT. KEINTECH", industri: "Manufaktur", daerah: "Jababeka - Cikarang" },
    { nama: "PT. MAKALOT INDUSTRIAL INDONESIA", industri: "Tekstil & Garmen", daerah: "Jakarta Timur" },
    { nama: "PT. MATRASTAMA MAESTRO PERKASA", industri: "Manufaktur", daerah: "Cikarang" },
    { nama: "PT. MAKMUR INTI SENTOSA", industri: "Manufaktur", daerah: "Tangerang" },
    { nama: "PT. MASPION", industri: "Elektronik & Peralatan Rumah", daerah: "Surabaya" },
    { nama: "PT. MASSINDO SINAR PRATAMA", industri: "Kasur & Bedding", daerah: "Bekasi" },
    { nama: "PT. MAJU JAYA UTAMA LESTARI", industri: "Manufaktur", daerah: "Tangerang" },
    { nama: "PT. MILAN INDOTEX", industri: "Tekstil", daerah: "Kapuk" },
    { nama: "PT. MITRA TANAMAS", industri: "Manufaktur", daerah: "Tangerang" },
    { nama: "PT. MORITA TJOKRO GEARINDO", industri: "Komponen Mesin", daerah: "Jakarta" },
    { nama: "PT. SUMBER MUSTIKA", industri: "Agrikultur", daerah: "Lampung" },
    { nama: "PT. SUPERNOVA FLEXIBLE PACKAGING", industri: "Kemasan Fleksibel", daerah: "Cikarang" },
    { nama: "PT. SUNTER BUAH SEGAR", industri: "Distribusi Buah", daerah: "Jakarta Utara" },
    { nama: "PT. STANDARD TOYO POLYMER", industri: "Polimer & Plastik", daerah: "Banten" },
    { nama: "PT. SUMBER GRAHA SEJAHTERA", industri: "Material Bangunan", daerah: "Tangerang" },
    { nama: "PT. SARIMELATI KENCANA", industri: "Restoran (Pizza Hut)", daerah: "Jakarta" },
    { nama: "PT. TELAGA SARI", industri: "Manufaktur", daerah: "Karawang" },
    { nama: "PT. TANDES LAUTAN", industri: "Manufaktur", daerah: "Tangerang" },
    { nama: "PT. TEMPRINT (TEMPO)", industri: "Percetakan", daerah: "Jakarta" },
    { nama: "PT. THREE STAR PUTRA MAKMUR", industri: "Manufaktur", daerah: "Cilincing" },
    { nama: "PT. TOBINDO REKSA", industri: "Manufaktur", daerah: "Jakarta" },
    { nama: "PT. TIARA SAKTI", industri: "Manufaktur", daerah: "Jakarta" },
    { nama: "PT. TONG YANG INDONESIA", industri: "Komponen Otomotif", daerah: "Bekasi" },
    { nama: "PT. TEGARPRIMA JAYA", industri: "Manufaktur", daerah: "Jakarta" },
    { nama: "PT. UNINDO AJIDHARMA INDUSTRY", industri: "Manufaktur", daerah: "Bogor" },
    { nama: "PT. VINOTHINDO", industri: "Manufaktur", daerah: "Cikarang" },
    { nama: "PT. VOKSEL ELECTRONICS", industri: "Kabel & Elektronik", daerah: "Narogong" },
    { nama: "PT. WARINGIN MEGA GROUP", industri: "Manufaktur", daerah: "Tangerang" },
    { nama: "PT. WANG SARI MULTI UTAMA", industri: "Manufaktur", daerah: "Cikarang" },
    { nama: "PT. WIRAJAYA PACKINDO", industri: "Kemasan", daerah: "Tangerang" }
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
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star key={starIndex} size={12} fill="#FFD700" color="#FFD700" />
                    ))}
                  </div>
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
              <strong>80+ perusahaan</strong> telah mempercayakan solusi ventilasi mereka kepada C Vent
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
          
          <div className="flex justify-center">
            <Button variant="hero-outline" size="lg" className="px-12" asChild>
              <a href="/kontak">Konsultasi Gratis Sekarang</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}