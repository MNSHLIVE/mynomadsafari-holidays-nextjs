'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">MyNomadSafari</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/destinations" className="text-foreground/80 hover:text-foreground">
              Destinations
            </Link>
            <Link href="/tours" className="text-foreground/80 hover:text-foreground">
              Tours
            </Link>
            <Link href="/about" className="text-foreground/80 hover:text-foreground">
              About
            </Link>
            <Link href="/contact" className="text-foreground/80 hover:text-foreground">
              Contact
            </Link>
            <Button asChild>
              <Link href="/book-now">Book Now</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              <Link
                href="/destinations"
                className="text-foreground/80 hover:text-foreground"
                onClick={toggleMenu}
              >
                Destinations
              </Link>
              <Link
                href="/tours"
                className="text-foreground/80 hover:text-foreground"
                onClick={toggleMenu}
              >
                Tours
              </Link>
              <Link
                href="/about"
                className="text-foreground/80 hover:text-foreground"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-foreground/80 hover:text-foreground"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <Button asChild className="w-full">
                <Link href="/book-now" onClick={toggleMenu}>
                  Book Now
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 