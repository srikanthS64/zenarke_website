
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Shield, 
  Zap, 
  Lightbulb, 
  Users, 
  Rocket, 
  Star, 
  Briefcase,
  Check
} from "lucide-react";

const Features = () => {
  const coreFeatures = [
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Reliable Security",
      description: "Enterprise-grade security measures to protect your digital assets and user data at every level."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Optimized performance for quick loading times and smooth user experiences across all devices."
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: "Innovative Solutions",
      description: "Cutting-edge technologies and approaches tailored to meet your specific business challenges."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "User-Centered",
      description: "Designs and functionalities that prioritize user experience and drive engagement."
    },
    {
      icon: <Rocket className="h-10 w-10 text-primary" />,
      title: "Scalable Architecture",
      description: "Solutions built to grow with your business, handling increased loads and expanding functionality."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Superior Quality",
      description: "Meticulous attention to detail and rigorous testing to ensure exceptional quality."
    }
  ];

  const technicalFeatures = [
    {
      title: "Responsive Design",
      description: "All our solutions are fully responsive, providing optimal user experiences across devices of all sizes.",
      benefits: [
        "Perfect display on all screen sizes",
        "Improved user engagement and retention",
        "Better search engine rankings",
        "Reduced maintenance needs"
      ]
    },
    {
      title: "Progressive Web Apps",
      description: "Combine the best of web and mobile apps with PWAs that load quickly and work offline.",
      benefits: [
        "Offline functionality",
        "Fast loading times",
        "App-like experience on the web",
        "Lower development costs than native apps"
      ]
    },
    {
      title: "API Integrations",
      description: "Seamless connections with third-party services and platforms to extend functionality.",
      benefits: [
        "Enhanced functionality",
        "Streamlined workflows",
        "Improved data sharing",
        "Reduced development time and costs"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Features & Capabilities</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover the powerful features that set our digital solutions apart
          </p>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Features</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The fundamental elements that define every digital solution we deliver
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Features */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Excellence</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Behind-the-scenes capabilities that power our solutions
            </p>
          </div>
          
          <div className="space-y-12">
            {technicalFeatures.map((feature, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className={index % 2 !== 0 ? 'order-2 lg:order-1' : ''}>
                  <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                  <p className="text-gray-700 mb-6">{feature.description}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className={index % 2 !== 0 ? 'order-1 lg:order-2' : ''}>
                  <img
                    src={`https://images.unsplash.com/photo-${[
                      "1461749280684-dccba630e2f6",
                      "1531297484001-80022131f5a1",
                      "1487058792275-0ad4aaf24ca7"
                    ][index]}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt={feature.title}
                    className="rounded-lg shadow-lg w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customization */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tailored to Your Needs</h2>
              <p className="text-gray-700 mb-6">
                We understand that every business is unique, which is why our solutions are fully customizable to meet your specific requirements and objectives.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Briefcase className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Business-Specific Solutions</h4>
                    <p className="text-gray-600">
                      Customized to address the unique challenges of your industry and business model.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Lightbulb className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Flexible Implementation</h4>
                    <p className="text-gray-600">
                      Adaptable development process that evolves with your changing requirements.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Long-Term Support</h4>
                    <p className="text-gray-600">
                      Ongoing maintenance and updates to ensure your solution remains effective and secure.
                    </p>
                  </div>
                </div>
              </div>
              <Button asChild className="bg-gradient text-white hover:opacity-90">
                <Link to="/contact">Discuss Your Requirements</Link>
              </Button>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Customized Solutions"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Compare</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              See how Zenarke's features stack up against typical offerings
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="border-b">
                  <th className="p-4 text-left">Features</th>
                  <th className="p-4 text-center bg-primary/10 text-primary">Zenarke</th>
                  <th className="p-4 text-center">Standard Providers</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Custom Development</td>
                  <td className="p-4 text-center bg-primary/5">✓ Fully Customized</td>
                  <td className="p-4 text-center">± Limited Options</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Responsive Design</td>
                  <td className="p-4 text-center bg-primary/5">✓ All Devices</td>
                  <td className="p-4 text-center">✓ Usually</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Performance Optimization</td>
                  <td className="p-4 text-center bg-primary/5">✓ Advanced</td>
                  <td className="p-4 text-center">± Basic</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Security Measures</td>
                  <td className="p-4 text-center bg-primary/5">✓ Enterprise-grade</td>
                  <td className="p-4 text-center">± Standard</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Post-Launch Support</td>
                  <td className="p-4 text-center bg-primary/5">✓ Comprehensive</td>
                  <td className="p-4 text-center">± Limited</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Scalability</td>
                  <td className="p-4 text-center bg-primary/5">✓ Built-in</td>
                  <td className="p-4 text-center">✗ Often Limited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience These Features Firsthand</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let us show you how our features can transform your digital presence and drive business results.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Features;
