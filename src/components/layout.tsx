'use client';

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import MainNav from "./main-nav";
import Footer from "./footer";
import { ScrollToTop } from "./scroll-to-top";
import WhatsAppWidget from "./whatsapp-widget";

// Add type declaration for Elfsight
declare global {
  interface Window {
    elfsight: {
      init: () => void;
    };
  }
}

interface LayoutProps {
  children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const pathname = usePathname();
  
  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: pathname,
      });
    }
    
    // Track Facebook page views
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <MainNav />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
