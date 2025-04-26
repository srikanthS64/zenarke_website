
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Users, Star, Check } from "lucide-react";

const About = () => {
  const achievements = [
    {
      icon: <Users className="h-6 w-6 text-primary" />,
      title: "500+",
      description: "Satisfied Clients"
    },
    {
      icon: <Star className="h-6 w-6 text-primary" />,
      title: "98%",
      description: "Client Satisfaction"
    },
    {
      icon: <Award className="h-6 w-6 text-primary" />,
      title: "15+",
      description: "Years Experience"
    }
  ];

  const features = [
    "Expert team of developers and designers",
    "Cutting-edge technology solutions",
    "Customized digital strategies",
    "Proven track record of success"
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Crafting Digital Excellence Since 2008
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              At Zenarke, we are passionate innovators committed to digital excellence. Our team combines creative thinking with technical expertise to deliver cutting-edge solutions that drive growth and transform businesses in the digital landscape.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-primary" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              <Button asChild className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90">
                <Link to="/about">Discover Our Story</Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  {achievement.icon}
                </div>
                <h3 className="text-2xl font-bold text-primary mb-2">{achievement.title}</h3>
                <p className="text-gray-600">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
