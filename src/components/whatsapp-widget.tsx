import React, { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    // Add WhatsApp widget script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    script.async = true;

    // Error handling for script loading
    script.onerror = () => {
      console.error('Failed to load WhatsApp widget script');
    };

    // Create the WhatsApp widget container
    const widgetContainer = document.createElement("div");
    widgetContainer.id = "whatsapp-widget";
    widgetContainer.className = "elfsight-app-a66932d0-6134-4f31-a0eb-1464fb2300a4";

    // Append elements
    document.body.appendChild(script);
    document.body.appendChild(widgetContainer);

    return () => {
      // Cleanup when component unmounts
      document.body.removeChild(script);
      if (document.getElementById("whatsapp-widget")) {
        document.body.removeChild(widgetContainer);
      }
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default WhatsAppWidget; 