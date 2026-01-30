import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Accessories from '@/assets/Accessories.jpg';
import curtains from '@/assets/curtains.jpg';
import cushions from '@/assets/cushions.jpg';
import Decor from '@/assets/Decor.jpg';
import Dressmaking from '@/assets/Dressmaking.jpg';
import Fabric from '@/assets/Fabric.jpg';
import backgroundImage1 from '@/assets/backgroundimage1.jpeg';

const services = [
  {
    image: Accessories,
    title: 'Bespoke Accessories',
    description: 'Custom-crafted textile accessories tailored to your specifications with premium materials and expert finishing.',
  },
  {
    image: curtains,
    title: 'Curtains & Blinds',
    description: 'Exquisite window treatments combining functionality with elegance, professionally measured and installed.',
  },
  {
    image: cushions,
    title: 'Luxury Cushions',
    description: 'Handcrafted cushions featuring premium fabrics and exceptional attention to detail for refined interiors.',
  },
  {
    image: Decor,
    title: 'Interior Décor',
    description: 'Comprehensive textile solutions for interior design projects, from concept to completion.',
  },
  {
    image: Dressmaking,
    title: 'Dressmaking Fabrics',
    description: 'Curated selection of premium dressmaking materials for fashion designers and artisan tailors.',
  },
  {
    image: Fabric,
    title: 'Premium Fabrics',
    description: 'Exclusive collection of cottons, silks, linens, and specialty textiles sourced from certified mills worldwide.',
  },
];

const Services = () => {
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
              What We Offer
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              Our Services
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              Comprehensive textile solutions for every creative vision
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
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
              Our Expertise
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Tailored Textile Solutions
            </h2>
            <div className="section-divider mb-8" />
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              From bespoke accessories to premium fabrics, LUXORA TEXTILES delivers 
              exceptional quality across every category of textile services.
            </p>
          </motion.div>

          {/* 6-Grid Layout */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="service-card group relative h-[400px] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="service-overlay" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <motion.div
                    initial={{ y: 20 }}
                    className="transform transition-transform duration-500 group-hover:-translate-y-2"
                  >
                    <h3 className="font-serif text-2xl font-bold text-primary-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {service.description}
                    </p>
                  </motion.div>
                  
                  {/* Hover Line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gold transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              How We Work
            </span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Our Process
            </h2>
            <div className="section-divider" />
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Discuss your vision and requirements' },
              { step: '02', title: 'Selection', desc: 'Explore our curated fabric collection' },
              { step: '03', title: 'Customization', desc: 'Tailor materials to your specifications' },
              { step: '04', title: 'Delivery', desc: 'Quality-assured delivery to your door' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative text-center"
              >
                <span className="text-gold font-serif text-6xl font-bold opacity-20 block mb-4">
                  {item.step}
                </span>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3 -mt-8 relative z-10">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
                
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-[calc(100%_-_1rem)] w-8 h-px bg-gold" />
                )}
              </motion.div>
            ))}
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
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Our expert team is ready to help you find the perfect textiles 
              for your next creation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-gold text-sm uppercase tracking-wider">
                Request a Quote
              </Link>
              <Link to="/why-us" className="btn-navy text-sm uppercase tracking-wider">
                Why Choose Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
