import { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { DollarSign, Shield, Truck, HeadphonesIcon } from 'lucide-react';
import backgroundImage2 from '@/assets/backgroundimage2.jpeg';

// Counter Component with Animation
const AnimatedCounter = ({ end, suffix = '+', duration = 2000 }: { end: number; suffix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (!isInView) return;

    const startValue = 10;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart);
      
      setCount(currentValue);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="counter-number">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

const stats = [
  { value: 2894, label: 'Sold Clothes', suffix: '+' },
  { value: 1480, label: 'Unique Designs', suffix: '+' },
  { value: 1000, label: 'Satisfied Customers', suffix: '+' },
];

const values = [
  {
    number: '01',
    title: 'Best Prices',
    description: 'Competitive pricing without compromising on quality, ensuring maximum value for every purchase.',
    icon: DollarSign,
  },
  {
    number: '02',
    title: "Buyer's Protection",
    description: 'Comprehensive guarantees and secure transactions that protect your investment at every step.',
    icon: Shield,
  },
  {
    number: '03',
    title: 'Fast Shipping',
    description: 'Expedited delivery services with real-time tracking to ensure your textiles arrive on schedule.',
    icon: Truck,
  },
  {
    number: '04',
    title: 'Live Support',
    description: 'Dedicated customer service team available to assist with inquiries and provide expert guidance.',
    icon: HeadphonesIcon,
  },
];

const WhyUs = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${backgroundImage2})` }}
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
              Our Commitment
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Why Choose LUXORA
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Unparalleled quality, service, and value in premium textiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              By The Numbers
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Our Achievements
            </h2>
            <div className="w-24 h-px mx-auto bg-gradient-to-r from-transparent via-gold to-transparent" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
                <p className="text-primary-foreground/70 text-lg mt-4 uppercase tracking-wider">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Values Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
              Our Values
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              What Sets Us Apart
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              At LUXORA TEXTILES, we operate with unwavering principles that ensure 
              every customer receives exceptional value and service.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="value-card group"
              >
                <span className="text-gold font-serif text-4xl font-bold opacity-30 block mb-4">
                  {value.number}
                </span>
                <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors duration-500">
                  <value.icon className="w-7 h-7 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Assurance Section */}
      <section className="py-24 bg-ivory-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
                Quality Assurance
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
                Committed to Excellence
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  LUXORA TEXTILES operates under global standards for textile durability 
                  and thread-count accuracy. Our materials are sourced from certified mills 
                  worldwide, ensuring exceptional quality, sustainability, and compliance 
                  with international textile regulations.
                </p>
                <p>
                  Every fabric undergoes rigorous quality control processes, from initial 
                  sourcing to final delivery. Our ISO 9001 certification reflects our 
                  commitment to maintaining the highest standards in the industry.
                </p>
              </div>

              <div className="mt-10 flex flex-col sm:flex-row gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <Shield className="w-8 h-8 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">ISO 9001</h4>
                    <p className="text-sm text-muted-foreground">Certified Quality</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-gold/10 flex items-center justify-center">
                    <svg className="w-8 h-8 text-gold" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Government</h4>
                    <p className="text-sm text-muted-foreground">Authorized Supplier</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                <img
                  src={backgroundImage2}
                  alt="Quality Textiles"
                  className="w-full h-[500px] object-cover shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy">
        <div className="container mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
              Experience LUXORA Quality
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Join thousands of satisfied customers who trust LUXORA TEXTILES 
              for their premium fabric needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-sm uppercase tracking-wider">
                Contact Us Today
              </Link>
              <Link to="/services" className="btn-navy text-sm uppercase tracking-wider">
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
