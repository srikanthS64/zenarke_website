
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-accent text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-grid-16" />
      <div className="container mx-auto px-4 md:px-6 text-center relative">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Digital Presence?</h2>
          <p className="text-xl opacity-90">
            Let's collaborate to create innovative digital solutions that drive results.
          </p>
          <Button asChild variant="secondary" className="bg-white text-primary hover:bg-gray-100">
            <Link to="/contact">Get Started Today</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
