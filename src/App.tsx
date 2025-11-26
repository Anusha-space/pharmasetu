import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import About from "./pages/About";
import Opportunities from "./pages/Opportunities";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Internships from "./pages/Internships";
import Subscriptions from "./pages/Subscriptions";
import Scholarships from "./pages/Scholarships";
import CompetitiveExams from "./pages/CompetitiveExams";
import AICareerPath from "./pages/AICareerPath";
import AIResumeBuilder from "./pages/AIResumeBuilder";
import NotFound from "./pages/NotFound";
import Grants from "./pages/Grants";
import References from "./pages/References";
import SignIn from "./pages/SignIn";

import FloatingAd from "@/components/FloatingAd";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* ✅ Floating ad visible on all pages */}
        <FloatingAd />

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/opportunities" element={<Opportunities />} />
          <Route path="/internships" element={<Internships />} />
          <Route path="/scholarships" element={<Scholarships />} />
          <Route path="/competitive-exams" element={<CompetitiveExams />} />
          <Route path="/events" element={<Events />} />
          <Route path="/subscriptions" element={<Subscriptions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/ai-career-path" element={<AICareerPath />} />
          <Route path="/ai-resume-builder" element={<AIResumeBuilder />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/references" element={<References />} />
          <Route path="/signin" element={<SignIn />} />


          {/* Always keep this last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
