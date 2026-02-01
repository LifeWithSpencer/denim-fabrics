import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Award, Shield } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="flex flex-col">
              <span className="font-serif text-3xl font-bold tracking-wider text-primary-foreground">
                  DENIM
                </span>
                <span className="text-sm tracking-[0.3em] text-gold uppercase">
                  Fabric
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed mb-6">
              Your trusted destination for premium-quality denim and textiles, 
              offering a beautifully curated selection that inspires 
              creativity and elevates every project.
            </p>
            {/* Authority Badges */}
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Award className="w-5 h-5 text-gold flex-shrink-0" />
                <span>Authorized Government Textile Supplier</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Shield className="w-5 h-5 text-gold flex-shrink-0" />
                <span>ISO 9001 Certified Quality</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Why Us', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors duration-300 text-sm uppercase tracking-wider"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Our Services</h4>
            <ul className="space-y-3">
              {['Accessories', 'Curtains & Blinds', 'Cushions', 'Interior Décor', 'Dressmaking', 'Premium Fabrics'].map((item) => (
                <li key={item}>
                  <span className="text-primary-foreground/70 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-xl mb-6 text-gold">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/70 text-sm">
                  123 Textile Avenue, Fashion District<br />
                  New York, NY 10001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="tel:+1234567890" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold flex-shrink-0" />
                <a href="mailto:info@denimfabric.com" className="text-primary-foreground/70 hover:text-gold transition-colors text-sm">
                  info@denimfabric.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Quality Manifesto */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-6 lg:px-12 py-8">
          <p className="text-center text-primary-foreground/60 text-sm max-w-4xl mx-auto leading-relaxed">
            DENIM FABRIC operates under global standards for textile durability and thread-count accuracy. 
            Our materials are sourced from certified mills worldwide, ensuring exceptional quality, 
            sustainability, and compliance with international textile regulations.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gold/20">
        <div className="container mx-auto px-6 lg:px-12 py-6">
          <p className="text-center text-primary-foreground/50 text-sm">
            © {new Date().getFullYear()} DENIM FABRIC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
