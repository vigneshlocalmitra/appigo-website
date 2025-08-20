import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-16 bg-primary">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your App Idea into Reality?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's collaborate to build your next successful app. Book a free consultation with our experts today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm ready to transform my app idea into reality. Can you help me book a free consultation?");
                const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              size="lg" 
              className="bg-white text-primary hover:bg-gray-100"
            >
              Book Free Consultation
            </Button>
            <Button 
              onClick={() => {
                const message = encodeURIComponent("Hi! I'd like to learn more about your services. Can you send me details?");
                const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/10"
            >
              View Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}