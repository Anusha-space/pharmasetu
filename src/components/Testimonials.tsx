import { Card, CardContent } from "@/components/ui/card";
import { Quote, Star } from "lucide-react";
import networkingImage from "@/assets/networking.jpg";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "PharmD Graduate",
    company: "Now at Cipla Ltd.",
    content: "PharmaSetu helped me land my dream job in R&D. The platform made it so easy to connect with top pharmaceutical companies.",
    avatar: "PS",
    rating: 5,
  },
  {
    name: "Dr. Rajesh Kumar",
    role: "Clinical Pharmacist",
    company: "Apollo Hospitals",
    content: "The events calendar kept me updated on all major conferences. I've expanded my network tremendously through this platform.",
    avatar: "RK",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    role: "QA Manager",
    company: "Sun Pharma",
    content: "As a recruiter, PharmaSetu has streamlined our hiring process. We find qualified candidates faster than ever before.",
    avatar: "SP",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-gradient-soft relative overflow-hidden">
      <div className="absolute inset-0 bg-accent/5"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 rounded-2xl overflow-hidden shadow-colorful max-w-3xl mx-auto">
          <img 
            src={networkingImage} 
            alt="Professional pharmaceutical networking"
            className="w-full h-64 object-cover"
          />
        </div>
        
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Trusted by Pharmacy Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community members say about their experience with PharmaSetu
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur hover:shadow-colorful transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up border-accent/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-accent/40 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-tertiary text-tertiary" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.content}"
                </p>

                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-gradient-vibrant flex items-center justify-center text-white font-semibold shadow-glow">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-accent font-medium">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
