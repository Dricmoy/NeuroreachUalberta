'use client'
import { SetStateAction, useState } from 'react'
import Image from "next/image"
import { Calendar, Views, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card"
import { Calendar as CalendarIcon, MapPin, Clock, Users, Bookmark } from "lucide-react"
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Footer1 } from '@/components/footer'
import { Header1 } from '@/components/header'

// Set up the localizer for react-big-calendar
const localizer = momentLocalizer(moment)

export default function Component() {
    const calendarUrl = "https://calendar.google.com/calendar/embed?src=your-calendar-id&ctz=YourTimeZone&bgcolor=%af4bf1&color=%af4bf1";

    const pastEvents = [
        {
            title: "Neuroposium 2025",
            start: '', // March 25, 2024
            end: '', // March 25, 2024
            date: "",
            time: "",
            location: "University of Alberta",
            description: "NeuroPosium is a major symposium event gathering students, researchers, and professionals in the field of neuroscience to discuss cutting-edge research and career opportunities.",
            image: "",
            attendees: "",
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
            start: '', // January 25, 2024
            end: '', // January 25, 2024
            date: "",
            time: "",
            location: "Online Event",
            description: "The first video in the Scientific Literature Comprehension Series will be released, offering an engaging exploration of key neuroscience literature.",
            image: "",
            attendees: '',
            highlights: [
                "In-depth analysis of groundbreaking neuroscience studies",
                "Interactive discussion and Q&A session",
                "Insight into neuroscience research methodologies"
            ],
            tags: ["Scientific Literature", "Neuroscience Research", "Online Event"]
        }
    ]
      
    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleSelectEvent = (event: any) => {
        setSelectedEvent(event)
    }

    return (
        <div className="min-h-screen from-gray-50 to-purple-50 flex flex-col">
          <main className="flex-grow">
            <Header1 />
            <div className="mt-20 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
              <div className="grid gap-6 md:grid-cols-2">
                {pastEvents.map((event, index) => (
                  <Card
                    key={index}
                    className={`bg-white to purple-900 border-purple-200 hover:border-purple-300 transition-colors overflow-hidden" ${
                      selectedEvent === event ? "ring-2 ring-purple-500" : ""
                    }`}
                  >
                    <div className="md:flex">
                      {/* Conditionally render image only if event.image exists */}
                      {event.image && (
                        <div className="md:flex-shrink-0">
                          <Image
                            src={event.image}
                            alt={event.title}
                            width={400}
                            height={200}
                            className="h-48 w-full object-cover md:h-full md:w-48"
                          />
                        </div>
                      )}


                      <div className="p-4 flex flex-col justify-between">
                        <div>
                          <CardTitle className="text-3xl md:text-5xl tracking-tighter text-purple-700 mb-2 font-regular">
                            {event.title}
                          </CardTitle>
                          <CardDescription>
                            <div className="flex items-center mt-1 text-purple-600">
                              <CalendarIcon className="w-4 h-4 mr-2" />
                              <span>{event.date || "To Be Decided"}</span>
                            </div>
                            <div className="flex items-center mt-1 text-purple-600">
                              <Clock className="w-4 h-4 mr-2" />
                              <span>{event.time || "To Be Decided"}</span>
                            </div>
                            <div className="flex items-center mt-1 text-purple-600">
                              <MapPin className="w-4 h-4 mr-2" />
                              <span>{event.location || "To Be Decided"}</span>
                            </div>
                            <div className="flex items-center mt-1 text-purple-600">
                              <Users className="w-4 h-4 mr-2" />
                                <span>{event.attendees ? `${event.attendees} attendees` : "To Be Decided"}</span>
                            </div>
                          </CardDescription>
                          <CardContent className="p-0 mt-2">
                            <p className="text-lg leading-relaxed tracking-tight text-purple-700 mb-2">
                              {event.description || "To Be Decided"}
                            </p>
                            <h4 className="font-semibold text-purple-800 mt-2 mb-1">
                              Highlights:
                            </h4>
                            <ul className="list-disc list-inside text-sm text-purple-700 mb-2">
                              {event.highlights.length > 0 ? (
                                event.highlights.map((highlight, i) => (
                                  <li key={i}>{highlight}</li>
                                ))
                              ) : (
                                <li>To Be Decided</li>
                              )}
                            </ul>
                            <div className="flex flex-wrap gap-2 mt-2">
                              {event.tags.length > 0 ? (
                                event.tags.map((tag, i) => (
                                  <span
                                    key={i}
                                    className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800"
                                  >
                                    <Bookmark className="w-3 h-3 mr-1" />
                                    {tag}
                                  </span>
                                ))
                              ) : (
                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">To Be Decided</span>
                              )}
                            </div>
                          </CardContent>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
  
          <h2 className="mt-20 text-3xl md:text-5xl tracking-tighter font-regular text-purple-800 mb-6">Our Events Calendar</h2>
          <div className="mb-8">
                <div className="custom-calendar">
                    <iframe
                    src={calendarUrl}
                    style={{
                        border: "0",
                        width: "100%",
                        height: "800px",
                        borderRadius: "0.75rem",
                        backgroundColor: "#f3f0fa", // Light purple background
                        padding: "16px",
                    }}
                    title="Google Calendar"
                    ></iframe>
                </div>
            </div>

        </div>
      </main>
      <Footer1 />
    </div>
    
  )
}
