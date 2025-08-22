import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/tentang-kami" element={<TentangKami />} />
        <Route path="/produk" element={<Produk />} />
        <Route path="/galeri" element={<Galeri />} />
        <Route path="/klien" element={<Klien />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/kontak" element={<Kontak />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;
