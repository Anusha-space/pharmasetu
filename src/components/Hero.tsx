import { Button } from "@/components/ui/button";
import { ArrowRight, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-gradient-secondary px-4 py-2 rounded-full text-sm font-medium text-white shadow-glow">
              <Users className="w-4 h-4" />
              <span>One Platform for All Pharmacy Opportunities</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-foreground">
              Your Complete Digital Partner for the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Pharmacy Field
              </span>
            </h1>
            
            <p className="text-xl text-muted-foreground max-w-xl leading-relaxed">
              Making information easy to access and helping everyone grow. Connect with opportunities, resources, and a supportive community—all in one place.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="group bg-gradient-primary hover:opacity-90 shadow-elevated text-lg px-8 rounded-full">
                <Link to="/opportunities">
                  Explore Opportunities
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-primary/30 hover:bg-primary/10 text-lg px-8 rounded-full">
                <Link to="/about">
                  Learn More
                </Link>
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">10K+</div>
                <div className="text-sm text-muted-foreground mt-1">Students & Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">500+</div>
                <div className="text-sm text-muted-foreground mt-1">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">2K+</div>
                <div className="text-sm text-muted-foreground mt-1">Active Opportunities</div>
              </div>
            </div>
          </div>
          
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-3xl overflow-hidden shadow-elevated hover:shadow-glow transition-all duration-500">
              <img 
                src={heroImage} 
                alt="PharmaSetu - Connecting pharmacy professionals and students with opportunities" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent pointer-events-none" />
            </div>
            
            <div className="absolute -top-6 -right-6 bg-gradient-secondary shadow-glow rounded-2xl p-5 flex items-center gap-3 border-2 border-white/20 animate-float backdrop-blur-sm">
              <div className="bg-white/30 backdrop-blur p-3 rounded-xl">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-lg">Verified</div>
                <div className="text-sm text-white/90">All Opportunities</div>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-gradient-vibrant shadow-glow rounded-2xl p-5 flex items-center gap-3 border-2 border-white/20 animate-float backdrop-blur-sm" style={{ animationDelay: '2s' }}>
              <div className="bg-white/30 backdrop-blur p-3 rounded-xl">
                <Users className="w-7 h-7 text-white" />
              </div>
              <div>
                <div className="font-semibold text-white text-lg">Growing</div>
                <div className="text-sm text-white/90">Community</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Organic shapes background */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-tertiary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default Hero;
