import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About' },
  { path: '/services', label: 'Services' },
  { path: '/why-us', label: 'Why Us' },
  { path: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'navbar-scrolled py-3' 
          : 'bg-navy/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="group">
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-wider text-primary-foreground">
                LUXORA
              </span>
              <span className="text-xs md:text-sm tracking-[0.3em] text-gold uppercase">
                Textiles
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative text-sm uppercase tracking-widest font-medium transition-colors duration-300 group ${
                  location.pathname === link.path 
                    ? 'text-gold' 
                    : 'text-primary-foreground/80 hover:text-gold'
                }`}
              >
                {link.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300 ${
                    location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <Link
            to="/contact"
            className="hidden lg:inline-flex btn-gold text-sm uppercase tracking-wider"
          >
            Get a Quote
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-primary-foreground"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy border-t border-gold/20"
          >
            <div className="container mx-auto px-6 py-6">
              <div className="flex flex-col gap-4">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      className={`block py-3 text-sm uppercase tracking-widest font-medium border-b border-gold/10 transition-colors ${
                        location.pathname === link.path
                          ? 'text-gold'
                          : 'text-primary-foreground/80 hover:text-gold'
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <Link to="/contact" className="btn-gold w-full text-center text-sm uppercase tracking-wider">
                    Get a Quote
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
