import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Calendar, FileText, Target, Users } from "lucide-react";

const CompetitiveExams = () => {
  const [activeTab, setActiveTab] = useState("upcoming");

  const exams = [
    {
      id: 1,
      name: "GPAT 2026",
      fullName: "Graduate Pharmacy Aptitude Test",
      date: "2026-02-15",
      registrationDeadline: "2025-12-31",
      eligibility: "B.Pharm final year or pass",
      syllabus: "Pharmaceutics, Pharmaceutical Chemistry, Pharmacology, Pharmacognosy",
      seats: "15,000+ M.Pharm seats",
      difficulty: "Moderate"
    },
    {
      id: 2,
      name: "NIPER JEE 2026",
      fullName: "NIPER Joint Entrance Examination",
      date: "2026-03-10",
      registrationDeadline: "2026-01-15",
      eligibility: "B.Pharm/M.Pharm as per program",
      syllabus: "Similar to GPAT with advanced topics",
      seats: "500+ seats across NIPERs",
      difficulty: "High"
    },
    {
      id: 3,
      name: "PHARMACIST EXAM",
      fullName: "State Pharmacist Registration Exam",
      date: "Multiple dates",
      registrationDeadline: "Varies by state",
      eligibility: "D.Pharm/B.Pharm",
      syllabus: "Pharmacy Practice, Drug Store Management",
      seats: "Registration exam",
      difficulty: "Moderate"
    }
  ];

  const resources = [
    { title: "GPAT Previous Year Papers", type: "PDF", downloads: 5420 },
    { title: "Pharmaceutical Chemistry Notes", type: "Study Material", downloads: 3890 },
    { title: "Mock Test Series - GPAT", type: "Online Test", downloads: 2340 },
    { title: "Pharmacology Video Lectures", type: "Video", downloads: 4120 }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Competitive Exams
            </h1>
            <p className="text-xl text-muted-foreground">
              Prepare for pharmacy entrance exams with comprehensive resources
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="upcoming">Upcoming Exams</TabsTrigger>
              <TabsTrigger value="resources">Study Resources</TabsTrigger>
            </TabsList>

            <TabsContent value="upcoming">
              <div className="grid grid-cols-1 gap-6">
                {exams.map((exam) => (
                  <Card key={exam.id} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-2xl mb-1">{exam.name}</CardTitle>
                          <CardDescription className="text-base">{exam.fullName}</CardDescription>
                        </div>
                        <Badge 
                          className={`${
                            exam.difficulty === "High" 
                              ? "bg-soft-coral/20 text-soft-coral" 
                              : "bg-healing-green/20 text-healing-green"
                          }`}
                        >
                          {exam.difficulty}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div className="flex items-start gap-2">
                          <Calendar className="w-5 h-5 text-pharma-blue flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Exam Date</p>
                            <p className="text-sm text-muted-foreground">
                              {new Date(exam.date).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-2">
                          <FileText className="w-5 h-5 text-healing-green flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Registration Deadline</p>
                            <p className="text-sm text-muted-foreground">
                              {exam.registrationDeadline}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Users className="w-5 h-5 text-gentle-yellow flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Seats</p>
                            <p className="text-sm text-muted-foreground">{exam.seats}</p>
                          </div>
                        </div>

                        <div className="flex items-start gap-2">
                          <Target className="w-5 h-5 text-soft-coral flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-semibold">Eligibility</p>
                            <p className="text-sm text-muted-foreground">{exam.eligibility}</p>
                          </div>
                        </div>
                      </div>

                      <div className="bg-muted/50 rounded-lg p-3 mb-4">
                        <p className="text-sm font-semibold mb-1">Syllabus</p>
                        <p className="text-sm text-muted-foreground">{exam.syllabus}</p>
                      </div>

                      <div className="flex gap-3">
                        <Button className="flex-1 bg-gradient-primary">Register Now</Button>
                        <Button variant="outline" className="flex-1">View Syllabus</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="resources">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {resources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="flex items-start gap-3">
                        <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-lg mb-1">{resource.title}</CardTitle>
                          <CardDescription className="flex items-center gap-2">
                            <Badge variant="secondary">{resource.type}</Badge>
                            <span className="text-xs">{resource.downloads} downloads</span>
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full" variant="outline">Download Resource</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          <div className="bg-gradient-primary rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Personalized Guidance?</h2>
            <p className="text-lg mb-6 opacity-90">
              Our AI-powered career recommender can help you choose the right exam path
            </p>
            <Button variant="secondary" size="lg">
              Try Career Recommender
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompetitiveExams;
