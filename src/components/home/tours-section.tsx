import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/section-heading";
import TourCard from "@/components/tour-card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Tour } from "@/components/home/home-data";

interface TourSectionProps {
  title: string;
  subtitle: string;
  tag: string;
  tours: Tour[];
  viewAllLink: string;
  viewAllText: string;
  bgColor?: string;
  showTabs?: boolean;
}

const ToursSection = ({
  title,
  subtitle,
  tag,
  tours,
  viewAllLink,
  viewAllText,
  bgColor,
  showTabs = true,
}: TourSectionProps) => {
  return (
    <section className={`section-padding ${bgColor ? bgColor : ''}`}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title={title}
          subtitle={subtitle}
          tag={tag}
        />

        {showTabs ? (
          <Tabs defaultValue="all" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList>
                <TabsTrigger value="all">All Tours</TabsTrigger>
                <TabsTrigger value="budgeted">Budgeted</TabsTrigger>
                <TabsTrigger value="luxury">Luxury</TabsTrigger>
                <TabsTrigger value="premier">Premier</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours.map((tour) => (
                  <TourCard
                    key={tour.id}
                    tour={tour}
                    className="h-full"
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="budgeted" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours
                  .filter(tour => tour.packageType === "Budgeted")
                  .map((tour) => (
                    <TourCard
                      key={tour.id}
                      tour={tour}
                      className="h-full"
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="luxury" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours
                  .filter(tour => tour.packageType === "Luxury")
                  .map((tour) => (
                    <TourCard
                      key={tour.id}
                      tour={tour}
                      className="h-full"
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="premier" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours
                  .filter(tour => tour.packageType === "Premier")
                  .map((tour) => (
                    <TourCard
                      key={tour.id}
                      tour={tour}
                      className="h-full"
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tours.map((tour) => (
              <TourCard
                key={tour.id}
                tour={tour}
                className="h-full"
              />
            ))}
          </div>
        )}

        <div className="text-center mt-10">
          <Link href={viewAllLink}>
            <Button variant="outline" className="group">
              <span>{viewAllText}</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ToursSection;
