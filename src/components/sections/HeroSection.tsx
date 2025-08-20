import { Button } from "@/components/ui/button";
import { Smartphone, Download, Globe, Zap, DollarSign, Clock, Shield, Star, Users, Award } from "lucide-react";

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-indigo-500/5"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10 max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-full text-sm font-medium text-blue-700">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Trusted by 100+ Businesses
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight tracking-tight">
                Build Your Dream applications with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-purple-700">
                  appi
                </span>
                <span className="text-purple-600">G</span>
                <span className="text-purple-600">o</span>
              </h1>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                From Ideas into Powerful- Apps • Websites • SaaS • Automation solutions that transform your business.
                We build it concept to launch in <span className="font-bold text-blue-600">4-8 weeks</span>.
                Book free consultation today and let's turn your idea into reality.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => {
                    const message = encodeURIComponent("Hi! I'd like to book a free consultation about your app development services. Can you help me get started?");
                    const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                    window.open(whatsappUrl, '_blank');
                  }}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-10 py-5 text-lg font-bold rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center gap-3 group"
                >
                  <Download size={22} className="group-hover:scale-110 transition-transform" />
                  Book a Free Consultation
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-8 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">4-8 Weeks Delivery</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="font-medium">AI Automation</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="font-medium">Mobile First</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative h-80 overflow-hidden">
                        {/* Animated Cards Container */}
            <div className="absolute inset-0 flex items-center">
              <div className="flex animate-slide space-x-8">

                {/* Card 1: Proven Results */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 w-72 flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>

                    <div className="space-y-3">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-700">Avg. 3.2x ROI</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-700">Launch in 21 Days</p>
                        <p className="text-xs text-gray-500">Not 2-4 Months!</p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        const message = encodeURIComponent("Hi! I'm interested in learning more about your money-back guarantee and proven results. Can you tell me more?");
                        const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg"
                    >
                      Money-Back Guarantee
                    </Button>
                  </div>
                </div>

                {/* Card 2: Expert Team */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 w-72 flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>

                    <div className="space-y-3">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-blue-700">25+ Projects</p>
                      </div>

                      <div className="bg-blue-100 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-blue-700">3+ Years Experience</p>
                        <p className="text-xs text-gray-500">AI & Mobile Experts</p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        const message = encodeURIComponent("Hi! I'd like to learn more about your expert team and experience. Can you tell me about your developers?");
                        const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg"
                    >
                      Meet Our Team
                    </Button>
                  </div>
                </div>

                {/* Card 3: 24/7 Support */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 w-72 flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>

                    <div className="space-y-3">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-purple-700">Regular Maintenance</p>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-purple-700">Bug Free Updates</p>
                        <p className="text-xs text-gray-500">Always Latest Tech</p>
                      </div>
                    </div>

                    <Button 
                      onClick={() => {
                        const message = encodeURIComponent("Hi! I need support with my project. Can you help me?");
                        const whatsappUrl = `https://wa.me/9113565847?text=${message}`;
                        window.open(whatsappUrl, '_blank');
                      }}
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-lg"
                    >
                      Get Support
                    </Button>
                  </div>
                </div>

                {/* Duplicate cards for seamless loop - EXACT COPIES */}
                <div className="bg-white rounded-3xl shadow-lg border border-gray-100 p-4 w-72 flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto">
                      <DollarSign className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Proven Results</h3>

                    <div className="space-y-3">
                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-700">Avg. 3.2x ROI</p>
                      </div>

                      <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-green-700">Launch in 21 Days</p>
                        <p className="text-xs text-gray-500">Not 2-4 Months!</p>
                      </div>
                    </div>

                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white text-sm font-medium py-2 rounded-lg">
                      Money-Back Guarantee
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-72 flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Expert Team</h3>

                    <div className="space-y-3">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-blue-700">25+ Projects</p>
                      </div>

                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-blue-700">3+ Years Experience</p>
                        <p className="text-xs text-gray-500">AI & Mobile Experts</p>
                      </div>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-lg">
                      Meet Our Team
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 w-72 flex-shrink-0 hover:shadow-xl transition-all duration-300">
                  <div className="text-center space-y-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto">
                      <Shield className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">24/7 Support</h3>

                    <div className="space-y-3">
                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-purple-700">Regular Maintenance</p>
                      </div>

                      <div className="bg-purple-50 border border-purple-200 rounded-lg p-3">
                        <p className="text-sm font-medium text-purple-700">Bug Free Updates</p>
                        <p className="text-xs text-gray-500">Always Latest Tech</p>
                      </div>
                    </div>

                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium py-2 rounded-lg">
                      Get Support
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}