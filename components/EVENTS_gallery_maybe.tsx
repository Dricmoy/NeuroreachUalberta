'use client';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import type { CarouselApi } from '@/components/ui/carousel';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { CalendarIcon, MapPin, Clock, Users, Bookmark } from "lucide-react";

// This array can be passed as props or imported from the parent component
const pastEvents = [
    {
      title: "Neuroscience Career Fair",
      start: new Date(2023, 4, 15, 10, 0),
      end: new Date(2023, 4, 15, 15, 0),
      date: "2023-05-15",
      time: "10:00 AM - 3:00 PM",
      location: "Central High School, Springfield",
      description: "An interactive career fair featuring neuroscientists from various fields, providing insights into different career paths in neuroscience.",
      image: "https://images.unsplash.com/photo-1573152112927-1e6f8b74d178?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      attendees: 150,
      highlights: [
        "Panel discussions with leading neuroscientists",
        "Interactive booths showcasing latest research",
        "One-on-one mentoring sessions",
        "Virtual reality brain exploration station"
      ],
      tags: ["Career Guidance", "Networking", "Research Showcase"]
    },
    {
      title: "Research Methods in Neuroscience",
      start: new Date(2023, 10, 5, 14, 0),
      end: new Date(2023, 10, 5, 17, 0),
      date: "2023-11-05",
      time: "2:00 PM - 5:00 PM",
      location: "Online Webinar",
      description: "An online workshop introducing high school students to various research methods used in neuroscience.",
      image: "https://images.unsplash.com/photo-1509010609220-9f8f16ee0c38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      attendees: 100,
      highlights: [
        "Live demonstration of EEG recording",
        "Virtual tour of an fMRI facility",
        "Data analysis workshop using real neuroscience datasets",
        "Q&A session with neuroscience grad students"
      ],
      tags: ["Research Skills", "Data Analysis", "Neuroimaging"]
    },
    {
      title: "Cognitive Science Symposium",
      start: new Date(2023, 7, 21, 9, 0),
      end: new Date(2023, 7, 21, 18, 0),
      date: "2023-08-21",
      time: "9:00 AM - 6:00 PM",
      location: "University Campus Auditorium",
      description: "A day-long symposium featuring talks by leading researchers in cognitive science, covering topics such as memory, perception, and decision-making.",
      image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      attendees: 200,
      highlights: [
        "Keynote address by a renowned cognitive scientist",
        "Poster session showcasing student research",
        "Roundtable discussions on current trends in cognitive science",
        "Networking lunch with industry professionals"
      ],
      tags: ["Symposium", "Cognitive Science", "Academic"]
    },
    {
      title: "Brain Awareness Week Workshop",
      start: new Date(2023, 2, 13, 13, 0),
      end: new Date(2023, 2, 13, 16, 0),
      date: "2023-03-13",
      time: "1:00 PM - 4:00 PM",
      location: "Community Center, Downtown",
      description: "A workshop designed to educate the public about the latest research in brain health and neuroscience.",
      image: "https://images.unsplash.com/photo-1499988925140-65f37e4d0b9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      attendees: 120,
      highlights: [
        "Interactive brain model exhibits",
        "Lectures on brain health and disease prevention",
        "Hands-on activities for all ages",
        "Free brain health screenings"
      ],
      tags: ["Public Awareness", "Brain Health", "Community Event"]
    },
    {
      title: "Neuroscience and Artificial Intelligence Conference",
      start: new Date(2023, 11, 10, 8, 30),
      end: new Date(2023, 11, 11, 17, 0),
      date: "2023-12-10 to 2023-12-11",
      time: "8:30 AM - 5:00 PM",
      location: "Tech Hub Convention Center",
      description: "A two-day conference exploring the intersection of neuroscience and artificial intelligence, featuring speakers from both disciplines.",
      image: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400",
      attendees: 300,
      highlights: [
        "Talks on AI applications in neuroscience research",
        "Panel discussions with AI experts and neuroscientists",
        "Networking sessions with tech and neuroscience startups",
        "Exhibit hall with interactive AI demonstrations"
      ],
      tags: ["AI", "Neuroscience", "Conference", "Tech"]
    }
  ];
  

const Gallery6 = () => {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  
  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    const updateSelection = () => {
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };
    updateSelection();
    carouselApi.on('select', updateSelection);
    return () => {
      carouselApi.off('select', updateSelection);
    };
  }, [carouselApi]);

  return (
    <section className="py-32">
      <div className="container">
        <div className="mb-8 flex flex-col justify-between md:mb-14 md:flex-row md:items-end lg:mb-16">
          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-wider">
              Tag Line
            </p>
            <h2 className="mb-3 text-xl font-semibold md:mb-4 md:text-4xl lg:mb-6">
              Gallery
            </h2>
          </div>
          <div className="mt-8 flex shrink-0 items-center justify-center gap-2">
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollPrev();
              }}
              disabled={!canScrollPrev}
              className="disabled:pointer-events-auto"
            >
              <ArrowLeft className="size-5" />
            </Button>
            <Button
              size="icon"
              variant="outline"
              onClick={() => {
                carouselApi?.scrollNext();
              }}
              disabled={!canScrollNext}
              className="disabled:pointer-events-auto"
            >
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full">
        <Carousel
          setApi={setCarouselApi}
          opts={{
            breakpoints: {
              '(max-width: 768px)': {
                dragFree: true,
              },
            },
          }}
        >
          <CarouselContent className="ml-[calc(theme(container.padding)-20px)] mr-[calc(theme(container.padding))] 2xl:ml-[calc(50vw-700px+theme(container.padding)-20px)] 2xl:mr-[calc(50vw-700px+theme(container.padding))]">
            {pastEvents.map((event, index) => (
              <CarouselItem key={index} className="pl-[20px] md:max-w-[452px]">
                <Card className={`bg-white border-purple-200 hover:border-purple-300 transition-colors overflow-hidden`}>
                  <div className="md:flex">
                    <div className="md:flex-shrink-0">
                      <Image
                        src={event.image}
                        alt={event.title}
                        width={400}
                        height={200}
                        className="h-48 w-full object-cover md:h-full md:w-48"
                      />
                    </div>
                    <div className="p-4 flex flex-col justify-between">
                      <div>
                        <CardTitle className="text-3xl md:text-5xl tracking-tighter text-purple-700 mb-2 font-regular">{event.title}</CardTitle>
                        <CardDescription>
                          <div className="flex items-center mt-1 text-purple-600">
                            <CalendarIcon className="w-4 h-4 mr-2" />
                            <span>{event.date}</span>
                          </div>
                          <div className="flex items-center mt-1 text-purple-600">
                            <Clock className="w-4 h-4 mr-2" />
                            <span>{event.time}</span>
                          </div>
                          <div className="flex items-center mt-1 text-purple-600">
                            <MapPin className="w-4 h-4 mr-2" />
                            <span>{event.location}</span>
                          </div>
                          <div className="flex items-center mt-1 text-purple-600">
                            <Users className="w-4 h-4 mr-2" />
                            <span>{event.attendees} attendees</span>
                          </div>
                        </CardDescription>
                        <CardContent className="p-0 mt-2">
                          <p className="text-lg leading-relaxed tracking-tight text-purple-700 mb-2">{event.description}</p>
                          <h4 className="font-semibold text-purple-800 mt-2 mb-1">Highlights:</h4>
                          <ul className="list-disc list-inside text-sm text-purple-700 mb-2">
                            {event.highlights.map((highlight, i) => (
                              <li key={i}>{highlight}</li>
                            ))}
                          </ul>
                          <div className="flex flex-wrap gap-2 mt-2">
                            {event.tags.map((tag, i) => (
                              <span key={i} className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                <Bookmark className="w-3 h-3 mr-1" />
                                {tag}
                              </span>
                            ))}
                          </div>
                        </CardContent>
                      </div>
                    </div>
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default Gallery6;
