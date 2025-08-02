"use client";
import React, { useRef, useState, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Education() {
  const schools = [
    {
      School: "Naga College Foundation, Inc.",
      Description: "College",
      Course: "BS in Computer Science",
      GWA: "1.50",
      Logo: "/ncf.png",
    },
    {
      School: "Cararayan National High School",
      Description: "Senior High School",
      Course: "Computer System Servicing (SHS)",
      GWA: "With Honors",
      Logo: "/cnhs.png",
    },
    {
      School: "Cararayan National High School",
      Description: "Junior High School",
      Course: "Special Science Program (JHS)",
      GWA: "Outstanding Performance in Arts",
      Logo: "/cnhs.png",
    },
    {
      School: "Don Manuel I. Abella Central School",
      Description: "Elementary",
      Course: "Basic Education Curriculum",
      GWA: "Consistent Achiever",
      Logo: "/dmiacs.png",
    },
    {
      School: "Extra Slide for Loop",
      Description: "Placeholder",
      Course: "-",
      GWA: "-",
      Logo: "/dmiacs.png",
    },
  ];

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [api, setApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!api) return;
    setSelectedIndex(api.selectedScrollSnap());

    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <section id="education" className="justify-center p-10">
      <div className="w-full h-full">
        <h2 className="text-5xl font-bold dark:text-[#c4efdf] Poppins text-center">
          Education
        </h2>
      </div>
      <div className="flex justify-center p-5">
        <Carousel
          setApi={setApi}
          plugins={[plugin.current]}
          opts={{
            loop: true,
            align: "center",
          }}
          className="w-full max-w-6xl"
        >
          <CarouselContent>
            {schools.map((school, index) => (
              <CarouselItem
                key={index}
                className={`md:basis-1/2 lg:basis-1/3 transition-transform duration-500 ${
                  index === selectedIndex ? "scale-105 z-10" : "scale-95 opacity-80"
                }`}
              >
                <div className="p-2">
                  <Card className="relative h-full shadow-xl">
                    <CardHeader>
                      <CardTitle>{school.School}</CardTitle>
                      <CardDescription>{school.Description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{school.Course}</p>
                      <p className="text-sm font-semibold">{school.GWA}</p>
                    </CardContent>
                    <CardFooter className="relative h-20">
                      <img
                        src={school.Logo}
                        alt={`${school.School}`}
                        className="absolute bottom-2 right-2 w-12 h-12 object-cover rounded-full shadow-md"
                      />
                    </CardFooter>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
