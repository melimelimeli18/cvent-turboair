import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Wind, Wrench } from "lucide-react";
import { Link } from "react-router-dom";

export default function Produk() {
  const products = [
    {
      id: 'c-45',
      name: 'C VENT TYPE C-45 (18")',
      material: 'Alluminium dan Stainless Steel',
      bearing: 'Full Stainless Steel, Made In Japan',
      diameter: '45 CM = 18"',
      dimension: '75 x 68 x 68',
      weight: '6 kg s/d 8,5 kg',
      capacity: '62,47 M³ / menit'
    },
    {
      id: 'c-60',
      name: 'C VENT TYPE C-60 (24")',
      material: 'Alluminium dan Stainless Steel',
      bearing: 'Full Stainless Steel, Made In Japan',
      diameter: '60 CM = 24"',
      dimension: '100 x 86 x 86',
      weight: '8,5 kg s/d 13,5 kg',
      capacity: '108,79 M³ / menit'
    },
    {
      id: 'c-75',
      name: 'C VENT TYPE C-75 (30")',
      material: 'Alluminium dan Stainless Steel',
      bearing: 'FBJ Made in Japan Full Steinless Steel = 3pc',
      diameter: '75 CM = 30"',
      dimension: '120 x 100 x 100',
      weight: '14,5 kg s/d 21,5 kg',
      capacity: '157,95 M³ / menit'
    },
    {
      id: 'c-90',
      name: 'C VENT TYPE C-90 (36")',
      material: 'Alluminium dan Stainless Steel',
      bearing: 'Made in Japan Full Steinless Steel = 3pc',
      diameter: '90 CM = 36"',
      dimension: '147 x 117 x 117',
      weight: '21,5 kg',
      capacity: '225,79 M³ / menit'
    },
    {
      id: 'c-105',
      name: 'C VENT TYPE C-105 (42")',
      material: 'Alluminium dan Stainless Steel',
      bearing: 'SKF Full Stainless Steel, Made In Japan',
      diameter: '105 CM = 42"',
      dimension: '147 x 134 x 134',
      weight: '25 kg s/d 32 kg',
      capacity: '267,87 M³ / menit'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation isDark={false} />

      {/* Header Section */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mb-6">
            Produk Turbine Ventilator <span className="font-semibold text-primary">C Vent</span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-4xl mx-auto leading-relaxed">
            C Vent tersedia dalam berbagai ukuran dan material, dibuat dari aluminium dan stainless steel berkualitas tinggi dengan bearing Jepang presisi. Semua produk didesain khusus untuk iklim tropis Indonesia, tahan lama, bebas listrik, dan bergaransi resmi.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
              Pilihan Ukuran C Vent
            </h2>
            <p className="text-lg text-neutral-600">
              Tersedia 5 ukuran standar untuk berbagai kebutuhan bangunan
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="group">
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-xl h-full">
                  <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100">
                    <img 
                      src={`/lovable-uploads/${
                        product.id === 'c-45' ? '06dff626-e6b9-44fc-8c2d-90a3b633e315.png' :
                        product.id === 'c-60' ? '9bca9c73-a575-447e-9cc5-85103706559c.png' :
                        product.id === 'c-75' ? '06dff626-e6b9-44fc-8c2d-90a3b633e315.png' :
                        product.id === 'c-90' ? 'f1b0b239-cc0e-4006-adac-f4e1894d144b.png' :
                        'b0b48871-0303-43c8-b081-e50a6074db32.png'
                      }`}
                      alt={`${product.name} - Turbine Ventilator C Vent`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  <CardContent className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-3 transition-colors duration-300 group-hover:text-primary">
                        {product.name}
                      </h3>
                      <div className="space-y-2 text-sm text-neutral-600 mb-4">
                        <div><span className="font-medium">Bahan:</span> {product.material}</div>
                        <div><span className="font-medium">Bearing:</span> {product.bearing}</div>
                        <div><span className="font-medium">Diameter:</span> {product.diameter}</div>
                        <div><span className="font-medium">Dimensi:</span> {product.dimension}</div>
                        <div><span className="font-medium">Berat:</span> {product.weight}</div>
                        <div className="text-lg font-medium text-primary">
                          <span className="font-medium text-neutral-600 text-sm">Kapasitas Hisap:</span> {product.capacity}
                        </div>
                      </div>
                    </div>
                    <Link 
                      to={`/produk/${product.id}`}
                      className="w-full"
                    >
                      <Button 
                        variant="outline" 
                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                      >
                        Lihat Detail
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Product Features */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-light text-neutral-900 mb-6">
              Keunggulan Produk C Vent
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🇯🇵</div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Bearing Jepang</h3>
              <p className="text-neutral-600 text-sm">Bearing presisi dari Jepang untuk durabilitas maksimal</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🌡️</div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Iklim Tropis</h3>
              <p className="text-neutral-600 text-sm">Didesain khusus untuk cuaca Indonesia</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">🛡️</div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Material Premium</h3>
              <p className="text-neutral-600 text-sm">Aluminium & stainless steel grade industri</p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="text-2xl">✅</div>
              </div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">Garansi Resmi</h3>
              <p className="text-neutral-600 text-sm">Bergaransi resmi dengan dukungan purna jual</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight">
            Butuh Konsultasi Produk?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/80 font-light">
            Tim ahli kami siap membantu memilih produk C Vent yang tepat untuk kebutuhan Anda
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-4 rounded-full border-white text-white hover:bg-white hover:text-primary"
            >
              Minta Penawaran →
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-12 py-4 rounded-full border-white text-white hover:bg-white hover:text-primary"
            >
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}