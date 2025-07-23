export default function Footer() {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ZaPP | <span className="text-primary">Solutions</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your trusted partner in becoming an AI-first company. We guide organizations through comprehensive AI transformation journeys.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>AI Strategy</li>
              <li>Team Training</li>
              <li>Custom Development</li>
              <li>Process Automation</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>ceo@zappsolutions.com</li>
              <li>Dubai, UAE</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground">© 2024 ZaPP Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
