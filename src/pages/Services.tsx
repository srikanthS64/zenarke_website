
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Briefcase, 
  Rocket, 
  Users, 
  Zap,
  Mail,
  Shield,
  Lightbulb,
  Star
} from "lucide-react";

const Services = () => {
  const mainServices = [
    {
      icon: <Briefcase className="h-8 w-8 text-primary" />,
      title: "Web Development",
      description: "Custom websites and web applications that are responsive, fast, and built with scalability in mind. We use the latest technologies to deliver optimal user experiences across all devices.",
      features: [
        "Custom Website Design & Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "Progressive Web Applications",
        "API Development & Integration"
      ]
    },
    {
      icon: <Rocket className="h-8 w-8 text-primary" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences. Our mobile solutions are designed for performance, usability, and engagement.",
      features: [
        "iOS App Development",
        "Android App Development",
        "Cross-Platform Solutions",
        "App Store Optimization",
        "Mobile App Maintenance & Support"
      ]
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Branding & Identity",
      description: "Comprehensive branding services that help businesses establish a unique and memorable presence in the market. We create cohesive brand identities that resonate with target audiences.",
      features: [
        "Brand Strategy & Positioning",
        "Logo & Visual Identity Design",
        "Brand Guidelines Development",
        "Rebranding & Brand Refreshes",
        "Marketing Collateral Design"
      ]
    },
    {
      icon: <Zap className="h-8 w-8 text-primary" />,
      title: "Digital Strategy",
      description: "Strategic guidance and consulting to help businesses navigate the digital landscape. We develop roadmaps that align technology investments with business objectives.",
      features: [
        "Digital Transformation Consulting",
        "Technology Stack Assessment",
        "User Experience Strategy",
        "Digital Marketing Strategy",
        "Analytics & Performance Measurement"
      ]
    }
  ];

  const additionalServices = [
    {
      icon: <Lightbulb className="h-6 w-6 text-primary" />,
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance usability and engagement."
    },
    {
      icon: <Shield className="h-6 w-6 text-primary" />,
      title: "Cybersecurity",
      description: "Protection for your digital assets with comprehensive security solutions."
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "SEO & Content",
      description: "Strategy-driven content and optimization for better visibility."
    },
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Marketing",
      description: "Targeted campaigns that drive engagement and conversions."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              At Zenarke, we provide end-to-end digital solutions that help businesses transform, grow, and succeed in the digital age.
            </p>
          </div>
          
          <div className="space-y-16">
            {mainServices.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                <div>
                  <div className="h-16 w-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-primary mr-2">✓</span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-secondary rounded-lg p-8">
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      "1486312338219-ce68d2c6f44d",
                      "1581091226825-a6a2a5aee158",
                      "1649972904349-6e44c42644a7",
                      "1488590528505-98d2b5aba04b"
                    ][index]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt={service.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Additional Services</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Complementary solutions to enhance your digital presence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              How we approach every project to ensure success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-2">Discovery</h3>
              <p className="text-gray-600">
                We learn about your business, goals, and challenges to understand your unique needs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive plan to address your needs and achieve your objectives.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-2">Execution</h3>
              <p className="text-gray-600">
                Our team implements the strategy with a focus on quality and attention to detail.
              </p>
            </div>
            
            <div className="text-center">
              <div className="h-16 w-16 bg-gradient text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold mb-2">Optimization</h3>
              <p className="text-gray-600">
                We measure results, gather feedback, and continuously improve for optimal performance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Digital Presence?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve your business goals.
          </p>
          <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Get In Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Services;
