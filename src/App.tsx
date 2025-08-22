import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import Galeri from "./pages/Galeri";
import Klien from "./pages/Klien";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import Kontak from "./pages/Kontak";
import NotFound from "./pages/NotFound";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/tentang-kami" element={<TentangKami />} />
      <Route path="/produk" element={<Produk />} />
      <Route path="/galeri" element={<Galeri />} />
      <Route path="/klien" element={<Klien />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
