
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <header className="relative overflow-hidden py-24 md:py-32 bg-gradient-to-br from-white via-secondary/50 to-primary/10">
      <div className="absolute inset-0 bg-grid-black/[0.02] bg-grid-16" />
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Digital <span className="text-gradient bg-gradient-to-r from-primary via-primary/80 to-accent">Presence</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8 max-w-lg leading-relaxed">
              We create tailored digital experiences that transform ideas into impactful solutions for businesses of all sizes.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white px-8 py-6">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6">
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
              <img
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Digital Innovation"
                className="rounded-2xl shadow-xl relative z-10 hover:scale-[1.02] transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
