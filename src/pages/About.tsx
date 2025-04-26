
import { Card } from "@/components/ui/card";
import { Award, Shield, Users, Star } from "lucide-react";
import about from "../../public/images/about.png"

const About = () => {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      description: "With over 15 years in digital innovation, Alex leads Zenarke's vision and strategy."
    },
    {
      name: "Sarah Chen",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      description: "Sarah brings brands to life through compelling design and creative direction."
    },
    {
      name: "Marcus Williams",
      role: "Lead Developer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      description: "Marcus crafts robust technical solutions with a focus on performance and scalability."
    },
    {
      name: "Priya Patel",
      role: "Strategy Director",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
      description: "Priya helps clients navigate digital transformation with data-driven strategies."
    }
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Excellence",
      description: "We are committed to delivering the highest quality solutions in everything we do."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Integrity",
      description: "We build relationships based on trust, transparency, and ethical business practices."
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and partnership with our clients."
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Innovation",
      description: "We constantly push boundaries to find creative solutions to complex problems."
    }
  ];

  return (
    <div>
      {/* Main About Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className=" p-10">
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-700 mb-4">
                Founded in 2018, Zenarke emerged from a vision to bridge the gap between technical excellence and creative design in the digital space. What began as a small team of passionate innovators has grown into a full-service digital solutions company trusted by businesses worldwide.
              </p>
              <p className="text-gray-700 mb-4">
                Our journey has been defined by continuous learning, adaptation, and a relentless pursuit of excellence. We've evolved our services to meet the changing needs of the digital landscape while maintaining our core commitment to quality and client success.
              </p> 
            </div>
            <div className="flex justify-center">
              <img
                src={about}
                alt="Zenarke Team"
                className="rounded-lg w-[500px] "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 md:py-8 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              These core principles guide everything we do at Zenarke
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              The talented individuals behind Zenarke's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center">
                <div className="mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="rounded-full w-32 h-32 mx-auto object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-primary mb-2">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Mission</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto italic">
            "To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape."
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
