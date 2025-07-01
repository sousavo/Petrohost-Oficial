
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Hospedagem from "./pages/Hospedagem";
import Planos from "./pages/Planos";
import ConfigurarPlano from "./pages/ConfigurarPlano";
import Dominios from "./pages/Dominios";
import Email from "./pages/Email";
import Websites from "./pages/Websites";
import Servidores from "./pages/Servidores";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Cliente from "./pages/Cliente";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hospedagem" element={<Hospedagem />} />
          <Route path="/planos" element={<Planos />} />
          <Route path="/configurar-plano" element={<ConfigurarPlano />} />
          <Route path="/dominios" element={<Dominios />} />
          <Route path="/checkout/:dominio" element={<Checkout />} />
          <Route path="/email" element={<Email />} />
          <Route path="/websites" element={<Websites />} />
          <Route path="/servidores" element={<Servidores />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/cliente" element={<Cliente />} />
          <Route path="/admin" element={<Admin />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
