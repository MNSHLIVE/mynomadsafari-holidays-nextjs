import Link from "next/link"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/40">
      <nav className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/MNSH-LOGO/3e515213-741f-498e-add3-8b8f70b7fe4c.png"
              alt="My Nomadsafari Holidays"
              width={40}
              height={40}
            />
            <span className="text-lg font-semibold text-[rgb(130,_185,_75)]">My Nomadsafari Holidays</span>
          </Link>

          {/* Mobile Menu Button */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4">
                <Link href="/" className="text-lg font-semibold hover:text-[rgb(130,_185,_75)]">
                  Home
                </Link>
                <Link href="/destinations" className="text-lg font-semibold hover:text-[rgb(130,_185,_75)]">
                  Destinations
                </Link>
                <Link href="/tours" className="text-lg font-semibold hover:text-[rgb(130,_185,_75)]">
                  Tours
                </Link>
                <Link href="/group-tours" className="text-lg font-semibold hover:text-[rgb(130,_185,_75)]">
                  Group Tours
                </Link>
                <Link href="/about" className="text-lg font-semibold hover:text-[rgb(130,_185,_75)]">
                  About
                </Link>
                <Link href="/contact" className="text-lg font-semibold hover:text-[rgb(130,_185,_75)]">
                  Contact
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium hover:text-[rgb(130,_185,_75)]">
              Home
            </Link>
            <Link href="/destinations" className="text-sm font-medium hover:text-[rgb(130,_185,_75)]">
              Destinations
            </Link>
            <Link href="/tours" className="text-sm font-medium hover:text-[rgb(130,_185,_75)]">
              Tours
            </Link>
            <Link href="/group-tours" className="text-sm font-medium hover:text-[rgb(130,_185,_75)]">
              Group Tours
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-[rgb(130,_185,_75)]">
              About
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-[rgb(130,_185,_75)]">
              Contact
            </Link>
          </nav>
        </div>
      </nav>
    </header>
  );
}; 