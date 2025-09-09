import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-tech.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden scroll-mt-24 glass-soft">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            25+ Years of Excellence
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Abercroft
            </span>
            <br />
            <span className="text-foreground">
              ICT Solutions & Project Management
            </span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            We specialize in the redistribution of comprehensive ICT hardware, acting as a vital link 
            between global manufacturers and diverse clients. Delivering genuine products, competitive 
            pricing, and reliable support services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#services">
              <Button variant="hero" size="lg" className="text-lg px-8 py-6">
                Explore Our Services
              </Button>
            </a>
            <Link to="/portfolio">
              <Button variant="outline" size="lg" className="text-lg px-8 py-6">
                View Portfolio
              </Button>
            </Link>
          </div>
          
          <div className="flex items-center space-x-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">200%</div>
              <div className="text-sm text-muted-foreground">Profit Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Technical Support</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">25+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;