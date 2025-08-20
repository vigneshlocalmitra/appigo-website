import { LightbulbIcon, Code, ClipboardCheck, RocketIcon, Users, Cog } from "lucide-react";
import { cn } from "@/lib/utils";

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

export function ProcessSection() {
  const steps: Step[] = [
    {
      id: 1,
      icon: <LightbulbIcon className="h-8 w-8" />,
      title: "Discovery & Strategy",
      description: "We analyze your business goals, target audience, and digital needs to create a comprehensive strategy and project roadmap.",
      color: "bg-blue-500/10 text-blue-600",
    },
    {
      id: 2,
      icon: <Users className="h-8 w-8" />,
      title: "Design & Planning",
      description: "Our designers create stunning UI/UX while our consultants plan the technical architecture and user journey.",
      color: "bg-purple-500/10 text-purple-600",
    },
    {
      id: 3,
      icon: <Code className="h-8 w-8" />,
      title: "Development & Testing",
      description: "We build your digital solution using modern technologies with continuous testing and quality assurance.",
      color: "bg-amber-500/10 text-amber-600",
    },
    {
      id: 4,
      icon: <Cog className="h-8 w-8" />,
      title: "Launch & Optimization",
      description: "We deploy your solution, monitor performance, and optimize for the best user experience and business results.",
      color: "bg-green-500/10 text-green-600",
    },
    {
      id: 5,
      icon: <RocketIcon className="h-8 w-8" />,
      title: "Growth & Support",
      description: "Ongoing support, maintenance, and growth strategies to ensure your digital solutions continue driving business success.",
      color: "bg-indigo-500/10 text-indigo-600",
    },
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="heading-lg mb-4">Our Digital Agency Process</h2>
          <p className="text-gray-600">
            We follow a proven methodology to transform your business ideas into successful digital solutions.
            Our streamlined process ensures quality, efficiency, and measurable results.
          </p>
        </div>

        <div className="relative">
          {/* Progress Line */}
          <div className="hidden md:block absolute left-1/2 top-10 bottom-10 w-0.5 bg-gray-200 -translate-x-1/2 z-0"></div>

          {/* Steps */}
          <div className="space-y-16 md:space-y-0 relative z-10">
            {steps.map((step, index) => (
              <div key={step.id} className="md:flex items-center">
                <div
                  className={cn(
                    "md:w-1/2",
                    index % 2 === 0 ? "md:pr-16 text-right" : "md:pl-16 md:order-1"
                  )}
                >
                  <div className={cn(
                    "inline-block mb-4 p-4 rounded-full",
                    step.color
                  )}>
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>

                <div className="hidden md:flex justify-center items-center">
                  <div className={cn(
                    "h-12 w-12 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white font-bold shadow-lg"
                  )}>
                    {step.id}
                  </div>
                </div>

                {index % 2 !== 0 && <div className="md:w-1/2"></div>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}