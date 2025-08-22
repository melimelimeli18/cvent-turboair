import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

export default function BlogDetail() {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Turbine Ventilator vs Exhaust Fan - Blog C Vent</title>
        <meta name="description" content="Perbandingan lengkap turbine ventilator vs exhaust fan untuk pabrik. Analisis efisiensi energi, biaya operasional, dan ROI." />
      </Helmet>
      
      <Navigation />

      <article className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8">
            <ArrowLeft size={16} />
            Kembali ke Blog
          </Link>
          
          <header className="mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Badge>Perbandingan</Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  15 Januari 2024
                </div>
                <div className="flex items-center gap-1">
                  <Clock size={14} />
                  5 min read
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-light leading-tight mb-6">
              Turbine Ventilator vs Exhaust Fan: Mana yang Lebih Efisien untuk Pabrik?
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              Analisis mendalam perbandingan efisiensi energi, biaya operasional, dan performa 
              antara turbine ventilator dan exhaust fan untuk aplikasi industri.
            </p>
          </header>

          <div className="prose prose-lg max-w-none">
            <p>Dalam dunia industri modern, pemilihan sistem ventilasi yang tepat dapat memberikan dampak signifikan terhadap efisiensi operasional dan biaya jangka panjang...</p>
            
            <h2>Perbandingan Biaya Operasional</h2>
            <p>Turbine ventilator beroperasi tanpa listrik, sementara exhaust fan membutuhkan energi listrik kontinyu...</p>
            
            <h2>Analisis ROI</h2>
            <p>Berdasarkan data dari 100+ instalasi C Vent, rata-rata ROI tercapai dalam 12-18 bulan...</p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}