import { Header } from "@/components/layout/Header";
import { headerConfig, updateHeaderConfig } from "@/config/header.config";
import { useHeader } from "@/hooks/useHeader";

// Example 1: Basic Usage
export function BasicHeader() {
  return <Header />;
}

// Example 2: Custom Configuration
export function CustomHeader() {
  const customConfig = updateHeaderConfig({
    navLinks: [
      { name: "About", href: "#about" },
      { name: "Services", href: "#services" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "#contact" }
    ],
    cta: {
      text: "Start Project",
      action: "external-link",
      url: "/contact"
    }
  });

  return (
    <Header
      navLinks={customConfig.navLinks}
      ctaText={customConfig.cta.text}
    />
  );
}

// Example 3: Transparent Header with Scroll Effect
export function TransparentHeader() {
  return (
    <Header
      transparent={true}
      logo="/logo-white.png" // White logo for dark backgrounds
    />
  );
}

// Example 4: Using the Hook
export function HookBasedHeader() {
  const {
    scrolled,
    mobileMenuOpen,
    toggleMobileMenu,
    getHeaderClasses,
    getTextClasses,
    navigateTo
  } = useHeader({
    enableScrollEffect: true,
    scrollThreshold: 50
  });

  return (
    <header className={getHeaderClasses(true, true)}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <img src="/logo.png" alt="Logo" className="h-10" />

          <nav className="hidden md:flex space-x-8">
            {headerConfig.navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => navigateTo(link.href)}
                className={getTextClasses(true)}
              >
                {link.name}
              </button>
            ))}
          </nav>

          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  );
}

// Example 5: Different Themes
export function ThemedHeaders() {
  return (
    <div className="space-y-4">
      {/* Light Theme */}
      <Header />

      {/* Dark Theme */}
      <div className="bg-gray-900">
        <Header
          transparent={false}
        />
      </div>

      {/* Transparent Theme */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600">
        <Header
          transparent={true}
        />
      </div>
    </div>
  );
}

// Example 6: Dynamic Navigation
export function DynamicNavHeader() {
  const dynamicLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    process.env.NODE_ENV === 'development' && { name: "Debug", href: "#debug" },
    { name: "Contact", href: "#contact" }
  ].filter(Boolean) as Array<{ name: string; href: string }>;

  const handleCustomAction = () => {
    // Custom analytics or action
    console.log('Custom CTA clicked');

    // Open modal, redirect, etc.
    window.open('/consultation', '_blank');
  };

  return (
    <Header
      navLinks={dynamicLinks}
      ctaText="Book Demo"
      ctaAction={handleCustomAction}
    />
  );
}
