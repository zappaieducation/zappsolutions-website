import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Users, Calendar, FileText, Phone, DollarSign, Shield } from "lucide-react";

export default function AIAgents() {
  const agents = [
    {
      icon: Users,
      title: "Resume Screening AI Agent",
      category: "Human Resources & Recruitment",
      categoryColor: "bg-blue-100 text-blue-800",
      tasks: ["Resume Intake", "Role-Based Scoring", "Fit Filtering"],
      color: "text-blue-400"
    },
    {
      icon: Calendar,
      title: "Interview Scheduling AI Agent",
      category: "Human Resources & Recruitment",
      categoryColor: "bg-blue-100 text-blue-800",
      tasks: ["Availability Matching", "Slot Suggestions", "Booking Confirmation"],
      color: "text-blue-400"
    },
    {
      icon: FileText,
      title: "Invoice Processing AI Agent",
      category: "Financial Services & Banking",
      categoryColor: "bg-green-100 text-green-800",
      tasks: ["Invoice Parsing", "Data Extraction", "Compliance Checks"],
      color: "text-green-400"
    },
    {
      icon: Phone,
      title: "Customer Service AI Agent",
      category: "Customer Service",
      categoryColor: "bg-orange-100 text-orange-800",
      tasks: ["Order Status Handling", "Product Returns", "Subscription Management"],
      color: "text-orange-400"
    },
    {
      icon: DollarSign,
      title: "Data Entry AI Agent",
      category: "General Problem Solvers",
      categoryColor: "bg-purple-100 text-purple-800",
      tasks: ["Catalog Entry", "Document Extraction", "Data Validation"],
      color: "text-purple-400"
    },
    {
      icon: Shield,
      title: "Compliance Monitoring AI Agent",
      category: "Legal & Compliance",
      categoryColor: "bg-red-100 text-red-800",
      tasks: ["Compliance Checks", "Risk Assessment", "Report Generation"],
      color: "text-red-400"
    }
  ];

  return (
    <section id="agents" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            AI Agents: Workforce With
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            AI agents deliver precise, efficient task automation, matching human-level performance. 
            They operate continuously, reducing errors and increasing productivity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {agents.map((agent, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-muted/20 rounded-lg">
                    <agent.icon className={`w-6 h-6 ${agent.color}`} />
                  </div>
                  <Badge variant="secondary" className={agent.categoryColor}>
                    {agent.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{agent.title}</h3>
                
                <div className="space-y-2 mb-4">
                  {agent.tasks.map((task, taskIndex) => (
                    <div key={taskIndex} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{task}</span>
                    </div>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
