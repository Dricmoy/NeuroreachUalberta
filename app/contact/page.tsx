import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {Header1} from "@/components/header"
import { Footer1 } from '@/components/footer'

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-purple-100">
      <div className="fixed inset-0 z-0">
        {[...Array(12)].map((_, i) => (
          <Image
            key={i}
            src={`/images/collage-${i + 1}.jpg`}
            alt=""
            width="0"
            height="0"
            className="object-cover opacity-30"
            style={{
              top: `${Math.floor(i / 4) * 33.33}%`,
              left: `${(i % 4) * 25}%`,
              width: '25%',
              height: '33.33%'
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <Header1 />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-24">
          <div className="bg-white bg-opacity-90 shadow-xl rounded-lg p-8">
            <h1 className="text-4xl font-bold text-purple-800 mb-8 text-center">About Us</h1>
            
            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Mission</h2>
              <p className="text-purple-900">
                NeuroReach is a registered student group at the University of Alberta, Canada, founded in August 2023. Our mission is to expose high school students to the fascinating field of neuroscience, with a special focus on groups traditionally underrepresented in this area of study.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Impact</h2>
              <Card className="bg-purple-50">
                <CardContent className="p-6">
                  <p className="text-3xl font-bold text-purple-600 mb-2">500+</p>
                  <p className="text-purple-800">Students reached through our initiatives</p>
                </CardContent>
              </Card>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Our Initiatives</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">Annual In-Person Symposium</h3>
                    <p className="text-purple-900">
                      Immersive experience for high school students featuring lab tours, workshops, and presentations from leading researchers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">Brain Health Initiative</h3>
                    <p className="text-purple-900">
                      Virtual presentation series covering neuroscience basics, brain health, careers, and university experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Resources</h2>
              <ul className="list-disc list-inside text-purple-900">
                <li>Q&A column for high school students</li>
                <li>Upcoming video series on scientific literacy and paper reading skills</li>
              </ul>
            </section>

            <section className="text-center">
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">Get in Touch</h2>
              <p className="text-purple-900 mb-4">
                Email us at: <a href="mailto:neurorea@ualberta.ca" className="text-purple-600 hover:underline">neurorea@ualberta.ca</a>
              </p>
              <Button asChild className="bg-purple-600 hover:bg-purple-700 text-white">
                <Link href="/ask_us">Ask Us a Question</Link>
              </Button>
            </section>
          </div>
        </main>
      </div>
      
      <Footer1/>
    </div>
  )
}