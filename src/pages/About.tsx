import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Heart, Users, Target, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="bg-gradient-hero py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">PharmaSetu</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Building bridges in the pharmacy ecosystem, one connection at a time.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-16">
            
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                PharmaSetu exists to make information easy to access and help everyone in the pharmacy field grow. 
                We believe that opportunities, knowledge, and connections should be available to all—students, 
                professionals, researchers, and companies alike.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our platform eliminates the fragmentation of information by bringing together jobs, internships, 
                conferences, hackathons, grants, and learning resources in one unified, accessible space.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-feature rounded-3xl p-8 shadow-card border border-border/50 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">Our Values</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Transparency and trust in every connection</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Accessibility for all members of the pharmacy community</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Open collaboration and knowledge sharing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Innovation in connecting professionals and opportunities</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-feature rounded-3xl p-8 shadow-card border border-border/50 space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-secondary flex items-center justify-center">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-semibold text-foreground">What We Do</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Connect students and professionals with verified opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Enable companies to find qualified pharmacy talent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Provide comprehensive resources and learning materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Foster community engagement and professional growth</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-warm rounded-3xl p-12 shadow-elevated border border-accent/20">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-white/80 backdrop-blur flex items-center justify-center">
                    <TrendingUp className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold text-foreground">Why PharmaSetu?</h2>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The pharmacy field is vast, dynamic, and full of opportunity—but information is scattered across 
                  countless platforms, making it hard to find what you need when you need it. PharmaSetu changes that.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We're not just another job board or event listing site. We're a complete ecosystem that understands 
                  the unique needs of pharmacy professionals, students, and companies. From your first internship to 
                  continuing education and beyond, PharmaSetu grows with you.
                </p>
              </div>
            </div>

            <div className="space-y-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center">Our Commitment</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Community First</h3>
                  <p className="text-muted-foreground">
                    Every feature we build is designed with the pharmacy community's needs at heart
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-secondary flex items-center justify-center shadow-glow">
                    <Heart className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Open & Transparent</h3>
                  <p className="text-muted-foreground">
                    Built with open-source principles, ensuring trust and accountability
                  </p>
                </div>
                <div className="text-center space-y-3">
                  <div className="w-20 h-20 mx-auto rounded-2xl bg-gradient-vibrant flex items-center justify-center shadow-glow">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">Continuous Growth</h3>
                  <p className="text-muted-foreground">
                    Constantly evolving based on community feedback and emerging needs
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
