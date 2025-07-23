import { Button } from "@/components/ui/button";

export default function Navigation() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">
              ZaPP | <span className="text-primary">Solutions</span>
            </h1>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('agents')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              AI Agents
            </button>
            <button
              onClick={() => scrollToSection('results')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Results
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
            <Button 
              onClick={() => scrollToSection('contact')}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Request Access
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
