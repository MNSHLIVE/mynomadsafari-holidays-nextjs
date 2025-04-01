import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Footer = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Subscribed successfully!",
      description: "You'll now receive our latest travel updates.",
    });
    // Reset form
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-muted/50 dark:bg-muted/20 mt-20">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img 
                src="/MNSH-LOGO/3e515213-741f-498e-add3-8b8f70b7fe4c.png" 
                alt="My Nomadsafari Holidays" 
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              Your one-stop travel expert helping you explore the world your way since 2010.
            </p>
            <div className="flex space-x-4 pt-2">
              <a 
                href="https://facebook.com/mynomadsafari" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="https://instagram.com/mynomadsafari" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="https://x.com/mnshlive" 
                target="_blank" 
                rel="noreferrer"
                className="text-foreground/70 hover:text-primary transition-colors"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { label: "About Us", href: "/about" },
                { label: "Destinations", href: "/destinations" },
                { label: "Tours", href: "/tours" },
                { label: "Visa Services", href: "/visa" },
                { label: "Blog", href: "/blog" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-primary mt-0.5 flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p className="font-medium mb-2">Mumbai Office:</p>
                  <p>My Nomadsafari Holidays, 102 T.V Tower Badlapur East, Thane, Mumbai - 421503</p>
                  <p className="font-medium mt-3 mb-2">Delhi Office:</p>
                  <p>My Nomadsafari Holidays, Dwarka Sec 3, New Delhi - 110078</p>
                  <p>Contact: Deven Deshpande</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <div className="text-sm text-muted-foreground">
                  <p>Mumbai: +91 9968682200</p>
                  <p>Delhi: +91 7042910449</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  info@mynomadsafariholidays.in
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Newsletter</h3>
            <p className="text-sm text-muted-foreground">
              Subscribe to get special offers and travel tips.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input 
                type="email" 
                placeholder="Your email address" 
                required 
                className="bg-background"
              />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4 text-sm text-muted-foreground">
            <Link href="/terms" className="hover:text-primary transition-colors">Terms & Conditions</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/refund" className="hover:text-primary transition-colors">Refund Policy</Link>
            <Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link>
          </div>
          <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} My Nomadsafari Holidays. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
