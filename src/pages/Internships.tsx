import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Building2 } from "lucide-react";

const Internships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");

  const internships = [
    {
      id: 1,
      title: "Clinical Research Intern",
      company: "PharmaCorp Ltd.",
      location: "Mumbai, India",
      duration: "3 months",
      category: "Research",
      description: "Assist in clinical trials and drug development research.",
      deadline: "2025-12-15"
    },
    {
      id: 2,
      title: "Quality Control Intern",
      company: "MediLife Pharma",
      location: "Bangalore, India",
      duration: "6 months",
      category: "Quality Assurance",
      description: "Learn quality control processes in pharmaceutical manufacturing.",
      deadline: "2025-12-20"
    },
    {
      id: 3,
      title: "Hospital Pharmacy Intern",
      company: "Apollo Hospitals",
      location: "Delhi, India",
      duration: "4 months",
      category: "Clinical",
      description: "Gain hands-on experience in hospital pharmacy operations.",
      deadline: "2025-12-25"
    },
    {
      id: 4,
      title: "Drug Development Intern",
      company: "BioGen Research",
      location: "Hyderabad, India",
      duration: "6 months",
      category: "Research",
      description: "Work on formulation development and stability studies.",
      deadline: "2025-12-30"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Pharmacy Internships
            </h1>
            <p className="text-xl text-muted-foreground">
              Find hands-on learning opportunities in pharmaceutical industry
            </p>
          </div>

          <div className="bg-card rounded-3xl p-6 shadow-soft mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search internships..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="clinical">Clinical</SelectItem>
                  <SelectItem value="qa">Quality Assurance</SelectItem>
                  <SelectItem value="manufacturing">Manufacturing</SelectItem>
                </SelectContent>
              </Select>

              <Select value={locationFilter} onValueChange={setLocationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="mumbai">Mumbai</SelectItem>
                  <SelectItem value="bangalore">Bangalore</SelectItem>
                  <SelectItem value="delhi">Delhi</SelectItem>
                  <SelectItem value="hyderabad">Hyderabad</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {internships.map((internship) => (
              <Card key={internship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{internship.title}</CardTitle>
                      <CardDescription className="flex items-center gap-4 text-base">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {internship.company}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {internship.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {internship.duration}
                        </span>
                      </CardDescription>
                    </div>
                    <Badge className="bg-healing-green/10 text-healing-green hover:bg-healing-green/20">
                      {internship.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{internship.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">
                      Apply before: {new Date(internship.deadline).toLocaleDateString()}
                    </span>
                    <Button className="bg-gradient-primary">Apply Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Internships;
