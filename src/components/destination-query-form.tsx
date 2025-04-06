"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { QueryFormContent } from "./query-form/query-form-content";
import ClientOnly from "./client-only";
import { cn } from "@/lib/utils";

interface DestinationQueryFormProps {
  destination: string;
}

export function DestinationQueryForm({ destination }: DestinationQueryFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", { destination, ...formData });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <ClientOnly>
      <Dialog open={true} onOpenChange={() => {}}>
        <DialogTrigger asChild>
          <Button 
            variant="default" 
            className={cn(
              "w-full text-lg py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            )}
          >
            Enquire Now
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">Enquire about {destination}</DialogTitle>
            <DialogDescription>
              Fill in your details and we'll get back to you with the best packages
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={`I'm interested in visiting ${destination}...`}
                required
              />
            </div>

            <Button type="submit" className="w-full">
              Send Inquiry
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </ClientOnly>
  );
}
