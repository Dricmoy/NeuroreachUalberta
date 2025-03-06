'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Footer1 } from '@/components/footer';
import { Header1 } from '@/components/header';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const pastEvents = [
  {
    id: 1,
    title: 'Brain Awareness Week',
    image: '/event1.png',
  },
  {
    id: 2,
    title: 'Neuroscience Symposium',
    image: '/event2.png',
  },
  {
    id: 3,
    title: 'Lab Tour',
    image: '/event3.png',
  },
];

export default function EventsPage() {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % pastEvents.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + pastEvents.length) % pastEvents.length);
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 5000);
    return () => clearInterval(timer);
  }, [nextImage]);

  const calendarUrl = 'https://calendar.google.com/calendar/embed?src=your-calendar-id&ctz=YourTimeZone';

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-purple-50">
        <Header1 />

        {/* Hero Section */}
        <section className="relative bg-purple-100 py-20 overflow-hidden ">
            <div className="container mx-auto px-4 mt-10">
            <div className="flex flex-col lg:flex-row items-center justify-between space-x-8">
                <div className="lg:w-1/2 mb-10 lg:mb-0 z-20">
                <h2 className="text-4xl font-bold text-purple-800 mb-4">Discover Neuroscience</h2>
                <p className="text-xl text-purple-600 mb-8">
                    Join us for exciting events and expand your knowledge of the brain!
                </p>
                <div className="space-y-4">
                    <div className="bg-white rounded-lg p-4 shadow-md mr-4">
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">Coming Soon: SciLit Comp Series</h3>
                    <p className="text-purple-600">
                        Get ready for our first video release! Stay tuned for fascinating neuroscience content.
                    </p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-md mr-4">
                    <h3 className="text-2xl font-bold text-purple-800 mb-2">Annual General Meeting</h3>
                    <p className="text-purple-600">
                        For members: Join us in the last week of January for our AGM. Details coming soon!
                    </p>
                    </div>
                </div>
                </div>
                <div className="lg:w-1/2 relative h-[400px] w-full z-30 flex justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                    key={currentImage}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                    >
                    <Image
                        src={pastEvents[currentImage].image || '/placeholder.svg'}
                        alt={pastEvents[currentImage].title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg shadow-lg"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-purple-800 to-transparent p-4">
                        <h3 className="text-2xl font-bold text-white">{pastEvents[currentImage].title}</h3>
                    </div>
                    </motion.div>
                </AnimatePresence>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-purple-800 bg-opacity-50 hover:bg-opacity-75"
                    onClick={prevImage}
                >
                    <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-purple-800 bg-opacity-50 hover:bg-opacity-75"
                    onClick={nextImage}
                >
                    <ChevronRight className="h-8 w-8" />
                </Button>
                </div>
            </div>
            </div>
            <div className="absolute inset-0 bg-purple-200 opacity-50 z-10"></div>
        </section>

        {/* Google Calendar Embed */}
        <div className="w-full max-w-7xl mx-auto px-6 py-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-purple-800 text-center mb-6">
                <span className='text-purple-600'>Upcoming</span> <span className="text-purple-700">Events</span>
            </h2>
            <iframe
            src={calendarUrl}
            style={{ border: '0', width: '100%', height: '600px', borderRadius: '0.75rem' }}
            title="Google Calendar"
            ></iframe>
        </div>

        <Footer1 />
    </div>
  );
}
