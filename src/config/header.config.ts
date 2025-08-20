// Header Configuration
export const headerConfig = {
  // Brand settings
  logo: "/logo.png",
  companyName: "Appigo",

  // Navigation links
  navLinks: [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Features", href: "#features" },
    { name: "Process", href: "#process" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
  ],

  // Call-to-action
  cta: {
    text: "Get Free Consultation",
    action: "scroll-to-contact", // or "external-link" or "modal"
    url: "#contact", // for external links
  },

  // Appearance settings
  appearance: {
    transparent: false, // Transparent header on top
    fixed: true, // Sticky header
    showCompanyName: false, // Show company name next to logo
    animation: true, // Scroll animations
  },

  // Theme variants
  themes: {
    default: {
      background: "bg-white",
      text: "text-gray-700",
      border: "border-gray-200",
      hover: "hover:text-blue-600",
    },
    dark: {
      background: "bg-gray-900",
      text: "text-white",
      border: "border-gray-700",
      hover: "hover:text-blue-400",
    },
    transparent: {
      background: "bg-transparent",
      text: "text-white",
      border: "border-transparent",
      hover: "hover:text-gray-200",
    }
  }
};

// Easy customization functions
export const updateHeaderConfig = (updates: Partial<typeof headerConfig>) => {
  return { ...headerConfig, ...updates };
};

export const addNavLink = (name: string, href: string) => {
  headerConfig.navLinks.push({ name, href });
};

export const removeNavLink = (name: string) => {
  headerConfig.navLinks = headerConfig.navLinks.filter(link => link.name !== name);
};

export const setTransparent = (transparent: boolean) => {
  headerConfig.appearance.transparent = transparent;
};
