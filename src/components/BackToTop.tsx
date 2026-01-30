import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      // Show button when past hero section (approximately 600px)
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 group"
          style={{
            background: 'linear-gradient(135deg, hsl(43 72% 52%), hsl(43 72% 62%))',
          }}
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-navy group-hover:-translate-y-1 transition-transform duration-300" />
          {/* Pulse Animation Ring */}
          <span className="absolute inset-0 rounded-full animate-pulse-gold" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
