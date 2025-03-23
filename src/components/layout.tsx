import { ReactNode, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
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
  const location = useLocation();
  
  useEffect(() => {
    // Track page views on route change
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_path: location.pathname + location.search,
      });
    }
    
    // Track Facebook page views
    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <MainNav />
      <main className="flex-grow">
        {children || <Outlet />}
      </main>
      <Footer />
      <WhatsAppWidget />
    </div>
  );
};

export default Layout;
