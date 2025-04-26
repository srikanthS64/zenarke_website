
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Briefcase, Users, Star } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission delay
    setTimeout(() => {
      toast({
        title: "Message Sent",
        description: "We've received your message and will contact you shortly.",
      });
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  return (
    <div>
      {/* FAQ Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Have questions? We've got answers to some of the most common questions about working with us.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">How quickly will you respond to my inquiry?</h3>
                <p className="text-gray-700">
                  We typically respond to all inquiries within 24 business hours. For urgent matters, please call our office directly.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you offer consultations before starting a project?</h3>
                <p className="text-gray-700">
                  Yes, we offer initial consultations to discuss your project needs, goals, and how we can help. These can be conducted in person, via phone, or video conference.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">What information should I prepare before contacting you?</h3>
                <p className="text-gray-700">
                  To make our initial discussion more productive, consider preparing information about your project goals, timeline, budget expectations, and any specific requirements or challenges you're facing.
                </p>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Do you work with clients outside your local area?</h3>
                <p className="text-gray-700">
                  Absolutely! We work with clients globally and have processes in place to ensure effective communication and collaboration regardless of location.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
