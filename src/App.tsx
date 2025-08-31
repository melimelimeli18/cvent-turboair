import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import TentangKami from "./pages/TentangKami";
import Produk from "./pages/Produk";
import ProductC45 from "./pages/ProductC45";
import ProductC60 from "./pages/ProductC60";
import ProductC75 from "./pages/ProductC75";
import ProductC90 from "./pages/ProductC90";
import ProductC105 from "./pages/ProductC105";
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
      <Route path="/produk/c-45" element={<ProductC45 />} />
      <Route path="/produk/c-60" element={<ProductC60 />} />
      <Route path="/produk/c-75" element={<ProductC75 />} />
      <Route path="/produk/c-90" element={<ProductC90 />} />
      <Route path="/produk/c-105" element={<ProductC105 />} />
      {/* <Route path="/galeri" element={<Galeri />} /> */} {/* Temporarily hidden */}
      <Route path="/klien" element={<Klien />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetail />} />
      <Route path="/kontak" element={<Kontak />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
