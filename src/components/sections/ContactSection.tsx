import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create professional WhatsApp message
    const whatsappMessage = `*New Contact Form Submission*

*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || 'Not provided'}
*Subject:* ${formData.subject}

*Message:*
${formData.message}

---
Sent from Appigo Website Contact Form`;

    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/9113565847?text=${encodedMessage}`;
    
    // Open WhatsApp with pre-filled message
    window.open(whatsappUrl, '_blank');
    
    // Show success state
    setFormSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container-custom">
        {/* Enhanced Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ready to Transform Your App Idea into Reality?</h2>
          <p className="text-lg text-gray-600">
            Let's collaborate to build your next successful app. Get in touch with our experts today for a free consultation.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* FAQ Section for SEO - WEBSITE DEVELOPMENT FOCUS */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
              Frequently Asked Questions - Website Development Bangalore
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Website Development Focus */}
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What is website development and why do I need it?</h4>
                <p className="text-gray-600">Website development is the process of creating websites for the internet. A website is your digital storefront that works 24/7 to showcase your business. We create professional websites that convert visitors into customers, with features like e-commerce, booking systems, and mobile-responsive design.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">How much does website development cost in Bangalore?</h4>
                <p className="text-gray-600">Website development costs in Bangalore typically range from ₹50,000 to ₹5,00,000 depending on complexity. We offer competitive pricing with free consultation to discuss your specific requirements for website development in Bangalore.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">How long does it take to develop a website in Bangalore?</h4>
                <p className="text-gray-600">Our website development projects in Bangalore are typically completed in 2-6 weeks depending on complexity. We use modern development practices to accelerate delivery while maintaining quality.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Do you provide e-commerce website development in Bangalore?</h4>
                <p className="text-gray-600">Yes! We specialize in e-commerce website development in Bangalore with features like payment gateways, inventory management, order tracking, and mobile-responsive design.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What technologies do you use for website development in Bangalore?</h4>
                <p className="text-gray-600">We use React, Next.js, WordPress, and modern web technologies for website development in Bangalore. Our tech stack ensures fast performance, SEO optimization, and easy maintenance.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Are you the best website development company in Bangalore?</h4>
                <p className="text-gray-600">Yes! Appigo is recognized as the #1 website development company in Bangalore, Karnataka. We have a proven track record of delivering high-quality websites that drive business growth and customer engagement.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Do you provide website development services in all areas of Bangalore?</h4>
                <p className="text-gray-600">Absolutely! We serve all areas of Bangalore including Whitefield, Marathahalli, Electronic City, Koramangala, Indiranagar, Jayanagar, BTM Layout, HSR Layout, Bellandur, Sarjapur, and more.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Can you help my website rank #1 on Google in Bangalore?</h4>
                <p className="text-gray-600">Yes! Our websites consistently rank #1 on Google for website development searches in Bangalore. We implement proven SEO strategies, local optimization, and performance techniques to ensure top rankings.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What is the difference between website development and web design?</h4>
                <p className="text-gray-600">Website development involves building the technical functionality and backend systems, while web design focuses on the visual appearance and user experience. We provide both services to create complete, professional websites.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Do you provide website maintenance services in Bangalore?</h4>
                <p className="text-gray-600">Yes! We offer comprehensive website maintenance services including regular updates, security patches, performance optimization, and content updates to keep your website running smoothly.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Can you create a website for my restaurant in Bangalore?</h4>
                <p className="text-gray-600">Absolutely! We specialize in creating websites for restaurants, cafes, and food businesses in Bangalore. Our restaurant websites include online ordering, menu management, table reservations, and delivery integration.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What makes Appigo different from other website development companies in Bangalore?</h4>
                <p className="text-gray-600">We're different because we're Bangalore-based, understand local business needs, guarantee Google #1 rankings, provide fast delivery (2-6 weeks), and offer ongoing support. Plus, we have a proven track record of 100+ successful projects.</p>
              </div>
            </div>
          </div>

          <Card className="p-8 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h3 className="text-xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        required
                        className="w-full"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Enter your email"
                        required
                        className="w-full"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this regarding?"
                      required
                      className="w-full"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Your Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Please describe your project or inquiry"
                      required
                      className="min-h-[120px] w-full"
                    />
                  </div>
                  <Button type="submit" className="w-full" disabled={formSubmitted}>
                    {formSubmitted ? (
                      <span className="flex items-center">
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Opening WhatsApp...
                      </span>
                    ) : (
                      "Send Message via WhatsApp"
                    )}
                  </Button>
                </form>
              </div>

              {/* Contact Information */}
              <div>
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-600">+91 9113565847</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-600">appigo.in@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Office Address</h4>
                      <p className="text-gray-600">
                        #404 B block JP tuplips,<br />
                        City, Banglore Rural, Karnataka, India<br />
                        
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Working Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 2:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}