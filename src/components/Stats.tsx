import { TrendingUp, Users, Building2, Calendar, Briefcase, Award } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Students",
    color: "text-white",
    bgColor: "bg-gradient-primary",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Partner Companies",
    color: "text-white",
    bgColor: "bg-gradient-secondary",
  },
  {
    icon: Briefcase,
    value: "2,000+",
    label: "Job Opportunities",
    color: "text-white",
    bgColor: "bg-gradient-vibrant",
  },
  {
    icon: Calendar,
    value: "300+",
    label: "Events This Year",
    color: "text-white",
    bgColor: "bg-gradient-primary",
  },
  {
    icon: Award,
    value: "95%",
    label: "Placement Success",
    color: "text-white",
    bgColor: "bg-gradient-secondary",
  },
  {
    icon: TrendingUp,
    value: "40%",
    label: "Year-on-Year Growth",
    color: "text-white",
    bgColor: "bg-gradient-vibrant",
  },
];

const Stats = () => {
  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-feature opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Growing Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of pharmacy professionals and companies already benefiting from our platform
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center p-6 rounded-xl bg-card/80 backdrop-blur border border-accent/20 hover:shadow-colorful transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`${stat.bgColor} w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-glow`}>
                  <Icon className={`w-6 h-6 ${stat.color}`} />
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
