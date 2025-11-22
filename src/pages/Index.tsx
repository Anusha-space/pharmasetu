import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import Advertisements from "@/components/Advertisements";
import AIToolsSection from "@/components/AIToolsSection";
import HowItWorks from "@/components/HowItWorks";
import TargetAudience from "@/components/TargetAudience";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <Stats />
      <Advertisements />
      <AIToolsSection />
      <HowItWorks />
      <TargetAudience />
      <Testimonials />
      <CTA />
      <Footer />
      <Chatbot />
    </div>
  );
};

export default Index;