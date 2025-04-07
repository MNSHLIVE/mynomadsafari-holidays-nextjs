import { Metadata } from "next";
import HomeWrapper from './home-wrapper.client';

// Metadata for the home page
export const metadata: Metadata = {
  title: "NomadSafari Holidays - Your One-Stop Travel Expert",
  description: "Discover amazing travel experiences with NomadSafari Holidays. We offer customized tours, safari adventures, and cultural experiences across Africa.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeWrapper />
    </main>
  );
} 