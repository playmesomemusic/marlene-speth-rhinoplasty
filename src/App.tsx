import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import SurgeryPage from "./pages/SurgeryPage";
import NotFound from "./pages/NotFound";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const queryClient = new QueryClient();

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Layout>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/news" element={<News />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/septorhinoplasty" element={<SurgeryPage surgeryKey="septorhinoplasty" />} />
              <Route path="/septoplasty" element={<SurgeryPage surgeryKey="septoplasty" />} />
              <Route path="/sinus-surgery" element={<SurgeryPage surgeryKey="sinusSurgery" />} />
              <Route path="/turbinate-surgery" element={<SurgeryPage surgeryKey="turbinateSurgery" />} />
              <Route path="/skull-base" element={<SurgeryPage surgeryKey="skullBase" />} />
              <Route path="/revision-cases" element={<SurgeryPage surgeryKey="revisionCases" />} />
              <Route path="/further-ent" element={<SurgeryPage surgeryKey="furtherENT" />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
