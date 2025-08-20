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
          {/* FAQ Section for SEO */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Frequently Asked Questions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What is an app and how can you help me build one?</h4>
                <p className="text-gray-600">An app is a software application designed for mobile devices or web browsers. We specialize in building custom apps for businesses, from simple mobile apps to complex enterprise solutions. Our team creates apps that drive engagement and business growth.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What is a website and why do I need one?</h4>
                <p className="text-gray-600">A website is your digital storefront that works 24/7 to showcase your business. We create professional websites that convert visitors into customers, with features like e-commerce, booking systems, and mobile-responsive design.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">How much does app development cost in Bangalore?</h4>
                <p className="text-gray-600">App development costs in Bangalore typically range from ₹2-15 lakhs depending on complexity. We offer competitive pricing with free consultation to discuss your specific requirements.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">How long does it take to develop a food delivery app?</h4>
                <p className="text-gray-600">Our food delivery apps are typically completed in 4-8 weeks. We use modern development practices and pre-built components to accelerate delivery while maintaining quality.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">Do you provide e-commerce website development?</h4>
                <p className="text-gray-600">Yes! We specialize in e-commerce website development with features like payment gateways, inventory management, order tracking, and mobile-responsive design.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h4 className="font-semibold text-lg mb-3 text-gray-900">What technologies do you use for app development?</h4>
                <p className="text-gray-600">We use React Native, Flutter, Swift, Kotlin, and modern web technologies. Our tech stack ensures cross-platform compatibility, fast performance, and easy maintenance.</p>
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