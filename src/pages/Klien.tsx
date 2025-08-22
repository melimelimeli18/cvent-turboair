import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Klien() {
  const companies = [
    { name: "PT Indofood Fritolay Makmur", industry: "Makanan & Minuman", location: "Tangerang" },
    { name: "PT Unilever Indonesia", industry: "Consumer Goods", location: "Jakarta" },
    { name: "PT Astra International", industry: "Otomotif", location: "Jakarta" },
    { name: "PT Pertamina (Persero)", industry: "Migas", location: "Jakarta" },
    { name: "PT PLN (Persero)", industry: "Energi", location: "Jakarta" },
    { name: "PT Bank Central Asia", industry: "Perbankan", location: "Jakarta" },
    { name: "PT Telkom Indonesia", industry: "Telekomunikasi", location: "Bandung" },
    { name: "PT Garuda Indonesia", industry: "Penerbangan", location: "Jakarta" },
    { name: "PT Wings Surya", industry: "Consumer Products", location: "Surabaya" },
    { name: "PT Mayora Indah", industry: "Makanan & Minuman", location: "Jakarta" },
    { name: "PT Kalbe Farma", industry: "Farmasi", location: "Jakarta" },
    { name: "PT Sido Muncul", industry: "Jamu & Obat Tradisional", location: "Semarang" },
    { name: "PT Gudang Garam", industry: "Tembakau", location: "Kediri" },
    { name: "PT Adaro Energy", industry: "Pertambangan", location: "Jakarta" },
    { name: "PT Sinar Mas Agro", industry: "Agribisnis", location: "Jakarta" },
    { name: "PT Toyota Motor Manufacturing", industry: "Otomotif", location: "Karawang" },
    { name: "PT Honda Prospect Motor", industry: "Otomotif", location: "Jakarta" },
    { name: "PT Yamaha Indonesia Motor", industry: "Otomotif", location: "Bekasi" },
    { name: "PT Suzuki Indomobil Motor", industry: "Otomotif", location: "Jakarta" },
    { name: "PT Panasonic Manufacturing", industry: "Elektronik", location: "Tangerang" },
    { name: "PT LG Electronics Indonesia", industry: "Elektronik", location: "Bekasi" },
    { name: "PT Samsung Electronics", industry: "Elektronik", location: "Bekasi" },
    { name: "PT Sharp Electronics", industry: "Elektronik", location: "Karawang" },
    { name: "PT Polytron", industry: "Elektronik", location: "Kudus" },
    { name: "PT Aqua Golden Mississippi", industry: "Makanan & Minuman", location: "Bekasi" },
    { name: "PT Coca-Cola Indonesia", industry: "Makanan & Minuman", location: "Jakarta" },
    { name: "PT Pepsi Cola Indonesia", industry: "Makanan & Minuman", location: "Jakarta" },
    { name: "PT Nestle Indonesia", industry: "Makanan & Minuman", location: "Jakarta" },
    { name: "PT Mondelez Indonesia", industry: "Makanan & Minuman", location: "Surabaya" },
    { name: "PT Danone Indonesia", industry: "Makanan & Minuman", location: "Jakarta" },
    { name: "PT Tzu Chi Hospital", industry: "Kesehatan", location: "Jakarta" },
    { name: "RS Siloam Hospitals", industry: "Kesehatan", location: "Jakarta" },
    { name: "RS Pondok Indah", industry: "Kesehatan", location: "Jakarta" },
    { name: "RS Mayapada Hospital", industry: "Kesehatan", location: "Jakarta" },
    { name: "PT Kimia Farma", industry: "Farmasi", location: "Jakarta" },
    { name: "PT Dexa Medica", industry: "Farmasi", location: "Palembang" },
    { name: "PT Novartis Indonesia", industry: "Farmasi", location: "Jakarta" },
    { name: "PT Pfizer Indonesia", industry: "Farmasi", location: "Jakarta" },
    { name: "Universitas Indonesia", industry: "Pendidikan", location: "Depok" },
    { name: "Institut Teknologi Bandung", industry: "Pendidikan", location: "Bandung" },
    { name: "Universitas Gadjah Mada", industry: "Pendidikan", location: "Yogyakarta" },
    { name: "Universitas Airlangga", industry: "Pendidikan", location: "Surabaya" },
    { name: "PT Krakatau Steel", industry: "Logam & Baja", location: "Cilegon" },
    { name: "PT Aneka Tambang", industry: "Pertambangan", location: "Jakarta" },
    { name: "PT Timah (Persero)", industry: "Pertambangan", location: "Pangkalpinang" },
    { name: "PT Freeport Indonesia", industry: "Pertambangan", location: "Jakarta" },
    { name: "PT Bukit Asam", industry: "Pertambangan", location: "Palembang" },
    { name: "PT Pos Indonesia", industry: "Logistik", location: "Bandung" },
    { name: "PT JNE", industry: "Logistik", location: "Jakarta" },
    { name: "PT TIKI", industry: "Logistik", location: "Jakarta" },
    { name: "PT J&T Express", industry: "Logistik", location: "Jakarta" },
    { name: "PT Sicepat Ekspres", industry: "Logistik", location: "Jakarta" },
    { name: "PT Shopee Indonesia", industry: "E-commerce", location: "Jakarta" },
    { name: "PT Tokopedia", industry: "E-commerce", location: "Jakarta" },
    { name: "PT Bukalapak", industry: "E-commerce", location: "Jakarta" },
    { name: "PT Blibli.com", industry: "E-commerce", location: "Jakarta" },
    { name: "PT Go-Jek Indonesia", industry: "Teknologi", location: "Jakarta" },
    { name: "PT Grab Indonesia", industry: "Teknologi", location: "Jakarta" },
    { name: "PT Traveloka", industry: "Teknologi", location: "Jakarta" },
    { name: "PT Tiket.com", industry: "Teknologi", location: "Jakarta" },
    { name: "PT OVO", industry: "Fintech", location: "Jakarta" },
    { name: "PT Dana Indonesia", industry: "Fintech", location: "Jakarta" },
    { name: "PT LinkAja", industry: "Fintech", location: "Jakarta" },
    { name: "PT Jenius", industry: "Fintech", location: "Jakarta" },
    { name: "PT Holcim Indonesia", industry: "Semen", location: "Jakarta" },
    { name: "PT Semen Indonesia", industry: "Semen", location: "Gresik" },
    { name: "PT Semen Padang", industry: "Semen", location: "Padang" },
    { name: "PT Indocement Tunggal Prakarsa", industry: "Semen", location: "Jakarta" },
    { name: "PT Chandra Asri Petrochemical", industry: "Petrokimia", location: "Cilegon" },
    { name: "PT Pupuk Indonesia", industry: "Pupuk", location: "Jakarta" },
    { name: "PT Petrokimia Gresik", industry: "Pupuk", location: "Gresik" },
    { name: "PT Wijaya Karya", industry: "Konstruksi", location: "Jakarta" },
    { name: "PT Adhi Karya", industry: "Konstruksi", location: "Jakarta" },
    { name: "PT Waskita Karya", industry: "Konstruksi", location: "Jakarta" },
    { name: "PT PP (Pembangunan Perumahan)", industry: "Konstruksi", location: "Jakarta" },
    { name: "PT Hutama Karya", industry: "Konstruksi", location: "Jakarta" },
    { name: "Masjid Istiqlal", industry: "Tempat Ibadah", location: "Jakarta" },
    { name: "Masjid Agung Demak", industry: "Tempat Ibadah", location: "Demak" },
    { name: "Gereja Katedral Jakarta", industry: "Tempat Ibadah", location: "Jakarta" },
    { name: "Vihara Dharma Bhakti", industry: "Tempat Ibadah", location: "Jakarta" },
    { name: "Mall Taman Anggrek", industry: "Retail", location: "Jakarta" },
    { name: "Grand Indonesia Shopping Town", industry: "Retail", location: "Jakarta" },
    { name: "Plaza Indonesia", industry: "Retail", location: "Jakarta" },
    { name: "Senayan City", industry: "Retail", location: "Jakarta" },
    { name: "Mall Kelapa Gading", industry: "Retail", location: "Jakarta" },
    { name: "Lippo Mall Kemang", industry: "Retail", location: "Jakarta" },
    { name: "Mal Gandaria City", industry: "Retail", location: "Jakarta" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="py-20 px-6 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Dipercaya Ratusan <span className="font-bold">Perusahaan di Indonesia</span>
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl mx-auto">
            C Vent telah digunakan di berbagai sektor: pabrik, gudang, perkantoran, rumah makan, hingga fasilitas publik.
          </p>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="py-20 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {companies.map((company, index) => (
              <div 
                key={index} 
                className="bg-white border border-[#EAEAEA] p-6 rounded-lg hover:border-primary/30 transition-colors duration-300"
              >
                <div className="space-y-4">
                  {/* Logo Placeholder */}
                  <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                    <div className="w-12 h-8 bg-gray-200 rounded"></div>
                  </div>
                  
                  {/* Company Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-[#222222] text-sm leading-tight">
                      {company.name}
                    </h3>
                    <p className="text-xs text-gray-600 font-medium">
                      {company.industry}
                    </p>
                    <p className="text-xs text-gray-500">
                      {company.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground text-lg">
              <strong>500+ perusahaan</strong> telah mempercayakan solusi ventilasi mereka kepada C Vent
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}