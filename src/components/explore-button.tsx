'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import DestinationQueryForm from "./destination-query-form";

const ExploreButton = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="group">
          <span>Explore</span>
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Explore Destinations</DialogTitle>
          <DialogDescription>
            Tell us about your travel preferences and we'll help you find the perfect destination
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <DestinationQueryForm />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExploreButton; 