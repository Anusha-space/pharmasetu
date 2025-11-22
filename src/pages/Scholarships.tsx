import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Search, Award, Calendar, DollarSign } from "lucide-react";

const Scholarships = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");

  const scholarships = [
    {
      id: 1,
      title: "PharmD Excellence Scholarship",
      provider: "Indian Pharmaceutical Association",
      amount: "₹50,000",
      deadline: "2025-12-31",
      category: "Academic",
      eligibility: "PharmD students with 85%+ marks",
      description: "Merit-based scholarship for outstanding PharmD students."
    },
    {
      id: 2,
      title: "Research Grant for Pharmacy Students",
      provider: "CSIR India",
      amount: "₹1,00,000",
      deadline: "2026-01-15",
      category: "Research",
      eligibility: "M.Pharm/PhD students with research proposal",
      description: "Funding for innovative pharmaceutical research projects."
    },
    {
      id: 3,
      title: "Women in Pharma Scholarship",
      provider: "Ministry of Health",
      amount: "₹75,000",
      deadline: "2026-01-30",
      category: "Diversity",
      eligibility: "Female pharmacy students from rural areas",
      description: "Supporting women pursuing pharmacy education."
    },
    {
      id: 4,
      title: "Clinical Pharmacy Fellowship",
      provider: "Apollo Hospitals Foundation",
      amount: "₹2,00,000",
      deadline: "2026-02-15",
      category: "Professional",
      eligibility: "Registered pharmacists with 2+ years experience",
      description: "Advanced training in clinical pharmacy practice."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Scholarships & Grants
            </h1>
            <p className="text-xl text-muted-foreground">
              Financial support for your pharmacy education and research
            </p>
          </div>

          <div className="bg-card rounded-3xl p-6 shadow-soft mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  placeholder="Search scholarships..."
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
                  <SelectItem value="academic">Academic Excellence</SelectItem>
                  <SelectItem value="research">Research</SelectItem>
                  <SelectItem value="diversity">Diversity & Inclusion</SelectItem>
                  <SelectItem value="professional">Professional Development</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {scholarships.map((scholarship) => (
              <Card key={scholarship.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2 flex items-center gap-2">
                        <Award className="w-6 h-6 text-pharma-blue" />
                        {scholarship.title}
                      </CardTitle>
                      <CardDescription className="text-base">
                        {scholarship.provider}
                      </CardDescription>
                    </div>
                    <Badge className="bg-gentle-yellow/20 text-gentle-yellow hover:bg-gentle-yellow/30">
                      {scholarship.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{scholarship.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <DollarSign className="w-4 h-4 text-healing-green" />
                      <span className="font-semibold">Amount:</span>
                      <span className="text-healing-green">{scholarship.amount}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4 text-soft-coral" />
                      <span className="font-semibold">Deadline:</span>
                      <span>{new Date(scholarship.deadline).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-3 mb-4">
                    <span className="text-sm font-semibold">Eligibility: </span>
                    <span className="text-sm text-muted-foreground">{scholarship.eligibility}</span>
                  </div>

                  <Button className="w-full bg-gradient-primary">Apply for Scholarship</Button>
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

export default Scholarships;
