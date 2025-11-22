import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Download, ExternalLink } from "lucide-react";

const resources = [
  {
    category: "Study Materials",
    icon: BookOpen,
    items: [
      { title: "Pharmacology Quick Reference", type: "PDF", size: "2.5 MB" },
      { title: "Clinical Pharmacy Guidelines", type: "PDF", size: "4.8 MB" },
      { title: "Drug Interaction Charts", type: "PDF", size: "1.2 MB" }
    ]
  },
  {
    category: "Video Tutorials",
    icon: Video,
    items: [
      { title: "Patient Counseling Techniques", type: "Video", duration: "45 min" },
      { title: "Pharmaceutical Calculations", type: "Video", duration: "30 min" },
      { title: "Medication Therapy Management", type: "Video", duration: "1 hour" }
    ]
  },
  {
    category: "Research Papers",
    icon: FileText,
    items: [
      { title: "Latest Drug Discoveries 2024", type: "Research", authors: "Multiple" },
      { title: "Clinical Trials Methodology", type: "Research", authors: "Multiple" },
      { title: "Pharmaceutical Innovation Trends", type: "Research", authors: "Multiple" }
    ]
  }
];

const Resources = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Resource <span className="bg-gradient-primary bg-clip-text text-transparent">Library</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Access study materials, research papers, video tutorials, and professional development resources
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            
            {resources.map((resource, idx) => {
              const Icon = resource.icon;
              return (
                <div key={idx} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-glow">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-foreground">{resource.category}</h2>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {resource.items.map((item, itemIdx) => (
                      <Card key={itemIdx} className="hover:shadow-elevated transition-all duration-300 border-border/50 rounded-2xl">
                        <CardHeader>
                          <CardTitle className="text-lg">{item.title}</CardTitle>
                          <CardDescription>
                            {'size' in item && <span>{item.type} • {item.size}</span>}
                            {'duration' in item && <span>{item.type} • {item.duration}</span>}
                            {'authors' in item && <span>{item.type} • {item.authors}</span>}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                          <Badge variant="secondary" className="rounded-full">{item.type}</Badge>
                          <div className="flex gap-2">
                            <Button size="sm" className="flex-1 rounded-full">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </Button>
                            <Button size="sm" variant="outline" className="rounded-full">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}

            <div className="bg-gradient-warm rounded-3xl p-12 text-center shadow-elevated">
              <h3 className="text-2xl font-bold text-foreground mb-4">Looking for Something Specific?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Can't find what you need? Request specific resources or contribute your own materials to help the community grow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="rounded-full">Request Resources</Button>
                <Button size="lg" variant="outline" className="rounded-full">Contribute Resources</Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
