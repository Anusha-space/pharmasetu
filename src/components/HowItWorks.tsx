import { UserPlus, FileText, Search, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    title: "Create Your Profile",
    description: "Sign up and build your professional profile with your qualifications, experience, and career goals."
  },
  {
    icon: FileText,
    title: "Complete Your Portfolio",
    description: "Add your credentials, certifications, projects, and achievements to showcase your expertise."
  },
  {
    icon: Search,
    title: "Explore Opportunities",
    description: "Browse through jobs, internships, events, and connect with leading pharmaceutical companies."
  },
  {
    icon: CheckCircle,
    title: "Grow Your Career",
    description: "Apply directly to opportunities, network with professionals, and advance your pharmacy career."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How PharmaSetu Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Get started in four simple steps and unlock endless opportunities in the pharmaceutical sector.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="bg-gradient-vibrant w-16 h-16 rounded-full flex items-center justify-center shadow-colorful">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 bg-gradient-secondary w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shadow-glow text-white">
                    {index + 1}
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-gradient-vibrant"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;