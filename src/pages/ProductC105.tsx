import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, ArrowLeft, CheckCircle, Crown } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductC105() {
  const specifications = [
    { label: "Bahan", value: "Aluminium dan Stainless Steel" },
    { label: "Bearing", value: "SKF Full Stainless Steel, Made in Japan" },
    { label: "Diameter", value: "105 cm = 42\"" },
    { label: "Dimensi", value: "147 x 134 x 134 cm" },
    { label: "Berat", value: "25 – 32 kg" },
    { label: "Kapasitas Hisap", value: "267,87 m³/menit" }
  ];

  const features = [
    "Kapasitas hisap terbesar dalam lini produk",
    "Bearing SKF premium untuk durabilitas maksimal",
    "Konstruksi extra heavy duty",
    "Cocok untuk lingkungan industri ekstrem",
    "Efisiensi energi tanpa konsumsi listrik",
    "Garansi premium dengan layanan prioritas"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation isDark={false} />

      {/* Breadcrumb */}
      <section className="py-6 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <Link 
            to="/produk" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft size={16} />
            Kembali ke Produk
          </Link>
        </div>
      </section>

      {/* Product Header */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Product Image Placeholder */}
            <div className="relative aspect-square overflow-hidden bg-neutral-100 rounded-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-primary/20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <Crown className="w-32 h-32 mb-4 mx-auto text-primary" />
                  <p className="text-lg font-medium">C Vent Type C-105</p>
                  <p className="text-sm">(42" Diameter)</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-gradient-to-r from-primary to-primary/80 text-white">Premium Series</Badge>
                <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
                  C Vent Type <span className="font-semibold text-primary">C-105 (42")</span>
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Ventilator industri dengan kapasitas terbesar, menggunakan bearing SKF Jepang untuk performa premium.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">267,87</div>
                  <p className="text-sm text-neutral-600">m³/menit</p>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                  <div className="text-2xl font-bold text-primary mb-1">SKF</div>
                  <p className="text-sm text-neutral-600">bearing premium</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                  Minta Penawaran
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-primary text-primary hover:bg-primary hover:text-white"
                >
                  Hubungi Kami
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 px-6 bg-neutral-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Specifications Table */}
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-8">Spesifikasi Produk</h2>
              <Card className="overflow-hidden border-0 shadow-lg">
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody>
                      {specifications.map((spec, index) => (
                        <tr key={index} className="border-b border-neutral-200 last:border-b-0">
                          <td className="px-6 py-4 font-medium text-neutral-900 bg-neutral-50">
                            {spec.label}
                          </td>
                          <td className="px-6 py-4 text-neutral-600">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-3xl font-light text-neutral-900 mb-8">Keunggulan Produk</h2>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <span className="text-neutral-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* Premium Highlight */}
              <div className="mt-8 p-6 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3 mb-3">
                  <Crown className="w-6 h-6 text-primary" />
                  <h3 className="font-semibold text-neutral-900">Premium Quality</h3>
                </div>
                <p className="text-sm text-neutral-600">
                  Menggunakan bearing SKF premium dari Jepang, standar internasional untuk aplikasi industri berat dan critical operations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-20 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-light text-neutral-900 text-center mb-12">
            Cocok Untuk Aplikasi
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">🏭</div>
              <h3 className="font-medium text-neutral-900">Pabrik Besar</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-medium text-neutral-900">Power Plant</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">🔬</div>
              <h3 className="font-medium text-neutral-900">Petrokimia</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">🛢️</div>
              <h3 className="font-medium text-neutral-900">Industri Berat</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-gradient-to-br from-primary to-primary/80 text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <Crown className="w-16 h-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Solusi Ventilasi Premium
          </h2>
          <p className="text-xl mb-8 text-white/80">
            C Vent C-105 dengan teknologi terdepan untuk kebutuhan industri critical
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Minta Penawaran Sekarang
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary"
            >
              Konsultasi Premium
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}