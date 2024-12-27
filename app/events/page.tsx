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
    <div className='h-11'></div>
    const pastEvents = [
        {
          title: "Neuroscience Career Fair",
          start: new Date(2023, 4, 15, 10, 0),
          end: new Date(2023, 4, 15, 15, 0),
          date: "2023-05-15",
          time: "10:00 AM - 3:00 PM",
          location: "Central High School, Springfield",
          description: "An interactive career fair featuring neuroscientists from various fields, providing insights into different career paths in neuroscience.",
          image: "",
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
          title: "Brain Anatomy Workshop",
          start: new Date(2023, 6, 22, 13, 0),
          end: new Date(2023, 6, 22, 16, 0),
          date: "2023-07-22",
          time: "1:00 PM - 4:00 PM",
          location: "City Science Center",
          description: "A hands-on workshop where students explored brain anatomy using 3D models and virtual reality simulations.",
          image: "",
          attendees: 50,
          highlights: [
            "Guided dissection of preserved brain specimens",
            "3D printed brain models for tactile learning",
            "VR tour of neuroanatomy",
            "Neuron firing simulation activity"
          ],
          tags: ["Hands-on Learning", "Anatomy", "Virtual Reality"]
        },
        {
          title: "Neurotechnology Symposium",
          start: new Date(2023, 8, 10, 9, 0),
          end: new Date(2023, 8, 10, 17, 0),
          date: "2023-09-10",
          time: "9:00 AM - 5:00 PM",
          location: "Tech High School Auditorium",
          description: "A day-long symposium featuring talks on the latest advancements in neurotechnology and their potential career implications.",
          image: "https://images.unsplash.com/photo-1602478872610-2f8fc9e72d26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&q=80&w=400", 
          attendees: 200,
          highlights: [
            "Keynote speech on brain-computer interfaces",
            "Demo of cutting-edge neural prosthetics",
            "Student poster presentations",
            "Neuroethics panel discussion"
          ],
          tags: ["Technology", "Innovation", "Ethics"]
        },
        {
          title: "Research Methods in Neuroscience",
          start: new Date(2023, 10, 5, 14, 0),
          end: new Date(2023, 10, 5, 17, 0),
          date: "2023-11-05",
          time: "2:00 PM - 5:00 PM",
          location: "Online Webinar",
          description: "An online workshop introducing high school students to various research methods used in neuroscience, including EEG and fMRI.",
          image: "https://unsplash.com/photos/two-abstract-paintings-hanged-on-wall-uhHPgq6QFgE", 
          attendees: 100,
          highlights: [
            "Live demonstration of EEG recording",
            "Virtual tour of an fMRI facility",
            "Data analysis workshop using real neuroscience datasets",
            "Q&A session with neuroscience grad students"
          ],
          tags: ["Research Skills", "Data Analysis", "Neuroimaging"]
        }
    ]
      
    const [selectedEvent, setSelectedEvent] = useState(null)

    const handleSelectEvent = (event: SetStateAction<null>) => {
        setSelectedEvent(event)
    }

    return (
        <div className="min-h-screen bg-purple-50 flex flex-col">
            <main className="flex-grow">
            <Header1 />
            <div className="mt-20 max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="grid gap-6 md:grid-cols-2">
                    {pastEvents.map((event, index) => (
                    <Card key={index} className={`bg-white border-purple-200 hover:border-purple-300 transition-colors overflow-hidden ${selectedEvent === event ? 'ring-2 ring-purple-500' : ''}`}>
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
            ))}
          </div>
  
          <h2 className="mt-20 text-3xl md:text-5xl tracking-tighter font-regular text-purple-800 mb-6">Our Events Calendar</h2>
          <div className="mb-8">
            <Calendar
              localizer={localizer}
              events={pastEvents}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
              onSelectEvent={handleSelectEvent}
              views={[Views.MONTH, Views.WEEK, Views.DAY]}
              className="bg-white p-4 rounded-lg shadow"
            />
          </div>
        </div>
      </main>
      <Footer1 />
    </div>
  )
}
