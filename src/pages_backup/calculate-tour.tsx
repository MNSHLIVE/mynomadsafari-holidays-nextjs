import { useState } from "react";
import TourCalculator from "@/components/tour-calculator";
import { toast } from "sonner";
import SectionHeading from "@/components/section-heading";

const CalculateTourPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCalculatorSubmit = async (formData: any) => {
    try {
      setIsSubmitting(true);
      console.log('Calculator Data:', formData);
      toast.success("Quote generated successfully! We'll contact you soon.");
    } catch (error) {
      console.error('Error submitting form:', error);
      toast.error("Failed to generate quote. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <div className="bg-muted py-12">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Calculate Your Tour Package"
            subtitle="Get an instant estimate for your dream vacation"
            align="center"
          />
        </div>
      </div>

      {/* Calculator Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <TourCalculator 
            onSubmit={handleCalculatorSubmit}
            className="max-w-4xl mx-auto"
          />
        </div>
      </section>
    </main>
  );
};

export default CalculateTourPage; 