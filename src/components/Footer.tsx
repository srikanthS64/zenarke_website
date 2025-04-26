
import { Link } from "react-router-dom";
import { Mail, Briefcase, Rocket, Info, HelpCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-gradient text-2xl font-bold mb-4">Zenarke</h3>
            <p className="text-gray-600 mb-4">
              Modern digital solutions that transform how businesses connect, engage, and grow in the digital landscape.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/features" className="text-gray-600 hover:text-primary transition-colors">
                  Features
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li className="text-gray-600">Web Development</li>
              <li className="text-gray-600">Mobile Applications</li>
              <li className="text-gray-600">Branding & Identity</li>
              <li className="text-gray-600">Digital Strategy</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <p className="text-gray-600 mb-2">123 Digital Avenue</p>
            <p className="text-gray-600 mb-2">Tech City, TC 10101</p>
            <p className="text-gray-600 mb-2">info@zenarke.com</p>
            <p className="text-gray-600 mb-4">+1 (555) 123-4567</p>
          </div>
        </div>

        <hr className="my-8 border-gray-200" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © 2025 Zenarke. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
