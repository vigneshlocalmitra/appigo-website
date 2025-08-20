import { useState, useEffect } from 'react';
import { headerConfig } from '@/config/header.config';

interface UseHeaderOptions {
  enableScrollEffect?: boolean;
  scrollThreshold?: number;
  enableMobileMenu?: boolean;
}

export function useHeader(options: UseHeaderOptions = {}) {
  const {
    enableScrollEffect = true,
    scrollThreshold = 10,
    enableMobileMenu = true
  } = options;

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(64); // Default 16 * 4

  // Handle scroll effect
  useEffect(() => {
    if (!enableScrollEffect) return;

    const handleScroll = () => {
      const isScrolled = window.scrollY > scrollThreshold;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [enableScrollEffect, scrollThreshold]);

  // Handle mobile menu
  const toggleMobileMenu = () => {
    if (enableMobileMenu) {
      setMobileMenuOpen(!mobileMenuOpen);
    }
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  // Handle navigation
  const navigateTo = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        const offsetTop = element.offsetTop - headerHeight;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    } else if (href.startsWith('http')) {
      window.open(href, '_blank');
    } else {
      window.location.href = href;
    }
    closeMobileMenu();
  };

  // Get dynamic classes based on state
  const getHeaderClasses = (transparent = false, fixed = true) => {
    const baseClasses = [
      fixed ? 'sticky top-0' : 'relative',
      'z-50 transition-all duration-300'
    ];

    if (transparent && !scrolled) {
      baseClasses.push('bg-transparent');
    } else {
      baseClasses.push('bg-white border-b shadow-sm');
    }

    return baseClasses.join(' ');
  };

  const getTextClasses = (transparent = false) => {
    const baseClasses = ['font-medium transition-colors duration-200'];

    if (transparent && !scrolled) {
      baseClasses.push('text-white hover:text-gray-200');
    } else {
      baseClasses.push('text-gray-700 hover:text-blue-600');
    }

    return baseClasses.join(' ');
  };

  const getLogoClasses = (transparent = false) => {
    const baseClasses = ['transition-all duration-300', 'w-auto object-contain'];

    if (scrolled && transparent) {
      baseClasses.push('h-8');
    } else {
      baseClasses.push('h-10');
    }

    return baseClasses.join(' ');
  };

  return {
    // State
    scrolled,
    mobileMenuOpen,
    headerHeight,

    // Actions
    toggleMobileMenu,
    closeMobileMenu,
    navigateTo,

    // Utilities
    getHeaderClasses,
    getTextClasses,
    getLogoClasses,

    // Config
    config: headerConfig
  };
}

export default useHeader;
