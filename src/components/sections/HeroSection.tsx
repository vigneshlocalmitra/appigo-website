import React from 'react';
import { Button } from '../ui/button';
import { Download, Globe, Smartphone, ShoppingCart, Truck, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-400/20 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Main Headline - WEBSITE DEVELOPMENT FOCUS */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              #1 Website Development Company
            </span>
            <br />
            <span className="text-gray-800">in Bangalore, Karnataka</span>
          </h1>

          {/* Subheadline - LOCAL FOCUS */}
          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            <strong className="text-blue-600">Appigo</strong> is the leading website development company in Bangalore, 
            creating stunning websites that rank #1 on Google. We specialize in website development, 
            e-commerce solutions, and custom web applications that drive business growth.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              onClick={() => {
                const message = encodeURIComponent("Hi! I'm looking for website development services in Bangalore. Can you help me create a professional website that ranks #1 on Google?");
                const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                window.open(whatsappUrl, '_blank');
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 group"
            >
              <Globe size={22} className="group-hover:scale-110 transition-transform" />
              Get Free Website Consultation
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-gray-300 hover:border-blue-500 text-gray-700 hover:text-blue-600 px-8 py-5 text-lg font-semibold rounded-2xl transition-all duration-300"
            >
              View Our Website Portfolio
            </Button>
          </div>

          {/* Trust Indicators - LOCAL FOCUS */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-16 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span>4.9/5 Rating (50+ Reviews)</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5 text-blue-500" />
              <span>100+ Websites Delivered</span>
            </div>
            <div className="flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-green-500" />
              <span>Bangalore Based Team</span>
            </div>
            <div className="flex items-center gap-2">
              <Truck className="w-5 h-5 text-purple-500" />
              <span>Free Consultation</span>
            </div>
          </div>

          {/* Service Cards - WEBSITE DEVELOPMENT FOCUS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Website Development Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Website Development</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Professional websites that rank #1 on Google. Custom design, SEO optimization, and fast performance.
              </p>
            </div>

            {/* E-commerce Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-purple-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <ShoppingCart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">E-commerce Websites</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Powerful e-commerce platforms with payment gateways, inventory management, and order tracking.
              </p>
            </div>

            {/* Mobile Apps Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">Mobile Apps</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Native and cross-platform mobile apps for iOS and Android with modern UI/UX design.
              </p>
            </div>

            {/* SEO Optimization Card */}
            <div className="bg-white p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-orange-200 group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform">
                <Download className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">SEO Optimization</h3>
              <p className="text-gray-600 text-center text-sm leading-relaxed">
                Get your website to rank #1 on Google with our proven SEO strategies and optimization techniques.
              </p>
            </div>
          </div>

          {/* Local Business Focus */}
          <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-3xl border border-blue-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Why Choose Appigo for Website Development in Bangalore?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
                <p className="text-gray-600">Bangalore-based team with deep understanding of local business needs and market trends.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Google #1 Ranking</h3>
                <p className="text-gray-600">Our websites consistently rank #1 on Google for website development searches in Bangalore.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">100+ successful website projects delivered with measurable business growth.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;