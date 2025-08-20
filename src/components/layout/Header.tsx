import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavLink {
  name: string;
  href: string;
}

interface HeaderProps {
  logo?: string;
  companyName?: string;
  navLinks?: NavLink[];
  ctaText?: string;
  ctaAction?: () => void;
  transparent?: boolean;
  fixed?: boolean;
}

export function Header({
  logo = "/logo.png",
  companyName = "Appigo",
  navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],
  ctaText = "Get Free Consultation",
  ctaAction,
  transparent = false,
  fixed = true
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Dynamic scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    if (transparent) {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, [transparent]);

  // Handle navigation clicks
  const handleLinkClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setMobileMenuOpen(false);
  };

  // Handle CTA click
  const handleCtaClick = () => {
    if (ctaAction) {
      ctaAction();
    } else {
      // Default action - scroll to contact
      const contactElement = document.querySelector('#contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Dynamic header classes
  const headerClasses = [
    fixed ? 'sticky top-0' : 'relative',
    'z-50 transition-all duration-300',
    transparent && !scrolled
      ? 'bg-transparent'
      : 'bg-white border-b shadow-sm'
  ].join(' ');

  const logoClasses = [
    'transition-all duration-300',
    scrolled && transparent ? 'h-8' : 'h-10',
    'w-auto object-contain'
  ].join(' ');

  const textClasses = [
    'font-medium transition-colors duration-200',
    transparent && !scrolled
      ? 'text-white hover:text-gray-200'
      : 'text-gray-700 hover:text-blue-600'
  ].join(' ');

  return (
    <header className={headerClasses}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img
              src={logo}
              alt={`${companyName} Logo`}
              className={logoClasses}
            />
            {companyName && !logo.includes('logo') && (
              <span className={`text-xl font-bold ${textClasses}`}>
                {companyName}
              </span>
            )}
          </Link>

          {/* Right Side Content - Navigation + CTA + Mobile Menu */}
          <div className="flex items-center space-x-8">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={textClasses}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <Button
              onClick={handleCtaClick}
              variant={transparent && !scrolled ? "outline" : "default"}
            >
              {ctaText}
            </Button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-md"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X size={24} className={transparent && !scrolled ? 'text-white' : 'text-gray-700'} />
            ) : (
                <Menu size={24} className={transparent && !scrolled ? 'text-white' : 'text-gray-700'} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t px-6">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(link.href);
                  }}
                  className={textClasses}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={handleCtaClick}
                className="mt-4 w-full"
              >
                {ctaText}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

// Default export for backward compatibility
export default Header;