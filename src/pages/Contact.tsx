import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import backgroundImage1 from '@/assets/backgroundimage1.jpeg';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message Sent Successfully",
      description: "Thank you for contacting LUXORA TEXTILES. We will respond within 24 hours.",
    });
    
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage1})` }}
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative z-10 container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              Get in Touch
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Contact Us
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              We're here to assist with all your textile inquiries
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
                Send a Message
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Request a Consultation
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-card text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-card text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-border bg-card text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                      placeholder="+1 (234) 567-890"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border bg-card text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors"
                    >
                      <option value="">Select a subject</option>
                      <option value="general">General Inquiry</option>
                      <option value="quote">Request a Quote</option>
                      <option value="fabrics">Fabric Consultation</option>
                      <option value="custom">Custom Order</option>
                      <option value="wholesale">Wholesale Inquiry</option>
                      <option value="support">Customer Support</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-border bg-card text-foreground focus:border-gold focus:ring-1 focus:ring-gold outline-none transition-colors resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-gold w-full sm:w-auto text-sm uppercase tracking-wider flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
                Contact Information
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Visit Our Showroom
              </h2>
              
              <p className="text-muted-foreground leading-relaxed mb-10">
                We welcome you to visit our showroom to experience our premium textile 
                collection firsthand. Our expert team is ready to assist you with 
                personalized guidance and recommendations.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Location</h4>
                    <p className="text-muted-foreground">
                      123 Textile Avenue, Fashion District<br />
                      New York, NY 10001, United States
                    </p>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Phone</h4>
                    <a href="tel:+1234567890" className="text-muted-foreground hover:text-gold transition-colors">
                      +1 (234) 567-890
                    </a>
                    <br />
                    <a href="tel:+1234567891" className="text-muted-foreground hover:text-gold transition-colors">
                      +1 (234) 567-891
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Email</h4>
                    <a href="mailto:info@luxoratextiles.com" className="text-muted-foreground hover:text-gold transition-colors">
                      info@luxoratextiles.com
                    </a>
                    <br />
                    <a href="mailto:sales@luxoratextiles.com" className="text-muted-foreground hover:text-gold transition-colors">
                      sales@luxoratextiles.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2">Business Hours</h4>
                    <p className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM<br />
                      Saturday: 10:00 AM - 4:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-24 bg-ivory-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Us
            </h2>
            <div className="section-divider" />
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] bg-navy/5 border border-border overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                <p className="text-muted-foreground">
                  123 Textile Avenue, Fashion District<br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
