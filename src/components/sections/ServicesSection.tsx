import React from 'react';
import { Button } from '../ui/button';
import { Globe, Smartphone, ShoppingCart, Database, Zap, Shield, Star, MapPin, Clock, Users } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development Bangalore",
      description: "Professional website development services in Bangalore, Karnataka. We create stunning, responsive websites that rank #1 on Google and drive business growth.",
      features: [
        "Custom Website Design",
        "Responsive Mobile-First Design", 
        "SEO Optimization",
        "Fast Loading Performance",
        "Google #1 Ranking Guarantee"
      ],
      price: "Starting from ₹50,000",
      delivery: "2-4 weeks",
      location: "Bangalore, Karnataka",
      rating: "4.9/5",
      reviews: "50+ Reviews"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Website Development",
      description: "Powerful e-commerce websites with payment gateways, inventory management, and order tracking. Built for maximum conversions and sales growth.",
      features: [
        "Payment Gateway Integration",
        "Inventory Management",
        "Order Tracking System",
        "Mobile Shopping Experience",
        "Analytics & Reporting"
      ],
      price: "Starting from ₹1,50,000",
      delivery: "4-6 weeks",
      location: "Bangalore, Karnataka",
      rating: "4.9/5",
      reviews: "30+ Reviews"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile apps for iOS and Android. Modern UI/UX design with cutting-edge features and performance optimization.",
      features: [
        "iOS & Android Development",
        "Cross-Platform Solutions",
        "Modern UI/UX Design",
        "Performance Optimization",
        "App Store Optimization"
      ],
      price: "Starting from ₹2,00,000",
      delivery: "6-8 weeks",
      location: "Bangalore, Karnataka",
      rating: "4.8/5",
      reviews: "25+ Reviews"
    },
    {
      icon: Database,
      title: "Custom Web Applications",
      description: "Bespoke web applications tailored to your business needs. Scalable, secure, and built with modern technologies for optimal performance.",
      features: [
        "Custom Business Logic",
        "Scalable Architecture",
        "Security Implementation",
        "API Development",
        "Cloud Deployment"
      ],
      price: "Starting from ₹3,00,000",
      delivery: "8-12 weeks",
      location: "Bangalore, Karnataka",
      rating: "4.9/5",
      reviews: "20+ Reviews"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        {/* Section Header - WEBSITE DEVELOPMENT FOCUS */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 border border-blue-200 rounded-full text-sm font-medium text-blue-700 mb-6">
            <MapPin className="w-4 h-4" />
            Serving Bangalore & Karnataka
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Website Development Services
            </span>
            <br />
            <span className="text-gray-800">in Bangalore, Karnataka</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Appigo is the <strong className="text-blue-600">#1 Website Development Company in Bangalore</strong>. 
            We create professional websites that rank #1 on Google and drive measurable business growth. 
            Get your free consultation today!
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 p-8 group">
              {/* Service Icon */}
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-10 h-10 text-white" />
              </div>

              {/* Service Title */}
              <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>

              {/* Service Description */}
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 bg-green-500 rounded-full flex-shrink-0"></div>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Service Details */}
              <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Starting Price</p>
                  <p className="font-semibold text-blue-600">{service.price}</p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500 mb-1">Delivery Time</p>
                  <p className="font-semibold text-green-600">{service.delivery}</p>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center justify-between mb-6 p-4 bg-blue-50 rounded-xl">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="font-semibold text-gray-900">{service.rating}</span>
                  <span className="text-sm text-gray-600">({service.reviews})</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>{service.location}</span>
                </div>
              </div>

              {/* CTA Button */}
              <Button
                onClick={() => {
                  const message = encodeURIComponent(`Hi! I'm interested in your ${service.title} services in Bangalore. Can you tell me more about pricing and process?`);
                  const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 group-hover:shadow-lg"
              >
                Get Free Consultation
              </Button>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section - LOCAL FOCUS */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Appigo for Website Development in Bangalore?
            </h3>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              We're not just another website development company. We're the #1 choice in Bangalore for a reason.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Local Expertise</h4>
              <p className="text-blue-100 text-sm">Bangalore-based team with deep understanding of local business needs</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Google #1 Ranking</h4>
              <p className="text-blue-100 text-sm">Our websites consistently rank #1 on Google in Bangalore</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Fast Delivery</h4>
              <p className="text-blue-100 text-sm">Get your website in 2-6 weeks, not months</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Expert Team</h4>
              <p className="text-blue-100 text-sm">Experienced developers with proven track record</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center mt-12">
            <Button
              onClick={() => {
                const message = encodeURIComponent("Hi! I want to discuss website development for my business in Bangalore. Can you help me get started?");
                const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-white text-blue-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-2xl text-lg transition-all duration-300 hover:shadow-xl"
            >
              Start Your Website Project Today
            </Button>
          </div>
        </div>

        {/* Local Business Focus */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Serving All Areas of Bangalore & Karnataka
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {[
              "Whitefield", "Marathahalli", "Electronic City", "Koramangala", "Indiranagar", "Jayanagar",
              "BTM Layout", "HSR Layout", "Bellandur", "Sarjapur", "Bannerghatta", "Mysore Road",
              "Tumkur Road", "Hosur Road", "Airport Road", "MG Road", "Brigade Road", "Commercial Street"
            ].map((area, index) => (
              <div key={index} className="bg-white p-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                <p className="text-sm font-medium text-gray-700">{area}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;