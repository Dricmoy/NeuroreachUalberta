'use client'
import { useState } from 'react'
import Image from "next/image"
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, MapPin, Clock, Users, Bookmark } from "lucide-react"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Footer1 } from '@/components/footer'
import { Header1 } from '@/components/header'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const localizer = momentLocalizer(moment)

export default function EventsPage() {
    const calendarUrl = "https://calendar.google.com/calendar/embed?src=your-calendar-id&ctz=YourTimeZone";

    const pastEvents = [
        {
            title: "Neuroposium 2025",
            date: "March 25, 2025",
            time: "9:00 AM - 5:00 PM",
            location: "University of Alberta",
            description: "A symposium event gathering students, researchers, and professionals in neuroscience.",
            image: "/images/neuroposium.jpg",
            attendees: "500+",
            highlights: [
                "Keynote speeches by renowned neuroscientists",
                "Workshops and networking opportunities",
                "Panel discussions on neuroscience trends",
                "Career fair with neuroscience-related companies"
            ],
            tags: ["Symposium", "Research", "Networking", "Career Opportunities"]
        },
        {
            title: "Sci Lit Comp Series First Video Release",
            date: "January 25, 2025",
            time: "Online Release",
            location: "Online Event",
            description: "The first video in the Scientific Literature Comprehension Series will be released.",
            image: "/images/scilit.jpg",
            attendees: "200+",
            highlights: [
                "In-depth analysis of neuroscience studies",
                "Interactive discussion and Q&A session",
                "Insight into research methodologies"
            ],
            tags: ["Scientific Literature", "Neuroscience Research", "Online Event"]
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-purple-50">
            <Header1 />

            {/* Event Collage Section */}
            <div className="relative w-full h-96 overflow-hidden">
                <div className="absolute inset-0 bg-black opacity-40 z-10"></div>
                <Image src="/images/event-collage.jpg" alt="Event Collage" fill className="object-cover" />
                <h1 className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold z-20">Our Events</h1>
            </div>

            {/* Events Carousel */}
            <div className="max-w-5xl mx-auto my-12 p-6">
                <h2 className="text-3xl md:text-5xl font-semibold text-purple-800 text-center mb-6">Past Events</h2>
                <Carousel showThumbs={false} autoPlay infiniteLoop>
                    {pastEvents.map((event, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <Image src={event.image} alt={event.title} width={600} height={300} className="rounded-lg" />
                            <h3 className="text-2xl font-bold text-purple-700 mt-4">{event.title}</h3>
                            <CardDescription>
                                <div className="flex items-center mt-2 text-purple-600">
                                    <CalendarIcon className="w-5 h-5 mr-2" />
                                    <span>{event.date}</span>
                                </div>
                                <div className="flex items-center mt-1 text-purple-600">
                                    <Clock className="w-5 h-5 mr-2" />
                                    <span>{event.time}</span>
                                </div>
                                <div className="flex items-center mt-1 text-purple-600">
                                    <MapPin className="w-5 h-5 mr-2" />
                                    <span>{event.location}</span>
                                </div>
                                <div className="flex items-center mt-1 text-purple-600">
                                    <Users className="w-5 h-5 mr-2" />
                                    <span>{event.attendees} attendees</span>
                                </div>
                            </CardDescription>
                            <CardContent className="mt-4">
                                <p className="text-lg text-purple-700">{event.description}</p>
                                <h4 className="font-semibold text-purple-800 mt-4">Highlights:</h4>
                                <ul className="list-disc list-inside text-sm text-purple-700">
                                    {event.highlights.map((highlight, i) => (
                                        <li key={i}>{highlight}</li>
                                    ))}
                                </ul>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    {event.tags.map((tag, i) => (
                                        <span key={i} className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800 flex items-center">
                                            <Bookmark className="w-3 h-3 mr-1" /> {tag}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </div>
                    ))}
                </Carousel>
            </div>

            {/* Google Calendar Embed */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <h2 className="text-3xl md:text-5xl font-semibold text-purple-800 text-center mb-6">Upcoming Events</h2>
                <iframe src={calendarUrl} style={{ border: "0", width: "100%", height: "600px", borderRadius: "0.75rem" }} title="Google Calendar"></iframe>
            </div>

            <Footer1 />
        </div>
    )
}
