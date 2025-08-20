import { Globe, Smartphone, Bot, Code, Palette, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ServiceProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard = ({ icon, title, description, features }: ServiceProps) => {
  return (
    <Card className="feature-card">
      <CardHeader>
        <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <Check size={16} className="text-primary mt-1 shrink-0" />
              <span className="text-sm text-gray-600">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter>
        <Button className="w-full">GET FREE CONSULTATION</Button>
      </CardFooter>
    </Card>
  );
};

export function ServicesSection() {
  const services = [
    {
      icon: <Globe className="text-primary" />,
      title: "Website Development",
      description: "Professional websites that convert visitors into customers. From simple landing pages to complex e-commerce platforms.",
      features: [
        "Responsive Design (Mobile & Desktop)",
        "SEO Optimized for Better Rankings",
        "Fast Loading & Performance",
        "E-commerce & Business Websites"
      ]
    },
    {
      icon: <Smartphone className="text-primary" />,
      title: "App Development",
      description: "Custom mobile and web applications that solve your business challenges and engage your customers.",
      features: [
        "iOS & Android Mobile Apps",
        "Cross-Platform Solutions",
        "Custom Business Applications",
        "App Store Optimization"
      ]
    },
    {
      icon: <Bot className="text-primary" />,
      title: "AI Automation",
      description: "Intelligent automation solutions that streamline your business processes and boost productivity.",
      features: [
        "Chatbots & Customer Support",
        "Business Process Automation",
        "Data Analysis & Insights",
        "AI-Powered Tools Integration"
      ]
    },
    {
      icon: <Code className="text-primary" />,
      title: "Custom Software",
      description: "Tailor-made software solutions designed specifically for your business needs and workflows.",
      features: [
        "Business Management Systems",
        "CRM & ERP Solutions",
        "API Development & Integration",
        "Database Design & Management"
      ]
    },
    {
      icon: <Palette className="text-primary" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that provide exceptional user experiences and drive engagement.",
      features: [
        "User Interface Design",
        "User Experience Optimization",
        "Brand Identity & Design",
        "Prototyping & Wireframing"
      ]
    },
    {
      icon: <Zap className="text-primary" />,
      title: "Digital Consulting",
      description: "Strategic guidance to help you choose the right digital solutions for your business growth.",
      features: [
        "Technology Strategy Planning",
        "Digital Transformation Roadmap",
        "Performance Optimization",
        "Ongoing Support & Maintenance"
      ]
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Digital Solutions</h2>
          <p className="text-gray-600">
            We offer comprehensive digital services to help your business grow online. 
            From websites to AI automation, we've got you covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}