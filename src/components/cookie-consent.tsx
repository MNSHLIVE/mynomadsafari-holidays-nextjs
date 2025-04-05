"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowConsent(false);
  };

  if (!showConsent) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-background border-t shadow-lg p-4 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-sm">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.{" "}
          <Link href="/privacy-policy" className="text-primary hover:underline">
            Learn more
          </Link>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => setShowConsent(false)}>
            Decline
          </Button>
          <Button onClick={acceptCookies}>Accept All</Button>
        </div>
      </div>
    </div>
  );
} 