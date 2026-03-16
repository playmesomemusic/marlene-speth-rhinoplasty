import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import About from "./pages/About";
import News from "./pages/News";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Septorhinoplasty from "./pages/surgeries/Septorhinoplasty";
import Septoplasty from "./pages/surgeries/Septoplasty";
import SinusSurgery from "./pages/surgeries/SinusSurgery";
import TurbinateSurgery from "./pages/surgeries/TurbinateSurgery";
import SkullBase from "./pages/surgeries/SkullBase";
import RevisionCases from "./pages/surgeries/RevisionCases";
import FurtherENT from "./pages/surgeries/FurtherENT";
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
            <Route path="/septorhinoplasty" element={<Septorhinoplasty />} />
            <Route path="/septoplasty" element={<Septoplasty />} />
            <Route path="/sinus-surgery" element={<SinusSurgery />} />
            <Route path="/turbinate-surgery" element={<TurbinateSurgery />} />
            <Route path="/skull-base" element={<SkullBase />} />
            <Route path="/revision-cases" element={<RevisionCases />} />
            <Route path="/further-ent" element={<FurtherENT />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
