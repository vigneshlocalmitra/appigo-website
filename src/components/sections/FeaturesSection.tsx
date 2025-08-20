import { Check, Zap, Shield, Smartphone, Settings, Lock, Users, Clock } from "lucide-react";

export function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-12 w-12 text-primary" />,
      title: "Fast Delivery",
      description: "We deliver projects on time with rapid development cycles and efficient project management."
    },
    {
      icon: <Shield className="h-12 w-12 text-primary" />,
      title: "Quality Assurance",
      description: "Rigorous testing and quality checks ensure your digital solutions work flawlessly."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-primary" />,
      title: "Mobile First",
      description: "All our solutions are designed mobile-first for the best user experience across devices."
    },
    {
      icon: <Users className="h-12 w-12 text-primary" />,
      title: "Expert Team",
      description: "Experienced developers, designers, and consultants dedicated to your project success."
    },
    {
      icon: <Settings className="h-12 w-12 text-primary" />,
      title: "Custom Solutions",
      description: "Tailored digital solutions that perfectly match your business requirements and goals."
    },
    {
      icon: <Clock className="h-12 w-12 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock support and maintenance to keep your digital solutions running smoothly."
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Why Choose Appigo?</h2>
          <p className="text-gray-600">
            We combine technical expertise with business understanding to deliver digital solutions
            that drive real results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}