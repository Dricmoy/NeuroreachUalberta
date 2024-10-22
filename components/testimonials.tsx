'use client';

import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link"; // Import Link for the button

export const Testimonials1 = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setTimeout(() => {
      if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
        setCurrent(0);
        api.scrollTo(0);
      } else {
        api.scrollNext();
        setCurrent(current + 1);
      }
    }, 4000);

    return () => clearTimeout(interval);
  }, [api, current]);

  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-xl font-regular text-left">
            What our past and present members loved about the club
          </h2>
          <Carousel setApi={setApi} className="w-full">
            <CarouselContent>
              {Array.from({ length: 3 }).map((_, index) => (
                <CarouselItem className="lg:basis-1/2" key={index}>
                  <div className="bg-muted rounded-md h-full lg:col-span-2 p-6 aspect-video flex justify-between flex-col">
                    <User className="w-8 h-8 stroke-1" />
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col">
                        <h3 className="text-xl tracking-tight">
                          Best decision I made
                        </h3>
                        <p className="text-muted-foreground max-w-xs text-base">
                          Joining this club has helped me grow both personally and professionally!
                        </p>
                      </div>
                      <p className="flex flex-row gap-2 text-sm items-center">
                        <span className="text-muted-foreground">By</span>
                        <Avatar className="h-6 w-6">
                          <AvatarImage src="https://github.com/shadcn.png" />
                          <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                        <span>Jane Doe</span>
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

            {/* Buttons Container */}
            <div className="flex justify-center lg:pt-10 md:pt-10 gap-4">
            {/* About Us Button */}
            <Link 
                href="/about-us" // Ensure the correct path is used
                className="px-8 py-4 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out"
            >
                About Us
            </Link>

            {/* Get Involved Button */}
            <Link 
                href="/get-involved" // Ensure the correct path is used
                className="px-8 py-4 text-white bg-gradient-to-r from-purple-500 to-purple-700 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-200 ease-in-out"
            >
                Get Involved
            </Link>
            </div>
        </div>
      </div>
    </div>
  );
};
