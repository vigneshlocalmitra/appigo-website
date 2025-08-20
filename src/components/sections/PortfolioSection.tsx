import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  tags: string[];
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const projects: Project[] = [
    {
      id: 1,
      title: "FreshMarket",
      category: "ecommerce",
      image: "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=FreshMarket+App",
      description: "A multi-vendor grocery delivery app with real-time order tracking and inventory management.",
      tags: ["React Native", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "RideNow",
      category: "transportation",
      image: "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=RideNow+App",
      description: "A ride-hailing platform with advanced route optimization and driver-passenger matching.",
      tags: ["Flutter", "Firebase", "Google Maps API"]
    },
    {
      id: 3,
      title: "MealDash",
      category: "food",
      image: "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=MealDash+App",
      description: "A food delivery app connecting local restaurants with customers for seamless ordering.",
      tags: ["React Native", "Express", "PostgreSQL"]
    },
    {
      id: 4,
      title: "QuickService",
      category: "services",
      image: "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=QuickService+App",
      description: "On-demand home services platform connecting customers with verified service providers.",
      tags: ["Kotlin", "Spring Boot", "AWS"]
    },
    {
      id: 5,
      title: "ShopMart",
      category: "ecommerce",
      image: "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=ShopMart+App",
      description: "A multi-vendor e-commerce marketplace with personalized recommendations.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 6,
      title: "HealthConnect",
      category: "healthcare",
      image: "https://placehold.co/600x400/4F46E5/FFFFFF/png?text=HealthConnect+App",
      description: "Telemedicine platform connecting patients with healthcare providers for virtual consultations.",
      tags: ["Flutter", "Firebase", "HIPAA Compliant"]
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "ecommerce", name: "E-Commerce" },
    { id: "food", name: "Food Delivery" },
    { id: "transportation", name: "Transportation" },
    { id: "services", name: "Services" },
    { id: "healthcare", name: "Healthcare" }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Portfolio</h2>
          <p className="text-gray-600">
            Check out some of our recent app development projects across various industries.
            We've helped businesses transform their ideas into successful mobile applications.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {categories.map(category => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              size="sm"
              className="rounded-full"
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <Card key={project.id} className="overflow-hidden group cursor-pointer">
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <Button 
            onClick={() => {
              const message = encodeURIComponent("Hi! I'd like to see more of your portfolio projects. Can you show me more examples?");
              const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
              window.open(whatsappUrl, '_blank');
            }}
            variant="outline"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
}