import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";

const Subscriptions = () => {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for students getting started",
      features: [
        "Access to job listings",
        "Basic event notifications",
        "Community discussions",
        "Resource library access",
        "Monthly newsletter"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "₹499",
      period: "per month",
      description: "For pharmacy professionals seeking growth",
      features: [
        "Everything in Free",
        "Priority job applications",
        "Advanced event filters",
        "AI career path recommender",
        "Resume builder with AI",
        "Direct company connections",
        "CME/CE credit tracking",
        "Patent wall access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact us",
      description: "For organizations and institutions",
      features: [
        "Everything in Professional",
        "Bulk user management",
        "Custom integrations",
        "Dedicated support",
        "Analytics dashboard",
        "Job posting credits",
        "Featured company profile",
        "Advertisement placement"
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-foreground mb-4">
              Choose Your Plan
            </h1>
            <p className="text-xl text-muted-foreground">
              Unlock premium features and accelerate your pharmacy career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <Card 
                key={plan.name} 
                className={`relative ${plan.popular ? 'border-pharma-blue shadow-xl scale-105' : ''}`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pharma-blue">
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
                <CardContent>
                  <Button 
                    className={`w-full mb-6 ${plan.popular ? 'bg-gradient-primary' : ''}`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                  </Button>
                  
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-healing-green flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 bg-gradient-primary rounded-3xl p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-lg mb-6 opacity-90">
              Contact our team to discuss custom pricing and features for your organization
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
