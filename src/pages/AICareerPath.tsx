import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Sparkles, Target, TrendingUp, Award } from "lucide-react";

const AICareerPath = () => {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    education: "",
    interest: "",
    strength: "",
    goal: ""
  });
  const [recommendation, setRecommendation] = useState<any>(null);

  const generateRecommendation = () => {
    // Simulated AI recommendation logic
    const recommendations = {
      "clinical-patient": {
        career: "Clinical Pharmacist",
        description: "Work directly with patients and healthcare teams to optimize medication therapy.",
        skills: ["Patient counseling", "Drug therapy management", "Clinical decision making"],
        education: ["PharmD", "Clinical Pharmacy residency", "Board certification"],
        opportunities: ["Hospital pharmacist", "Ambulatory care", "Specialty clinics"],
        salary: "₹6-12 LPA"
      },
      "research-analytical": {
        career: "Pharmaceutical Researcher",
        description: "Contribute to drug discovery and development in research organizations.",
        skills: ["Research methodology", "Data analysis", "Laboratory techniques"],
        education: ["M.Pharm", "PhD", "Specialized certifications"],
        opportunities: ["R&D positions", "Clinical trials", "Academic research"],
        salary: "₹8-18 LPA"
      },
      "industry-leadership": {
        career: "Pharmaceutical Business Manager",
        description: "Lead teams and manage pharmaceutical business operations.",
        skills: ["Leadership", "Business strategy", "Market analysis"],
        education: ["MBA in Pharma", "Management certifications", "Industry experience"],
        opportunities: ["Product management", "Business development", "Sales leadership"],
        salary: "₹10-25 LPA"
      }
    };

    // Simple logic to determine recommendation
    const key = `${answers.interest}-${answers.strength}`;
    const defaultRec = recommendations["clinical-patient"];
    const rec = recommendations[key as keyof typeof recommendations] || defaultRec;
    
    setRecommendation(rec);
    setStep(5);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">AI-Powered</span>
            </div>
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Career Path Recommender
            </h1>
            <p className="text-xl text-muted-foreground">
              Discover the perfect pharmacy career path tailored to your interests and goals
            </p>
          </div>

          {step < 5 && (
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>Step {step} of 4</CardTitle>
                <CardDescription>Answer a few questions to get personalized recommendations</CardDescription>
              </CardHeader>
            </Card>
          )}

          {step === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>What's your current education level?</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={answers.education} onValueChange={(value) => setAnswers({...answers, education: value})}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="dpharm" id="dpharm" />
                    <Label htmlFor="dpharm" className="flex-1 cursor-pointer">D.Pharm Student/Graduate</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="bpharm" id="bpharm" />
                    <Label htmlFor="bpharm" className="flex-1 cursor-pointer">B.Pharm Student/Graduate</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="mpharm" id="mpharm" />
                    <Label htmlFor="mpharm" className="flex-1 cursor-pointer">M.Pharm Student/Graduate</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="pharmd" id="pharmd" />
                    <Label htmlFor="pharmd" className="flex-1 cursor-pointer">PharmD Student/Graduate</Label>
                  </div>
                </RadioGroup>
                <Button 
                  className="w-full mt-6 bg-gradient-primary" 
                  onClick={() => setStep(2)}
                  disabled={!answers.education}
                >
                  Next
                </Button>
              </CardContent>
            </Card>
          )}

          {step === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>What interests you most?</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={answers.interest} onValueChange={(value) => setAnswers({...answers, interest: value})}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="clinical" id="clinical" />
                    <Label htmlFor="clinical" className="flex-1 cursor-pointer">Patient care and clinical practice</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="research" id="research" />
                    <Label htmlFor="research" className="flex-1 cursor-pointer">Research and drug development</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="industry" id="industry" />
                    <Label htmlFor="industry" className="flex-1 cursor-pointer">Industry and business</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="regulatory" id="regulatory" />
                    <Label htmlFor="regulatory" className="flex-1 cursor-pointer">Regulatory and quality assurance</Label>
                  </div>
                </RadioGroup>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">Back</Button>
                  <Button 
                    className="flex-1 bg-gradient-primary" 
                    onClick={() => setStep(3)}
                    disabled={!answers.interest}
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>What's your biggest strength?</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={answers.strength} onValueChange={(value) => setAnswers({...answers, strength: value})}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="patient" id="patient" />
                    <Label htmlFor="patient" className="flex-1 cursor-pointer">Communication and patient interaction</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="analytical" id="analytical" />
                    <Label htmlFor="analytical" className="flex-1 cursor-pointer">Analytical and problem-solving</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="leadership" id="leadership" />
                    <Label htmlFor="leadership" className="flex-1 cursor-pointer">Leadership and management</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="technical" id="technical" />
                    <Label htmlFor="technical" className="flex-1 cursor-pointer">Technical and detail-oriented</Label>
                  </div>
                </RadioGroup>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">Back</Button>
                  <Button 
                    className="flex-1 bg-gradient-primary" 
                    onClick={() => setStep(4)}
                    disabled={!answers.strength}
                  >
                    Next
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>What's your primary career goal?</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={answers.goal} onValueChange={(value) => setAnswers({...answers, goal: value})}>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="impact" id="impact" />
                    <Label htmlFor="impact" className="flex-1 cursor-pointer">Make a direct impact on patient health</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="innovation" id="innovation" />
                    <Label htmlFor="innovation" className="flex-1 cursor-pointer">Contribute to scientific innovation</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="growth" id="growth" />
                    <Label htmlFor="growth" className="flex-1 cursor-pointer">Build a successful career with growth</Label>
                  </div>
                  <div className="flex items-center space-x-2 p-4 border rounded-lg hover:bg-muted/50 cursor-pointer">
                    <RadioGroupItem value="balance" id="balance" />
                    <Label htmlFor="balance" className="flex-1 cursor-pointer">Achieve work-life balance</Label>
                  </div>
                </RadioGroup>
                <div className="flex gap-3 mt-6">
                  <Button variant="outline" onClick={() => setStep(3)} className="flex-1">Back</Button>
                  <Button 
                    className="flex-1 bg-gradient-primary" 
                    onClick={generateRecommendation}
                    disabled={!answers.goal}
                  >
                    Get Recommendations
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}

          {step === 5 && recommendation && (
            <div className="space-y-6">
              <Card className="border-pharma-blue shadow-xl">
                <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
                  <div className="flex items-center gap-3">
                    <Target className="w-8 h-8" />
                    <div>
                      <CardTitle className="text-3xl">{recommendation.career}</CardTitle>
                      <CardDescription className="text-white/90 text-base">
                        Your ideal career path based on your profile
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-lg text-muted-foreground mb-6">{recommendation.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Award className="w-5 h-5 text-pharma-blue" />
                        Key Skills
                      </h3>
                      <ul className="space-y-2">
                        {recommendation.skills.map((skill: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-healing-green" />
                            <span className="text-muted-foreground">{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-healing-green" />
                        Education Path
                      </h3>
                      <ul className="space-y-2">
                        {recommendation.education.map((edu: string, index: number) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-soft-coral" />
                            <span className="text-muted-foreground">{edu}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                    <h3 className="font-semibold mb-2">Career Opportunities</h3>
                    <div className="flex flex-wrap gap-2">
                      {recommendation.opportunities.map((opp: string, index: number) => (
                        <span key={index} className="px-3 py-1 bg-background rounded-full text-sm">
                          {opp}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gradient-primary/10 rounded-lg">
                    <p className="text-sm text-muted-foreground">
                      <span className="font-semibold">Expected Salary Range:</span> {recommendation.salary}
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="flex gap-4">
                <Button variant="outline" onClick={() => {setStep(1); setRecommendation(null);}} className="flex-1">
                  Start Over
                </Button>
                <Button className="flex-1 bg-gradient-primary">
                  Explore Related Jobs
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AICareerPath;
