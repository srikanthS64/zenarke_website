
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Briefcase, Users, Rocket, Zap } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Briefcase className="h-6 w-6 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies."
    },
    {
      icon: <Rocket className="h-6 w-6 text-primary" />,
      title: "Mobile Applications",
      description: "Intuitive and powerful apps for iOS and Android platforms."
    },
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "Branding & Identity",
      description: "Complete brand development and identity design services."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Digital Strategy",
      description: "Strategic planning and consultation for digital transformation."
    }
  ];

  return (
    <section className="py-20 md:py-32 bg-gray-50/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business succeed
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-white/50 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <Link to="/services" className="text-primary hover:text-primary/80 font-medium inline-flex items-center">
                Learn more <span className="ml-2">→</span>
              </Link>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
