import { Button } from "@/components/ui/button";
import { Smartphone, Download, Globe, Zap } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="bg-gradient-to-br from-gray-50 to-blue-50 py-16 md:py-24">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-lg">
            <h1 className="heading-xl">
              Transform Your Business with <span className="gradient-text">Digital Solutions</span>
            </h1>
            <p className="text-lg text-gray-600">
              Appigo is your complete digital partner. We build websites, develop apps, and automate your business with AI. 
              Let's turn your ideas into digital reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary flex items-center gap-2">
                <Download size={18} />
                Get Free Consultation
              </Button>
              <Button variant="outline" className="btn-secondary flex items-center gap-2">
                <Globe size={18} />
                View Our Work
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Smartphone className="h-4 w-4 text-primary" />
                <span>Mobile First</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-3 relative z-10 rotate-1 transform hover:rotate-0 transition-all duration-300">
              <img 
                src="https://placehold.co/600x800/4F46E5/FFFFFF/png?text=Appigo+Digital+Solutions" 
                alt="Appigo Digital Solutions" 
                className="rounded-2xl w-full h-auto"
              />
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full z-0"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-secondary rounded-full z-0"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-gradient-to-r from-primary/20 to-indigo-400/20 rounded-full blur-3xl z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
}