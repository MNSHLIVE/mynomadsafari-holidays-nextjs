import { Metadata } from "next";
import HomeClientWrapper from "@/components/home/home-client-wrapper";

export const metadata: Metadata = {
  title: "NomadSafari Holidays - Your One-Stop Travel Expert",
  description: "Discover amazing destinations and travel experiences with NomadSafari Holidays. We offer customized tour packages, religious tours, and international travel services.",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <HomeClientWrapper />
    </main>
  );
} 