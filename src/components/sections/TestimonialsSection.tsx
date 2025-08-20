import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
}

export function TestimonialsSection() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO",
      company: "TechStart Inc.",
      testimonial: "Appigo transformed our business idea into a fully functional app that exceeded our expectations. Their team was professional, responsive, and delivered on time. We've seen a 40% growth in user engagement since launch.",
      image: "https://placehold.co/100x100/4F46E5/FFFFFF/png?text=SJ"
    },
    {
      id: 2,
      name: "Michael Brown",
      role: "Founder",
      company: "EcoSolutions",
      testimonial: "Working with Appigo was a game-changer for our startup. Their team understood our vision perfectly and created an intuitive, beautiful app that our customers love. The ongoing support has been exceptional.",
      image: "https://placehold.co/100x100/4F46E5/FFFFFF/png?text=MB"
    },
    {
      id: 3,
      name: "Emma Wilson",
      role: "Marketing Director",
      company: "Global Retail",
      testimonial: "Our e-commerce app built by Appigo has revolutionized how we connect with customers. The seamless UX and robust backend have significantly improved our conversion rates. I highly recommend their services.",
      image: "https://placehold.co/100x100/4F46E5/FFFFFF/png?text=EW"
    },
    {
      id: 4,
      name: "David Chen",
      role: "CTO",
      company: "FinTech Solutions",
      testimonial: "The security and performance of our banking app were our top priorities, and Appigo delivered on both fronts. Their attention to detail and technical expertise are unmatched in the industry.",
      image: "https://placehold.co/100x100/4F46E5/FFFFFF/png?text=DC"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">What Our Clients Say</h2>
          <p className="text-gray-600">
            Don't just take our word for it. Here's what our clients have to say about their experience working with Appigo.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <Card className="border-none shadow-lg">
            <CardContent className="p-8">
              <div className="text-primary opacity-30 mb-6">
                <QuoteIcon className="h-12 w-12" />
              </div>
              <p className="text-lg mb-8 text-gray-700 italic">
                "{testimonials[activeIndex].testimonial}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{testimonials[activeIndex].name}</h4>
                  <p className="text-sm text-gray-500">
                    {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </Button>
            {testimonials.map((_, index) => (
              <Button
                key={index}
                variant={activeIndex === index ? "default" : "outline"}
                size="icon"
                className="w-3 h-3 p-0 rounded-full"
                onClick={() => setActiveIndex(index)}
              >
                <span className="sr-only">Go to slide {index + 1}</span>
              </Button>
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="rounded-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}