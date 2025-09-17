import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

interface FormData {
  company: string;
  pic: string;
  email: string;
  phone: string;
  location: string;
  buildingType: string;
  roofArea: string;
  message: string;
}

export default function Kontak() {
  const [formData, setFormData] = useState<FormData>({
    company: '',
    pic: '',
    email: '',
    phone: '',
    location: '',
    buildingType: '',
    roofArea: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({
      ...prev,
      buildingType: value
    }));
  };

  const getBuildingTypeLabel = (value: string): string => {
    const buildingTypes: { [key: string]: string } = {
      'pabrik': 'Pabrik/Industri',
      'gudang': 'Gudang/Warehouse',
      'office': 'Perkantoran',
      'retail': 'Retail/Mall',
      'restaurant': 'Restoran/F&B',
      'sport': 'Gedung Olahraga',
      'education': 'Sekolah/Universitas',
      'healthcare': 'Rumah Sakit/Klinik',
      'religious': 'Tempat Ibadah',
      'other': 'Lainnya'
    };
    return buildingTypes[value] || value;
  };

  const validateForm = (): boolean => {
    const requiredFields = ['company', 'pic', 'email', 'phone', 'location', 'buildingType'];
    const emptyFields = requiredFields.filter(field => !formData[field as keyof FormData]);
    
    if (emptyFields.length > 0) {
      toast({
        title: "Form tidak lengkap",
        description: "Mohon isi semua field yang wajib (*)",
        variant: "destructive"
      });
      return false;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast({
        title: "Email tidak valid",
        description: "Mohon masukkan format email yang benar",
        variant: "destructive"
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast({
          title: "Berhasil terkirim!",
          description: "Permintaan konsultasi Anda telah terkirim. Tim kami akan menghubungi Anda segera.",
        });
        
        // Reset form
        setFormData({
          company: '',
          pic: '',
          email: '',
          phone: '',
          location: '',
          buildingType: '',
          roofArea: '',
          message: ''
        });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Gagal mengirim",
        description: "Terjadi kesalahan saat mengirim permintaan. Silakan coba lagi atau hubungi kami langsung.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="company">Nama Perusahaan *</Label>
                      <Input 
                        id="company" 
                        placeholder="PT/CV Nama Perusahaan"
                        value={formData.company}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="pic">Nama Penanggung Jawab *</Label>
                      <Input 
                        id="pic" 
                        placeholder="Nama Lengkap"
                        value={formData.pic}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="email@perusahaan.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Telepon/WhatsApp *</Label>
                      <Input 
                        id="phone" 
                        placeholder="+62 812 xxxx xxxx"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="location">Lokasi Proyek *</Label>
                    <Input 
                      id="location" 
                      placeholder="Kota/Provinsi"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="building-type">Jenis Bangunan *</Label>
                    <Select value={formData.buildingType} onValueChange={handleSelectChange}>
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
                    <Label htmlFor="roofArea">Perkiraan Luas Atap (m²)</Label>
                    <Input 
                      id="roofArea" 
                      placeholder="Contoh: 2000"
                      value={formData.roofArea}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Pesan/Kebutuhan Khusus</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Jelaskan kondisi gedung, masalah ventilasi yang dihadapi, atau kebutuhan khusus lainnya..."
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full" 
                    size="lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Mengirim..." : "Kirim Permintaan Konsultasi"}
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
                        <p className="font-medium">No Telepon / WhatsApp</p>
                        <p className="text-muted-foreground">62+ 8121 0017 168</p>
                        <Button variant="outline" size="sm" className="mt-2" asChild>
                          <a href="https://wa.me/6281210017168?text=Halo%2C%20saya%20tertarik%20dengan%20produk%20turbin%20ventilator%20dari%20Cvent.%20Bisa%20dibantu%20berikan%20informasi%20lebih%20lanjut%3F" target="_blank" rel="noopener noreferrer">
                            Chat WhatsApp
                          </a>
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