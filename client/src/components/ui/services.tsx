import { Card, CardContent } from "@/components/ui/card";
import { Search, GraduationCap, Rocket } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Search,
      title: "IDENTIFY",
      description: "We help you identify high-impact AI opportunities and build a step-by-step AI Transformation strategy to bring them to life.",
      color: "text-blue-400"
    },
    {
      icon: GraduationCap,
      title: "EDUCATE",
      description: "We train and support your team with the right tools and know-how to embed AI across your entire organization.",
      color: "text-blue-400"
    },
    {
      icon: Rocket,
      title: "DEVELOP",
      description: "We leverage our extensive experience to develop custom AI systems that are proven to move the needle inside your business.",
      color: "text-green-400"
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We spend our days guiding companies<br />
            through our 3-step AI Transformation Journey.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-muted/20 rounded-lg mb-6">
                  <service.icon className={`w-8 h-8 ${service.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
