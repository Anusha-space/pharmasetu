import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Search, MapPin, Users, Clock } from "lucide-react";

const eventCategories = ["All Events", "Conferences", "Webinars", "Workshops", "Networking", "CME/CE"];
const eventRegions = ["All Regions", "North India", "South India", "East India", "West India", "International"];

// Sample events data
const events = [
  {
    id: 1,
    title: "National Pharmacy Conference 2025",
    date: "March 15-17, 2025",
    location: "New Delhi",
    category: "Conference",
    region: "North India",
    attendees: "500+ expected",
    price: "₹5,000",
    cme: "15 Credits",
    description: "Annual gathering of pharmacy professionals discussing latest trends and innovations"
  },
  {
    id: 2,
    title: "Clinical Pharmacy Workshop",
    date: "February 28, 2025",
    location: "Mumbai",
    category: "Workshop",
    region: "West India",
    attendees: "100 participants",
    price: "₹2,500",
    cme: "8 Credits",
    description: "Hands-on workshop on clinical pharmacy practices and patient care"
  },
  {
    id: 3,
    title: "Pharmaceutical Innovation Webinar",
    date: "February 20, 2025",
    location: "Online",
    category: "Webinar",
    region: "International",
    attendees: "Unlimited",
    price: "Free",
    cme: "2 Credits",
    description: "Expert speakers discussing breakthrough innovations in drug development"
  },
  {
    id: 4,
    title: "Pharmacy Networking Meetup",
    date: "March 5, 2025",
    location: "Bangalore",
    category: "Networking",
    region: "South India",
    attendees: "150 professionals",
    price: "₹500",
    cme: "NA",
    description: "Connect with fellow pharmacy professionals and explore collaboration opportunities"
  },
  {
    id: 5,
    title: "CME: New Drug Therapies",
    date: "March 22, 2025",
    location: "Kolkata",
    category: "CME/CE",
    region: "East India",
    attendees: "200 pharmacists",
    price: "₹3,000",
    cme: "10 Credits",
    description: "Continuing education on latest drug therapies and treatment protocols"
  },
  {
    id: 6,
    title: "PharmaHack Summit",
    date: "April 10-12, 2025",
    location: "Hyderabad",
    category: "Conference",
    region: "South India",
    attendees: "300+ innovators",
    price: "₹4,000",
    cme: "12 Credits",
    description: "Innovation summit bringing together pharma professionals and tech enthusiasts"
  }
];

const Events = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Events");
  const [selectedRegion, setSelectedRegion] = useState("All Regions");

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "All Events" || event.category === selectedCategory;
    const matchesRegion = selectedRegion === "All Regions" || event.region === selectedRegion;
    
    return matchesSearch && matchesCategory && matchesRegion;
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <section className="bg-gradient-hero py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Pharmacy <span className="bg-gradient-primary bg-clip-text text-transparent">Events</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Discover conferences, workshops, webinars, and networking opportunities
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
                      placeholder="Search events..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 h-12 rounded-xl"
                    />
                  </div>
                </div>
                <div className="md:col-span-3">
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventCategories.map(cat => (
                        <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-3">
                  <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                    <SelectTrigger className="h-12 rounded-xl">
                      <SelectValue placeholder="Region" />
                    </SelectTrigger>
                    <SelectContent>
                      {eventRegions.map(reg => (
                        <SelectItem key={reg} value={reg}>{reg}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Category badges */}
            <div className="flex flex-wrap gap-3">
              {eventCategories.map(cat => (
                <Button
                  key={cat}
                  variant={selectedCategory === cat ? "default" : "outline"}
                  onClick={() => setSelectedCategory(cat)}
                  className="rounded-full"
                >
                  {cat}
                </Button>
              ))}
            </div>

            {/* Results count */}
            <div className="text-muted-foreground">
              Showing {filteredEvents.length} events
            </div>

            {/* Events grid */}
            <div className="grid md:grid-cols-2 gap-6">
              {filteredEvents.map(event => (
                <Card key={event.id} className="hover:shadow-elevated transition-shadow duration-300 border-border/50 rounded-2xl overflow-hidden">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-secondary flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="secondary" className="rounded-full">{event.category}</Badge>
                    </div>
                    <CardTitle className="text-xl">{event.title}</CardTitle>
                    <CardDescription className="text-base">{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="w-4 h-4" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Users className="w-4 h-4" />
                        <span>{event.attendees}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="rounded-full">{event.price}</Badge>
                      {event.cme !== "NA" && (
                        <Badge variant="outline" className="rounded-full bg-accent/10 border-accent text-accent-foreground">{event.cme}</Badge>
                      )}
                      <Badge variant="outline" className="rounded-full">{event.region}</Badge>
                    </div>
                    <div className="pt-2 border-t border-border/50">
                      <Button className="w-full rounded-full">Register Now</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredEvents.length === 0 && (
              <div className="text-center py-16">
                <p className="text-lg text-muted-foreground">No events found matching your criteria.</p>
                <Button variant="outline" className="mt-4" onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("All Events");
                  setSelectedRegion("All Regions");
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

export default Events;
