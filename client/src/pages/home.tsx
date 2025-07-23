import Navigation from "@/components/ui/navigation";
import Hero from "@/components/ui/hero";
import Services from "@/components/ui/services";
import AIAgents from "@/components/ui/ai-agents";
import Statistics from "@/components/ui/statistics";
import ContactForm from "@/components/ui/contact-form-simple";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <Hero />
      <Services />
      <AIAgents />
      <Statistics />
      <ContactForm />
      <Footer />
    </div>
  );
}
