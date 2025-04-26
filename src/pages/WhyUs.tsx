
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Award, 
  Shield, 
  Users, 
  Star, 
  Check, 
  Briefcase,
  Mail
} from "lucide-react";

const WhyUs = () => {
  const advantages = [
    {
      icon: <Award className="h-10 w-10 text-primary" />,
      title: "Expertise & Experience",
      description: "Our team brings years of industry experience and specialized expertise to every project."
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Client-Focused Approach",
      description: "We prioritize your goals and collaborate closely to ensure solutions align with your vision."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality control processes ensure exceptional results every time."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Innovation & Creativity",
      description: "We bring fresh perspectives and innovative solutions to complex digital challenges."
    }
  ];

  const testimonials = [
    {
      quote: "Zenarke transformed our online presence with a website that perfectly captures our brand and delivers results. Their team's expertise and dedication exceeded our expectations.",
      author: "Sarah J.",
      position: "Marketing Director, TechStart Inc."
    },
    {
      quote: "Working with Zenarke on our mobile app was a game-changer for our business. Their attention to detail and user-focused approach resulted in an app our customers love to use.",
      author: "Michael R.",
      position: "CEO, RetailPlus"
    },
    {
      quote: "The digital strategy Zenarke developed for us has significantly improved our online visibility and customer engagement. Their ongoing support has been invaluable.",
      author: "Jennifer T.",
      position: "Operations Manager, GrowFast Solutions"
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Why Choose Zenarke</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Discover what sets us apart and why businesses trust us with their digital needs
          </p>
        </div>
      </section>

      {/* Key Advantages */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Advantages</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Key reasons why clients choose Zenarke for their digital solutions
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <Card key={index} className="p-8 text-center hover:shadow-lg transition-shadow duration-300">
                <div className="flex justify-center mb-6">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{advantage.title}</h3>
                <p className="text-gray-600">{advantage.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Unique Approach</h2>
              <p className="text-gray-700 mb-6">
                At Zenarke, we believe in a collaborative, transparent, and results-driven approach to digital solutions. We don't just build products; we create partnerships that drive long-term success.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Collaborative Process</h4>
                    <p className="text-gray-600">
                      We work closely with you at every stage, ensuring your input shapes the final product.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Transparent Communication</h4>
                    <p className="text-gray-600">
                      Clear, consistent updates and open dialogue throughout the project lifecycle.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Results-Oriented</h4>
                    <p className="text-gray-600">
                      Focus on measurable outcomes and solutions that deliver tangible business value.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Check className="h-6 w-6 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold mb-1">Continuous Improvement</h4>
                    <p className="text-gray-600">
                      Ongoing optimization and enhancements based on performance data and feedback.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Our Approach"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Hear directly from businesses that have partnered with Zenarke
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 h-full flex flex-col">
                <div className="flex-grow">
                  <div className="mb-4 text-primary">
                    <Star className="h-6 w-6 inline-block" />
                    <Star className="h-6 w-6 inline-block" />
                    <Star className="h-6 w-6 inline-block" />
                    <Star className="h-6 w-6 inline-block" />
                    <Star className="h-6 w-6 inline-block" />
                  </div>
                  <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                </div>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-600 text-sm">{testimonial.position}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How We Work</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our structured process ensures consistent quality and successful outcomes
            </p>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 -translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-0">
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center relative">
                <div className="md:text-right md:pr-16">
                  <div className="hidden md:block absolute top-1/2 right-0 w-5 h-5 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10"></div>
                  <h3 className="text-2xl font-semibold mb-3">1. Initial Consultation</h3>
                  <p className="text-gray-700">
                    We begin by understanding your business, goals, and challenges through in-depth discussions and research.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center relative">
                <div className="hidden md:block"></div>
                <div className="md:pl-16">
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-primary -translate-y-1/2 -translate-x-1/2 z-10"></div>
                  <h3 className="text-2xl font-semibold mb-3">2. Strategic Planning</h3>
                  <p className="text-gray-700">
                    We develop a comprehensive roadmap outlining solutions, timelines, and expected outcomes for your approval.
                  </p>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center relative">
                <div className="md:text-right md:pr-16">
                  <div className="hidden md:block absolute top-1/2 right-0 w-5 h-5 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10"></div>
                  <h3 className="text-2xl font-semibold mb-3">3. Design & Development</h3>
                  <p className="text-gray-700">
                    Our team brings the plan to life, creating designs and building functionality with regular client feedback.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center relative">
                <div className="hidden md:block"></div>
                <div className="md:pl-16">
                  <div className="hidden md:block absolute top-1/2 left-1/2 w-5 h-5 rounded-full bg-primary -translate-y-1/2 -translate-x-1/2 z-10"></div>
                  <h3 className="text-2xl font-semibold mb-3">4. Testing & Refinement</h3>
                  <p className="text-gray-700">
                    Rigorous testing ensures everything functions perfectly, with refinements based on client feedback.
                  </p>
                </div>
              </div>
              
              <div className="md:grid md:grid-cols-2 md:gap-8 md:items-center relative">
                <div className="md:text-right md:pr-16">
                  <div className="hidden md:block absolute top-1/2 right-0 w-5 h-5 rounded-full bg-primary -translate-y-1/2 translate-x-1/2 z-10"></div>
                  <h3 className="text-2xl font-semibold mb-3">5. Launch & Support</h3>
                  <p className="text-gray-700">
                    We manage the deployment process and provide ongoing support to ensure continued success.
                  </p>
                </div>
                <div className="hidden md:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Common questions about working with Zenarke
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How long does a typical project take?</h3>
                <p className="text-gray-700">
                  Project timelines vary based on complexity and scope. A simple website might take 4-6 weeks, while complex applications can take several months. We'll provide a detailed timeline during the planning phase.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What is your pricing structure?</h3>
                <p className="text-gray-700">
                  We offer flexible pricing options including project-based quotes, hourly rates, and retainer agreements. We'll work with you to find the best fit for your budget and requirements.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you provide support after launch?</h3>
                <p className="text-gray-700">
                  Yes, we offer ongoing support and maintenance packages to ensure your digital solutions continue to perform optimally. Our support includes updates, bug fixes, security patches, and performance monitoring.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How do you handle project changes?</h3>
                <p className="text-gray-700">
                  We understand that requirements can evolve during a project. We have a structured change request process that ensures changes are documented, estimated, and approved before implementation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient text-white">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Partner with Zenarke?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your digital objectives and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              <Link to="/contact">Start a Conversation</Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyUs;
