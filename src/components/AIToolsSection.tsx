import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Target, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const AIToolsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-primary text-white px-4 py-2 rounded-full mb-4">
              <Sparkles className="w-5 h-5" />
              <span className="font-semibold">AI-Powered Tools</span>
            </div>
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Intelligent Career Assistance
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Leverage AI technology to plan your career path and create professional resumes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-xl transition-shadow group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform" />
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">AI Career Path Recommender</CardTitle>
                <CardDescription className="text-base">
                  Get personalized career recommendations based on your skills, interests, and goals
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-healing-green" />
                    Personalized career paths
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-healing-green" />
                    Skills and education guidance
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-healing-green" />
                    Job market insights
                  </li>
                </ul>
                <Link to="/ai-career-path">
                  <Button className="w-full bg-gradient-primary group-hover:shadow-lg">
                    Try Career Recommender
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-primary/10 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform" />
              <CardHeader>
                <div className="w-14 h-14 rounded-2xl bg-gradient-primary flex items-center justify-center mb-4">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <CardTitle className="text-2xl">AI Resume Builder</CardTitle>
                <CardDescription className="text-base">
                  Create professional, ATS-friendly resumes with AI-powered suggestions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-soft-coral" />
                    Professional templates
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-soft-coral" />
                    AI content enhancement
                  </li>
                  <li className="flex items-center gap-2 text-sm text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-soft-coral" />
                    Industry-specific keywords
                  </li>
                </ul>
                <Link to="/ai-resume-builder">
                  <Button className="w-full bg-gradient-primary group-hover:shadow-lg">
                    Build Your Resume
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
