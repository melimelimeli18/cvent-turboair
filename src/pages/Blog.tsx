import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
  const articles = [
    {
      slug: "turbine-ventilator-vs-exhaust-fan",
      title: "Turbine Ventilator vs Exhaust Fan: Mana yang Lebih Efisien untuk Pabrik?",
      excerpt: "Analisis mendalam perbandingan efisiensi energi, biaya operasional, dan performa antara turbine ventilator dan exhaust fan untuk industri.",
      date: "15 Januari 2024",
      category: "Perbandingan",
      readTime: "5 min"
    },
    {
      slug: "cara-menurunkan-suhu-gudang-tanpa-ac",
      title: "Cara Menurunkan Suhu Gudang Tanpa AC: 5 Langkah Praktis",
      excerpt: "Panduan lengkap strategi ventilasi alami untuk gudang dan warehouse. Solusi hemat energi dengan hasil maksimal.",
      date: "8 Januari 2024", 
      category: "Tips & Tricks",
      readTime: "7 min"
    },
    {
      slug: "studi-kasus-hemat-biaya-operasional",
      title: "Studi Kasus: Hemat Biaya Operasional dengan Ventilasi Alami",
      excerpt: "Bagaimana PT Manufacturing Prima menghemat Rp 32 juta per bulan dengan instalasi C Vent dan mencapai ROI dalam 16 bulan.",
      date: "22 Desember 2023",
      category: "Studi Kasus", 
      readTime: "6 min"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Blog & <span className="font-bold">Insight</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Tips ventilasi, studi kasus, dan wawasan industri terkini
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
              <Card key={article.slug} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/30 flex items-center justify-center">
                  <div className="text-6xl">📰</div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Badge variant="secondary">{article.category}</Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Calendar size={14} />
                      {article.date}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-muted-foreground">{article.readTime}</span>
                    <Link to={`/blog/${article.slug}`} className="text-primary hover:text-primary/80 flex items-center gap-1 text-sm font-medium">
                      Baca Selengkapnya <ArrowRight size={14} />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}