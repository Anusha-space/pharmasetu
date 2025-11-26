import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { GraduationCap, Building2, ArrowRight } from "lucide-react";
import studentsImage from "@/assets/students-collab.jpg";
import companyImage from "@/assets/company-office.jpg";
import { Link } from "react-router-dom";


const TargetAudience = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-hero relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Built for Every Stakeholder
          </h2>
          <p className="text-lg text-muted-foreground">
            Whether you're a student starting your journey or a company seeking top talent, 
            PharmaSetu is designed for you.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 border-accent/30 hover:shadow-colorful transition-all duration-300 bg-card/90 backdrop-blur overflow-hidden">
            <img 
              src={studentsImage} 
              alt="Pharmacy students collaboration"
              className="w-full h-48 object-cover rounded-lg mb-6 shadow-elevated"
            />
            <div className="bg-gradient-primary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              For Students & Professionals
            </h3>
            
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Access thousands of job opportunities and internships across all pharmacy departments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Build a comprehensive professional profile to showcase your expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Stay updated on conferences, seminars, and academic achievements</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                <span>Connect directly with companies without intermediaries</span>
              </li>
            </ul>
            
           <Button
  asChild
  size="lg"
  className="w-full group bg-gradient-primary hover:opacity-90"
>
  <Link to="/signin">
    Join as a Professional
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</Button>

          </Card>
          
          <Card className="p-8 border-accent/30 hover:shadow-colorful transition-all duration-300 bg-card/90 backdrop-blur overflow-hidden">
            <img 
              src={companyImage} 
              alt="Pharmaceutical company office"
              className="w-full h-48 object-cover rounded-lg mb-6 shadow-elevated"
            />
            <div className="bg-gradient-secondary w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-glow">
              <Building2 className="w-8 h-8 text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-foreground mb-4">
              For Companies & Recruiters
            </h3>
            
            <ul className="space-y-3 mb-8 text-muted-foreground">
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <span>Direct access to verified profiles of pharmacy professionals and students</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <span>Post jobs across R&D, Manufacturing, QA, Regulatory, Marketing, and Sales</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <span>Streamlined recruitment process without commission-based intermediaries</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></div>
                <span>Find the right talent efficiently with advanced search and matching</span>
              </li>
            </ul>
            
            <Button
  asChild
  size="lg"
  className="w-full group bg-gradient-secondary hover:opacity-90"
>
  <Link to="/signin">
    Register Your Company
    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
  </Link>
</Button>

          </Card>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;