import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Subscriptions = () => {
  const plans = [
    {
      name: "Basic Explorer Plan",
      price: "₹0",
      period: "Free",
      description: "Best for students exploring opportunities",
      popular: false,
      features: [
        "Limited academic & industry job listings",
        "Monthly internship updates",
        "Basic conference & scholarship alerts",
        "5 research publication calls/month",
        "Competitive exam reminders",
        "Limited search filters",
        "Community access"
      ],
    },
    {
      name: "Opportunity Starter Plan",
      price: "₹79",
      period: "per month",
      description: "Best for students who need regular updates",
      popular: true,
      features: [
        "Everything in Free",
        "Daily job and internship alerts",
        "Full access to conference & workshop listings",
        "Scholarship notifications with eligibility info",
        "20 publication/CFP alerts per month",
        "Research grant alerts (basic)",
        "AI résumé builder (limited)",
        "Save unlimited opportunities",
        "Priority email alerts"
      ],
    },
    {
      name: "Academic Pro Plan",
      price: "₹199",
      period: "per month",
      description: "Best for students preparing for higher studies",
      popular: false,
      features: [
        "Everything in Starter Plan",
        "Full academic job board (RA/TA/JRF/Postdoc)",
        "Industry job recommendations (role-based)",
        "Internship portal with mentor recommendations",
        "International conference listings & deadlines",
        "Full scholarship database (India + global)",
        "Grant & funding alerts with guidance",
        "Unlimited publication + CFP alerts",
        "Competitive exam resources (GATE, NET, CUET, GRE)",
        "AI cover letter generator",
        "1 downloadable certificate/month"
      ],
    },
    {
      name: "Research & Career Pro Plan",
      price: "₹349",
      period: "per month",
      description: "Best for final-year students, aspirants & job seekers",
      popular: false,
      features: [
        "Everything in Academic Pro",
        "Personalized job & internship recommendations",
        "Research mentorship sessions (1/month)",
        "Templates for SOPs, LORs, proposals",
        "Grant application guide + sample proposals",
        "Journal, CFP & special issue tracker",
        "Verified conference list (avoid predatory events)",
        "1:1 resume review (quarterly)",
        "Soft skills + research writing workshops",
        "Research collaboration finder",
        "24/7 AI research assistant"
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Student-Centric Subscription Plans
            </h1>
            <p className="text-xl text-muted-foreground">
              Designed for UG/PG students, PhD aspirants, researchers, and young professionals
            </p>
          </div>

          {/* PLAN CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative h-full flex flex-col ${
                  plan.popular ? "border-blue-500 shadow-2xl scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white">
                    Most Popular
                  </Badge>
                )}

                <CardHeader>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-base">{plan.description}</CardDescription>

                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="flex-1">
                  <Button
                    className={`w-full mb-6 ${plan.popular ? "bg-gradient-primary" : ""}`}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    Get Started
                  </Button>

                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CUSTOM SOLUTION SECTION */}
          <div className="mt-16 bg-gradient-primary rounded-3xl p-10 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need Custom Academic or Institutional Plans?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact us to build a custom subscription for institutions, labs & departments
            </p>
            <Button variant="secondary" size="lg">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Subscriptions;
