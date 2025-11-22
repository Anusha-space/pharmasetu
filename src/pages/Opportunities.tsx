import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Briefcase, GraduationCap, Calendar, Award, MapPin, Clock } from "lucide-react";

const opportunityTypes = ["All", "Jobs", "Internships", "Conferences", "Hackathons", "Grants"];
const locations = ["All Locations", "Remote", "India", "USA", "UK", "Europe", "Asia"];

// Sample data
const opportunities = [
  {
    id: 1,
    type: "Job",
    title: "Clinical Pharmacist",
    company: "Apollo Hospitals",
    location: "Mumbai, India",
    salary: "₹8-12 LPA",
    posted: "2 days ago",
    tags: ["Full-time", "Clinical", "Hospital"],
    icon: Briefcase
  },
  {
    id: 2,
    type: "Internship",
    title: "Pharmaceutical Research Intern",
    company: "Dr. Reddy's Laboratories",
    location: "Hyderabad, India",
    salary: "₹15,000/month",
    posted: "5 days ago",
    tags: ["3 months", "Research", "Formulation"],
    icon: GraduationCap
  },
  {
    id: 3,
    type: "Conference",
    title: "International Pharmacy Summit 2025",
    company: "IPA",
    location: "Delhi, India",
    salary: "Early bird: ₹5,000",
    posted: "1 week ago",
    tags: ["March 15-17", "CME Credits", "Networking"],
    icon: Calendar
  },
  {
    id: 4,
    type: "Hackathon",
    title: "PharmaHack India 2025",
    company: "HealthTech Innovators",
    location: "Bangalore, India",
    salary: "Prize: ₹5 Lakhs",
    posted: "3 days ago",
    tags: ["Feb 20-22", "Healthcare Tech", "Innovation"],
    icon: Award
  },
  {
    id: 5,
    type: "Grant",
    title: "Young Researcher Grant",
    company: "ICMR",
    location: "Pan India",
    salary: "Up to ₹10 Lakhs",
    posted: "1 week ago",
    tags: ["Research", "PhD Students", "Deadline: Mar 30"],
    icon: Award
  },
  {
    id: 6,
    type: "Job",
    title: "Quality Assurance Manager",
    company: "Sun Pharma",
    location: "Vadodara, India",
    salary: "₹15-20 LPA",
    posted: "4 days ago",
    tags: ["Full-time", "QA/QC", "Manufacturing"],
    icon: Briefcase
  }
];

const Opportunities = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All Locations");

  const filteredOpportunities = opportunities.filter(opp => {
    const matchesSearch = opp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         opp.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === "All" || opp.type === selectedType.slice(0, -1);
    const matchesLocation = selectedLocation === "All Locations" || opp.location.includes(selectedLocation);
    
    return matchesSearch && matchesType && matchesLocation;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Discover Your Next <span className="bg-gradient-primary bg-clip-text text-transparent">Opportunity</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore verified jobs, internships, conferences, hackathons, and grants in the pharmacy field
            </p>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-8">
            
            {/* Filters */}
            <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
              <div className="grid md:grid-cols-12 gap-4">
                <div className="md:col-span-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      placeholder="Search opportunities..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <Select value={selectedType} onValueChange={setSelectedType}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Type" />
                    </SelectTrigger>
                    <SelectContent>
                      {opportunityTypes.map(type => (
                        <SelectItem key={type} value={type}>{type}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-3">
                  <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Location" />
                    </SelectTrigger>
                    <SelectContent>
                      {locations.map(loc => (
                        <SelectItem key={loc} value={loc}>{loc}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Type badges */}
            <div className="flex flex-wrap gap-3">
              {opportunityTypes.map(type => (
                <Button
                  key={type}
                  variant={selectedType === type ? "default" : "outline"}
                  onClick={() => setSelectedType(type)}
                  className="rounded-full"
                >
                  {type}
                </Button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-muted-foreground">
              Showing {filteredOpportunities.length} opportunities
            </div>

            {/* Opportunities grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredOpportunities.map(opp => {
                const Icon = opp.icon;
                return (
                  <Card key={opp.id} className="hover:shadow-elevated transition-shadow duration-300 border-border/50 rounded-2xl overflow-hidden">
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <Badge variant="secondary" className="rounded-full">{opp.type}</Badge>
                      </div>
                      <CardTitle className="text-xl">{opp.title}</CardTitle>
                      <CardDescription className="text-base">{opp.company}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{opp.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <span>{opp.salary}</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {opp.tags.map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="rounded-full">{tag}</Badge>
                        ))}
                      </div>
                      <div className="flex items-center justify-between pt-2 border-t border-border/50">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          <span>{opp.posted}</span>
                        </div>
                        <Button className="rounded-full">View Details</Button>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {filteredOpportunities.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No opportunities found matching your criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => {
                  setSearchTerm("");
                  setSelectedType("All");
                  setSelectedLocation("All Locations");
                }}>
                  Clear Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Opportunities;
