import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import backgroundImage1 from '@/assets/backgroundimage1.jpeg';
import backgroundImage2 from '@/assets/backgroundimage2.jpeg';

const slides = [
  {
    image: backgroundImage1,
    subtitle: 'Premium Quality Textiles',
    title: 'Crafting Excellence in Every Thread',
    description: 'Discover our exquisite collection of hand-selected fabrics, designed to inspire creativity and elevate your projects.',
  },
  {
    image: backgroundImage2,
    subtitle: 'Curated Collections',
    title: 'Where Elegance Meets Durability',
    description: 'From silks to linens, explore textiles that combine timeless beauty with exceptional craftsmanship.',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative h-screen min-h-[700px] overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0"
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          />
          <div className="hero-overlay absolute inset-0" />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-block text-gold text-sm uppercase tracking-[0.3em] mb-4"
                >
                  {slides[currentSlide].subtitle}
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="font-serif text-4xl md:text-5xl lg:text-7xl font-bold text-primary-foreground mb-6 leading-tight"
                >
                  {slides[currentSlide].title}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-xl leading-relaxed"
                >
                  {slides[currentSlide].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Link to="/services" className="btn-gold text-sm uppercase tracking-wider">
                    Explore Collections
                  </Link>
                  <Link to="/about" className="btn-navy text-sm uppercase tracking-wider">
                    Our Story
                  </Link>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-6 right-6 top-1/2 -translate-y-1/2 flex justify-between z-20 pointer-events-none">
        <button
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 pointer-events-auto"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 flex items-center justify-center text-primary-foreground hover:bg-gold hover:text-navy hover:border-gold transition-all duration-300 pointer-events-auto"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-12 h-1 rounded-full transition-all duration-500 ${
              index === currentSlide ? 'bg-gold' : 'bg-primary-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-primary-foreground/60 text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-px h-8 bg-gradient-to-b from-gold to-transparent"
          />
        </div>
      </motion.div>
    </section>
  );
};

// Featured Section
const FeaturedSection = () => {
  return (
    <section className="py-24 bg-ivory-dark">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            Welcome to LUXORA
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
            Premium Textile Excellence
          </h2>
          <div className="section-divider mb-8" />
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed text-lg">
            At LUXORA TEXTILES, we believe that exceptional fabrics are the foundation of 
            extraordinary creations. Our curated selection combines timeless beauty with 
            uncompromising quality.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { number: '01', title: 'Curated Selection', desc: 'Hand-picked fabrics from certified mills worldwide' },
            { number: '02', title: 'Expert Guidance', desc: 'Professional assistance for every project' },
            { number: '03', title: 'Quality Assured', desc: 'ISO 9001 certified materials and processes' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center p-8 bg-card rounded-sm shadow-sm hover:shadow-lg transition-shadow duration-500"
            >
              <span className="text-gold font-serif text-5xl font-bold mb-4 block">{item.number}</span>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// CTA Section
const CTASection = () => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <pattern id="pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="20" cy="20" r="1" fill="currentColor" className="text-gold" />
          </pattern>
          <rect fill="url(#pattern)" width="100%" height="100%" />
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
            Start Your Project
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Create Something Extraordinary?
          </h2>
          <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
            Whether you're designing a signature garment, transforming your interior, 
            or seeking the perfect fabric for a special occasion, our team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-gold text-sm uppercase tracking-wider">
              Request Consultation
            </Link>
            <Link to="/services" className="btn-navy text-sm uppercase tracking-wider">
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <>
      <HeroSlider />
      <FeaturedSection />
      <CTASection />
    </>
  );
};

export default Home;
