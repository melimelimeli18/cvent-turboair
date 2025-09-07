import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Kontak() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Hubungi <span className="font-bold">Kami</span>
          </h1>
          <p className="text-xl md:text-2xl font-light">
            Tim ahli kami siap membantu kebutuhan ventilasi Anda
          </p>
        </div>
      </section>

      <section className="py-20 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <Card className="border-0 shadow-xl">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold mb-6">Form Konsultasi</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Nama Perusahaan *</Label>
                      <Input id="company" placeholder="PT/CV Nama Perusahaan" />
                    </div>
                    <div>
                      <Label htmlFor="pic">PIC (Person in Charge) *</Label>
                      <Input id="pic" placeholder="Nama lengkap PIC" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="email@perusahaan.com" />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telepon/WhatsApp *</Label>
                      <Input id="phone" placeholder="+62 812 xxxx xxxx" />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Lokasi Proyek *</Label>
                    <Input id="location" placeholder="Kota/Provinsi" />
                  </div>

                  <div>
                    <Label htmlFor="building-type">Jenis Bangunan *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Pilih jenis bangunan" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pabrik">Pabrik/Industri</SelectItem>
                        <SelectItem value="gudang">Gudang/Warehouse</SelectItem>
                        <SelectItem value="office">Perkantoran</SelectItem>
                        <SelectItem value="retail">Retail/Mall</SelectItem>
                        <SelectItem value="restaurant">Restoran/F&B</SelectItem>
                        <SelectItem value="sport">Gedung Olahraga</SelectItem>
                        <SelectItem value="education">Sekolah/Universitas</SelectItem>
                        <SelectItem value="healthcare">Rumah Sakit/Klinik</SelectItem>
                        <SelectItem value="religious">Tempat Ibadah</SelectItem>
                        <SelectItem value="other">Lainnya</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="roof-area">Perkiraan Luas Atap (m²)</Label>
                    <Input id="roof-area" placeholder="Contoh: 2000" />
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan/Kebutuhan Khusus</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Jelaskan kondisi gedung, masalah ventilasi yang dihadapi, atau kebutuhan khusus lainnya..."
                      rows={4}
                    />
                  </div>

                  <Button className="w-full" size="lg">
                    Kirim Permintaan Konsultasi
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Kontak Langsung</h3>
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <p className="font-medium">Mobile / WhatsApp</p>
                        <p className="text-muted-foreground">0812 100 17 168</p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Chat WhatsApp
                        </Button>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">cvent.ventilator@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                        <Phone className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Website</p>
                        <p className="text-muted-foreground">turbineventilator.co.id</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-6">Lokasi Kantor</h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Kantor C Vent</p>
                        <p className="text-muted-foreground">Jl. Raya Bekasi Blok KM No.18, RT.1/RW.3</p>
                        <p className="text-muted-foreground">Jatinegara, Kec. Cakung, Kota Jakarta Timur</p>
                        <p className="text-muted-foreground">Daerah Khusus Ibukota Jakarta 13930</p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-primary/5 rounded-lg border-l-4 border-primary">
                    <h4 className="font-semibold text-primary mb-2">Angkat Telepon Anda dan Hubungi Kami Sekarang Juga!</h4>
                    <p className="text-muted-foreground">Jangan ragu untuk sekedar berkonsultasi karena Anda adalah prioritas utama dalam pekerjaan kami.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}