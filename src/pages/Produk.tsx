import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, MessageCircle, Phone } from "lucide-react";

export default function Produk() {
  const productSpecs = [
    {
      model: '14"',
      material: 'Aluminium',
      diameter: '35.6 cm',
      base: '40x40 cm - Galvanis',
      capacity: '800-1,200',
      weight: '12 kg',
      warranty: '3 Tahun'
    },
    {
      model: '20"',
      material: 'Aluminium',
      diameter: '50.8 cm',
      base: '50x50 cm - Galvanis',
      capacity: '1,500-2,200',
      weight: '18 kg',
      warranty: '3 Tahun'
    },
    {
      model: '24"',
      material: 'Aluminium',
      diameter: '61.0 cm',
      base: '60x60 cm - Galvanis',
      capacity: '2,200-3,000',
      weight: '25 kg',
      warranty: '3 Tahun'
    },
    {
      model: '30"',
      material: 'Aluminium',
      diameter: '76.2 cm',
      base: '80x80 cm - Galvanis',
      capacity: '3,500-4,500',
      weight: '35 kg',
      warranty: '3 Tahun'
    }
  ];

  const stainlessSpecs = [
    {
      model: '14"',
      material: 'Stainless Steel',
      diameter: '35.6 cm',
      base: '40x40 cm - Stainless',
      capacity: '800-1,200',
      weight: '15 kg',
      warranty: '5 Tahun'
    },
    {
      model: '20"',
      material: 'Stainless Steel',
      diameter: '50.8 cm',
      base: '50x50 cm - Stainless',
      capacity: '1,500-2,200',
      weight: '22 kg',
      warranty: '5 Tahun'
    },
    {
      model: '24"',
      material: 'Stainless Steel',
      diameter: '61.0 cm',
      base: '60x60 cm - Stainless',
      capacity: '2,200-3,000',
      weight: '28 kg',
      warranty: '5 Tahun'
    },
    {
      model: '30"',
      material: 'Stainless Steel',
      diameter: '76.2 cm',
      base: '80x80 cm - Stainless',
      capacity: '3,500-4,500',
      weight: '42 kg',
      warranty: '5 Tahun'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Lini Produk <span className="font-bold">C Vent</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            Turbine Ventilator berkualitas tinggi dengan berbagai pilihan ukuran dan material
          </p>
        </div>
      </section>

      {/* Product Introduction */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-8">
              Turbine Ventilator <span className="font-semibold">C Vent</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Lini lengkap Turbine Ventilator C Vent tersedia dalam 4 ukuran standar: 14", 20", 24", dan 30" 
              dengan pilihan material aluminium premium dan stainless steel marine grade. Setiap model dirancang 
              untuk memberikan performa optimal dengan efisiensi maksimal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">4</div>
              <p className="text-muted-foreground">Ukuran Tersedia</p>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-muted-foreground">Pilihan Material</p>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-muted-foreground">Tahun Garansi</p>
            </div>
            <div className="text-center p-6 bg-muted/30 rounded-lg">
              <div className="text-3xl font-bold text-primary mb-2">28+</div>
              <p className="text-muted-foreground">Tahun Terpercaya</p>
            </div>
          </div>
        </div>
      </section>

      {/* Aluminium Specifications */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Seri <span className="font-semibold">Aluminium</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Material aluminium berkualitas tinggi dengan perlindungan korosi optimal
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left">Model</th>
                  <th className="px-6 py-4 text-left">Material</th>
                  <th className="px-6 py-4 text-left">Diameter Kubah</th>
                  <th className="px-6 py-4 text-left">Base (ukuran & bahan)</th>
                  <th className="px-6 py-4 text-left">Kapasitas (m³/jam)</th>
                  <th className="px-6 py-4 text-left">Berat</th>
                  <th className="px-6 py-4 text-left">Garansi</th>
                </tr>
              </thead>
              <tbody>
                {productSpecs.map((spec, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">{spec.model}</td>
                    <td className="px-6 py-4">{spec.material}</td>
                    <td className="px-6 py-4">{spec.diameter}</td>
                    <td className="px-6 py-4">{spec.base}</td>
                    <td className="px-6 py-4">{spec.capacity}</td>
                    <td className="px-6 py-4">{spec.weight}</td>
                    <td className="px-6 py-4">
                      <Badge variant="secondary">{spec.warranty}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stainless Steel Specifications */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Seri <span className="font-semibold">Stainless Steel</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Material stainless steel marine grade untuk lingkungan ekstrem dan industri berat
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-card rounded-lg shadow-lg overflow-hidden">
              <thead className="bg-primary text-primary-foreground">
                <tr>
                  <th className="px-6 py-4 text-left">Model</th>
                  <th className="px-6 py-4 text-left">Material</th>
                  <th className="px-6 py-4 text-left">Diameter Kubah</th>
                  <th className="px-6 py-4 text-left">Base (ukuran & bahan)</th>
                  <th className="px-6 py-4 text-left">Kapasitas (m³/jam)</th>
                  <th className="px-6 py-4 text-left">Berat</th>
                  <th className="px-6 py-4 text-left">Garansi</th>
                </tr>
              </thead>
              <tbody>
                {stainlessSpecs.map((spec, index) => (
                  <tr key={index} className="border-b border-border hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-primary">{spec.model}</td>
                    <td className="px-6 py-4">{spec.material}</td>
                    <td className="px-6 py-4">{spec.diameter}</td>
                    <td className="px-6 py-4">{spec.base}</td>
                    <td className="px-6 py-4">{spec.capacity}</td>
                    <td className="px-6 py-4">{spec.weight}</td>
                    <td className="px-6 py-4">
                      <Badge className="bg-accent text-accent-foreground">{spec.warranty}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Accessories & Components */}
      <section className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
              Komponen & <span className="font-semibold">Aksesoris</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Perlengkapan tambahan untuk instalasi yang optimal dan aman
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Base Plate</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Basis mounting berkualitas dengan material galvanis atau stainless
                </p>
                <Badge variant="outline">Wajib</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Flashing Kit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Pelindung kebocoran antara atap dan base plate
                </p>
                <Badge variant="outline">Opsional</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Jaring Anti-Serangga</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Mencegah masuknya serangga dan debris dari luar
                </p>
                <Badge variant="outline">Direkomendasikan</Badge>
              </CardContent>
            </Card>

            <Card className="p-6 text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-lg">Ducting Connector</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Penyambung ke sistem ducting internal gedung
                </p>
                <Badge variant="outline">Khusus</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Download & CTA Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8">
            Butuh Informasi <span className="font-semibold">Lebih Detail?</span>
          </h2>
          <p className="text-xl mb-12 text-primary-foreground/80">
            Unduh brosur lengkap atau konsultasi langsung dengan tim teknis kami
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Button variant="hero-outline" size="lg" className="flex items-center gap-3">
              <Download size={20} />
              Unduh Brosur PDF
            </Button>
            <Button variant="hero-outline" size="lg" className="flex items-center gap-3">
              <MessageCircle size={20} />
              Minta Penawaran
            </Button>
            <Button variant="hero-outline" size="lg" className="flex items-center gap-3">
              <Phone size={20} />
              Konsultasi Teknis
            </Button>
          </div>

          <div className="mt-12 p-6 bg-primary-foreground/10 rounded-lg">
            <p className="text-sm text-primary-foreground/80">
              <strong>Catatan:</strong> Kapasitas ventilasi dapat bervariasi tergantung kondisi angin, 
              ketinggian instalasi, dan faktor lingkungan. Konsultasi teknis gratis untuk perhitungan yang akurat.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}