import { Card } from "@/components/ui/card";
import { 
  Briefcase, 
  Users, 
  Calendar, 
  Shield, 
  TrendingUp, 
  Search 
} from "lucide-react";
import featuresImage from "@/assets/features-lab.jpg";

const features = [
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Access real-time updates on positions across R&D, Manufacturing, QA, Regulatory Affairs, Marketing, and Sales."
  },
  {
    icon: Calendar,
    title: "Academic Events",
    description: "Stay informed about conferences, seminars, workshops, and academic achievements in the pharmaceutical sector."
  },
  {
    icon: Users,
    title: "Professional Profiles",
    description: "Create comprehensive profiles showcasing your skills, experience, and qualifications—similar to LinkedIn for pharmacy."
  },
  {
    icon: Shield,
    title: "Transparent Recruitment",
    description: "Direct connections between companies and candidates, eliminating intermediaries and reducing malpractices."
  },
  {
    icon: Search,
    title: "Smart Matching",
    description: "Advanced algorithms connect the right candidates with the right opportunities based on skills and preferences."
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Track your professional development and access resources to advance your pharmacy career."
  }
];

const Features = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need in One Platform
          </h2>
          <p className="text-lg text-muted-foreground">
            PharmaSetu bridges the gap between pharmacy professionals and opportunities, 
            creating a seamless ecosystem for growth and collaboration.
          </p>
        </div>
        
        <div className="mb-12 rounded-2xl overflow-hidden shadow-colorful max-w-4xl mx-auto">
          <img 
            src={featuresImage} 
            alt="Pharmaceutical research laboratory"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-colorful transition-all duration-300 border-accent/20 group cursor-pointer hover:scale-105 bg-card/80 backdrop-blur"
            >
              <div className="bg-gradient-vibrant w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-glow">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;