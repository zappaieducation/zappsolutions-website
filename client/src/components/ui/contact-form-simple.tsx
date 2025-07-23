import { useState, FormEvent } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
    companyName: "",
    companyWebsite: "",
    companySize: "",
    annualRevenue: "",
    projectBudget: "",
    interestedServices: "",
    message: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        role: "",
        companyName: "",
        companyWebsite: "",
        companySize: "",
        annualRevenue: "",
        projectBudget: "",
        interestedServices: "",
        message: ""
      });
      
      setTimeout(() => setShowSuccess(false), 3000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            The best AI systems
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's Partner Up
          </p>
        </div>

        <Card className="bg-card border-border">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center text-foreground mb-8">
              Tell us where you're at
            </h3>
            
            {showSuccess && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                Message sent successfully! We'll get back to you within 24 hours.
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your name?
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your email?
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="bg-background border-border text-foreground"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your role in the company?
                  </label>
                  <Input
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    placeholder="CEO, CTO, etc."
                    className="bg-background border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your company name?
                  </label>
                  <Input
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Company Name"
                    className="bg-background border-border text-foreground"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your company website?
                  </label>
                  <Input
                    name="companyWebsite"
                    value={formData.companyWebsite}
                    onChange={handleChange}
                    placeholder="https://company.com"
                    className="bg-background border-border text-foreground"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is the size of your company?
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select company size</option>
                    <option value="1-10">1-10 employees</option>
                    <option value="11-50">11-50 employees</option>
                    <option value="51-200">51-200 employees</option>
                    <option value="201-500">201-500 employees</option>
                    <option value="500+">500+ employees</option>
                  </select>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your annual revenue?
                  </label>
                  <select
                    name="annualRevenue"
                    value={formData.annualRevenue}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select annual revenue</option>
                    <option value="Under $1M">Under $1M</option>
                    <option value="$1M - $10M">$1M - $10M</option>
                    <option value="$10M - $50M">$10M - $50M</option>
                    <option value="$50M - $100M">$50M - $100M</option>
                    <option value="Over $100M">Over $100M</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    What is your project budget?
                  </label>
                  <select
                    name="projectBudget"
                    value={formData.projectBudget}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select project budget</option>
                    <option value="$10K - $50K">$10K - $50K</option>
                    <option value="$50K - $100K">$50K - $100K</option>
                    <option value="$100K - $500K">$100K - $500K</option>
                    <option value="$500K+">$500K+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What services are you interested in?
                </label>
                <select
                  name="interestedServices"
                  value={formData.interestedServices}
                  onChange={handleChange}
                  className="w-full px-3 py-2 bg-background border border-border text-foreground rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select services</option>
                  <option value="AI Strategy & Consulting">AI Strategy & Consulting</option>
                  <option value="Custom AI Development">Custom AI Development</option>
                  <option value="Team Training & Workshops">Team Training & Workshops</option>
                  <option value="AI Implementation">AI Implementation</option>
                  <option value="All Services">All Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tell us about your project
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, goals, and how we can help you..."
                  className="bg-background border-border text-foreground min-h-[120px]"
                  rows={5}
                />
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}