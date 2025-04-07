import React, { useEffect } from 'react';

const WhatsAppWidget = () => {
  useEffect(() => {
    // Add WhatsApp widget script
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.body.appendChild(script);

    // Create the WhatsApp widget container if it doesn't exist
    if (!document.getElementById("whatsapp-widget")) {
      const widgetContainer = document.createElement("div");
      widgetContainer.id = "whatsapp-widget";
      widgetContainer.className = "elfsight-app-a66932d0-6134-4f31-a0eb-1464fb2300a4";
      widgetContainer.setAttribute("data-elfsight-app-lazy", "");
      document.body.appendChild(widgetContainer);
    }

    return () => {
      // Cleanup script when component unmounts
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return null; // This component doesn't render anything directly
};

export default WhatsAppWidget; 