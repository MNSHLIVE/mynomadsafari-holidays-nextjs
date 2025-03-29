import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export const BackButton = () => {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="flex items-center mb-6">
      <Button 
        variant="ghost" 
        className="flex items-center gap-2"
        onClick={handleBack}
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Button>
    </div>
  );
};

export default BackButton; 