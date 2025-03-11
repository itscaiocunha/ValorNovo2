
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GestaoInovacao from "./pages/GestaoInovacao";
import CaptacaoRecursos from "./pages/CaptacaoRecursos";
import GestaoHibrida from "./pages/GestaoHibrida";
import NovosNegocios from "./pages/NovosNegocios";
import InteligenciaEstrategica from "./pages/InteligenciaEstrategica";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/servicos/gestao-inovacao" element={<GestaoInovacao />} />
          <Route path="/servicos/captacao-finep" element={<CaptacaoRecursos />} />
          <Route path="/servicos/gestao-projetos" element={<GestaoHibrida />} />
          <Route path="/servicos/pesquisas-clinicas" element={<NovosNegocios />} />
          <Route path="/servicos/planejamento-estrategico" element={<InteligenciaEstrategica />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;