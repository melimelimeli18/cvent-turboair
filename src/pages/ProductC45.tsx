import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Wind, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductC45() {
  const specifications = [
    { label: "Bahan", value: "Aluminium dan Stainless Steel" },
    { label: "Bearing", value: "Full Stainless Steel, Made in Japan" },
    { label: "Diameter", value: "45 cm = 18\"" },
    { label: "Dimensi", value: "75 x 68 x 68 cm" },
    { label: "Berat", value: "6 – 8,5 kg" },
    { label: "Kapasitas Hisap", value: "62,47 m³/menit" }
  ];

  const features = [
    "Desain compact untuk ruang terbatas",
    "Material tahan korosi dan cuaca ekstrem",
    "Bearing Jepang untuk rotasi halus",
    "Instalasi mudah dan cepat",
    "Operasional tanpa listrik",
    "Garansi resmi 3-5 tahun"
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
              <div className="absolute inset-0 bg-primary/30"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-neutral-500">
                  <Wind className="w-24 h-24 mb-4 mx-auto" />
                  <p className="text-lg font-medium">C Vent Type C-45</p>
                  <p className="text-sm">(18" Diameter)</p>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <Badge variant="secondary" className="mb-4">Produk Unggulan</Badge>
                <h1 className="text-4xl md:text-5xl font-light text-neutral-900 mb-4">
                  C Vent Type <span className="font-semibold text-primary">C-45 (18")</span>
                </h1>
                <p className="text-xl text-neutral-600 leading-relaxed">
                  Ringan, tahan karat, cocok untuk bangunan kecil hingga menengah dengan kapasitas hisap optimal.
                </p>
              </div>

              {/* Key Highlights */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">62,47</div>
                  <p className="text-sm text-neutral-600">m³/menit</p>
                </div>
                <div className="text-center p-4 bg-neutral-50 rounded-lg">
                  <div className="text-2xl font-bold text-primary mb-1">6-8,5</div>
                  <p className="text-sm text-neutral-600">kg berat</p>
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
              <div className="text-4xl mb-3">🏠</div>
              <h3 className="font-medium text-neutral-900">Rumah Tinggal</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">🏢</div>
              <h3 className="font-medium text-neutral-900">Kantor Kecil</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">🏪</div>
              <h3 className="font-medium text-neutral-900">Toko/Ruko</h3>
            </div>
            <div className="text-center p-6 rounded-lg hover:bg-neutral-50 transition-colors">
              <div className="text-4xl mb-3">🚗</div>
              <h3 className="font-medium text-neutral-900">Workshop</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-6 bg-primary text-white text-center">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl md:text-5xl font-light mb-6">
            Tertarik dengan C Vent C-45?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Dapatkan konsultasi gratis dan penawaran terbaik untuk kebutuhan ventilasi Anda
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
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}