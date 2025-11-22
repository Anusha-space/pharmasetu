import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const Advertisements = () => {
  const ads = [
    {
      id: 1,
      company: "PharmaLife Industries",
      title: "New Drug Launch - CardioShield",
      description: "Revolutionary cardiovascular medication now available",
      image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=200&fit=crop",
      tag: "Sponsored"
    },
    {
      id: 2,
      company: "MediTech Solutions",
      title: "Advanced Pharmacy Management System",
      description: "Streamline your pharmacy operations with AI-powered tools",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=200&fit=crop",
      tag: "Featured"
    },
    {
      id: 3,
      company: "HealthCare Academy",
      title: "Professional CE/CME Courses",
      description: "Accredited continuing education for pharmacists",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop",
      tag: "Sponsored"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">Industry Partners</h2>
              <p className="text-muted-foreground">Trusted solutions from leading pharmaceutical companies</p>
            </div>
            <Badge variant="outline" className="text-sm">Advertisement</Badge>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ads.map((ad) => (
              <Card key={ad.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="relative">
                  <img 
                    src={ad.image} 
                    alt={ad.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-3 right-3 bg-pharma-blue">
                    {ad.tag}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-muted-foreground mb-1">{ad.company}</p>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{ad.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{ad.description}</p>
                  <Button variant="outline" className="w-full group-hover:bg-gradient-primary group-hover:text-white transition-all">
                    Learn More
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Advertisements;
