import { useEffect, useState } from "react";

export default function Statistics() {
  const [animatedValues, setAnimatedValues] = useState({
    professionals: 0,
    opportunities: 0,
    solutions: 0
  });

  const targetValues = {
    professionals: 17000000,
    opportunities: 435,
    solutions: 55
  };

  useEffect(() => {
    const animateValue = (key: keyof typeof targetValues, target: number) => {
      const duration = 2000;
      const steps = 50;
      const stepValue = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += stepValue;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        setAnimatedValues(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, duration / steps);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          animateValue('professionals', targetValues.professionals);
          animateValue('opportunities', targetValues.opportunities);
          animateValue('solutions', targetValues.solutions);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );

    const element = document.getElementById('statistics');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const formatNumber = (num: number, target: number) => {
    if (target >= 1000000) {
      return (num / 1000000).toFixed(0) + 'M+';
    }
    return num + '+';
  };

  return (
    <section id="results" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            We Don't Sell AI.
          </h2>
        </div>

        <div id="statistics" className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              {formatNumber(animatedValues.professionals, targetValues.professionals)}
            </div>
            <p className="text-xl text-muted-foreground">
              Professionals upskilled in AI via our platforms
            </p>
          </div>
          
          <div>
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              {formatNumber(animatedValues.opportunities, targetValues.opportunities)}
            </div>
            <p className="text-xl text-muted-foreground">
              AI opportunities identified for businesses
            </p>
          </div>
          
          <div>
            <div className="text-5xl md:text-6xl font-bold gradient-text mb-4">
              {formatNumber(animatedValues.solutions, targetValues.solutions)}
            </div>
            <p className="text-xl text-muted-foreground">
              Bespoke AI solutions developed
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
