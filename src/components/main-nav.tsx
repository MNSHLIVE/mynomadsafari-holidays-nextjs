"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";

const MainNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/destinations", label: "Destinations" },
    { href: "/visa", label: "Visa" },
    { href: "/tours", label: "Tours" },
    { href: "/contact-us", label: "Contact Us" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
        isScrolled 
          ? "bg-background/95 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link 
              href="/" 
              className="text-xl font-bold flex items-center space-x-3 hover:opacity-90 transition-opacity"
            >
              <img 
                src="/MNSH-LOGO/3e515213-741f-498e-add3-8b8f70b7fe4c.png" 
                alt="My Nomadsafari Holidays" 
                className="h-10 w-auto"
              />
              <span className="text-lg md:text-xl font-medium" style={{ color: 'rgb(130, 185, 75)' }}>
                My Nomadsafari Holidays
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-md group",
                  pathname === link.href 
                    ? "text-primary bg-primary/10" 
                    : "text-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {link.label}
                <span 
                  className={cn(
                    "absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 rounded-full",
                    pathname === link.href 
                      ? "scale-x-100" 
                      : "scale-x-0 group-hover:scale-x-100"
                  )}
                />
              </Link>
            ))}
            <div className="pl-2">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden hover:bg-primary/5"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b animate-in fade-in slide-in-from-top duration-300">
          <div className="container mx-auto px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "block py-3 px-4 rounded-md text-base font-medium transition-all duration-300",
                  pathname === link.href 
                    ? "bg-primary/10 text-primary" 
                    : "hover:bg-primary/5 hover:text-primary active:bg-primary/10"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default MainNav;
