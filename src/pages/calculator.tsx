import { useState } from "react";
import TourCalculator from "@/components/tour-calculator";
import { toast } from "sonner";
import ClientOnly from "@/components/client-only";

export default function CalculatorPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCalculatorSubmit = async (formData: any) => {
    try {
      setIsSubmitting(true);
      
      // Log the form data
      console.log('Calculator Data:', formData);
      
      // Show success message
      toast.success("Quote generated successfully! We'll contact you soon.");
      
      // Here you can add API call to send data to your backend
      // const response = await fetch('/api/calculate-tour', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });
      
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to generate quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <ClientOnly>
        <TourCalculator 
          onSubmit={handleCalculatorSubmit}
          className="max-w-4xl mx-auto"
        />
      </ClientOnly>
    </div>
  );
} 