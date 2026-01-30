import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import backgroundImage1 from '@/assets/backgroundimage1.jpeg';
import backgroundImage2 from '@/assets/backgroundimage2.jpeg';

const About = () => {
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
              Our Story
            </span>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
              About LUXORA TEXTILES
            </h1>
            <p className="text-primary-foreground/80 text-lg">
              A legacy of excellence in premium textiles
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main About Content - Split Screen */}
      <section className="py-24">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
                Welcome to LUXORA
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Your Trusted Destination for Premium-Quality Textiles
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  LUXORA TEXTILES is your trusted destination for premium-quality textiles, 
                  offering a beautifully curated selection that inspires creativity and elevates 
                  every sewing, design, and décor project.
                </p>
                <p>
                  With a passion for fine materials and exceptional craftsmanship, LUXORA TEXTILES 
                  brings together textiles that combine style, durability, and timeless beauty.
                </p>
                <p>
                  Our store features a wide variety of fabrics—including cottons, silks, linens, 
                  knits, upholstery materials, specialty textiles, and exclusive seasonal collections. 
                  Every fabric is carefully chosen for its texture, color, and quality, ensuring our 
                  customers have access to the best materials for both everyday projects and 
                  one-of-a-kind creations.
                </p>
              </div>

              <div className="mt-10 flex gap-4">
                <Link to="/services" className="btn-gold text-sm uppercase tracking-wider">
                  Our Services
                </Link>
                <Link to="/contact" className="btn-navy text-sm uppercase tracking-wider">
                  Contact Us
                </Link>
              </div>
            </motion.div>

            {/* Image */}
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
                  alt="LUXORA Textiles Collection"
                  className="w-full h-[500px] object-cover shadow-xl"
                />
                {/* Decorative Border */}
                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-gold -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Promise */}
      <section className="py-24 bg-ivory-dark">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative order-2 lg:order-1"
            >
              <div className="relative">
                <img
                  src={backgroundImage1}
                  alt="LUXORA Expert Service"
                  className="w-full h-[500px] object-cover shadow-xl"
                />
                {/* Decorative Border */}
                <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-gold -z-10" />
              </div>
            </motion.div>

            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-gold text-sm uppercase tracking-[0.3em] mb-4 block">
                Our Commitment
              </span>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8 leading-tight">
                Great Service is Just as Important as Great Fabric
              </h2>
              
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  At LUXORA TEXTILES, we believe great service is just as important as great fabric. 
                  Our knowledgeable team is always ready to assist whether you need help selecting 
                  the right material, exploring design ideas, or finding inspiration for your next project.
                </p>
                <p>
                  We strive to make every visit enjoyable, welcoming, and creatively fulfilling. 
                  Our commitment extends beyond the transaction—we are partners in your creative journey, 
                  dedicated to ensuring your vision becomes reality.
                </p>
              </div>

              {/* Key Values */}
              <div className="mt-10 grid sm:grid-cols-2 gap-6">
                {[
                  { title: 'Expert Guidance', desc: 'Personalized fabric consultation' },
                  { title: 'Quality Assurance', desc: 'Certified premium materials' },
                  { title: 'Creative Support', desc: 'Design inspiration and ideas' },
                  { title: 'Lasting Partnership', desc: 'Beyond the transaction' },
                ].map((item, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-1 bg-gold flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
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
              Experience the LUXORA Difference
            </h2>
            <p className="text-primary-foreground/70 text-lg mb-10">
              Visit our showroom or contact us to discover how our premium textiles 
              can transform your next project.
            </p>
            <Link to="/contact" className="btn-gold text-sm uppercase tracking-wider">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default About;
