import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header1 } from "@/components/header"
import { Footer1 } from '@/components/footer'

export default function AboutUs() {
  return (
    <div className="min-h-screen relative">
      {/* Background Image Container */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/herobg.png')",
          transform: "scaleX(-1)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex-grow">
        <Header1 />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-24">
          <div className="bg-white bg-opacity-10 blur-0 rounded-2xl p-4 border border-white border-opacity-30">
            
            {/* Main Title */}
            <h1 className="text-6xl md:text-7xl text-center font-semibold text-purple-400 mb-12 drop-shadow-lg">
              <span className="text-purple-500 font-semibold">About</span> <span className="text-purple-700 font-semibold">Us</span>
            </h1>

            {/* Mission Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-purple-300 mb-6">Our Mission</h2>
              <p className="text-lg text-white leading-relaxed">
                NeuroReach is a registered student group at the University of Alberta, Canada, founded in August 2023. Our mission is to expose high school students to the fascinating field of neuroscience, with a special focus on groups traditionally underrepresented in this area of study.
              </p>
            </section>

            {/* Initiatives Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-purple-300 mb-6">Our Initiatives</h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="bg-purple-500/20 border border-purple-400/50 shadow-xl rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-500">Annual In-Person Symposium</h3>
                    <p className="text-white">
                      Immersive experience for high school students featuring lab tours, workshops, and presentations from leading researchers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-500/20 border border-purple-400/50 shadow-xl rounded-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold mb-4 text-purple-500">Brain Health Initiative</h3>
                    <p className="text-white">
                      Virtual presentation series covering neuroscience basics, brain health, careers, and university experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-16">
              <h2 className="text-3xl font-semibold text-purple-300 mb-6">Resources</h2>
              <ul className="list-disc list-inside text-lg text-white">
                <li>Q&A column for high school students</li>
                <li>Upcoming video series on scientific literacy and paper reading skills</li>
              </ul>
            </section>

            {/* Get in Touch Section */}
            <section className="text-center mb-12">
              <h2 className="text-3xl font-semibold text-purple-300 mb-6">Get in Touch</h2>
              <p className="text-lg text-white mb-6">
                Email us at: <a href="mailto:neurorea@ualberta.ca" className="text-purple-500 hover:underline">neurorea@ualberta.ca</a>
              </p>
              <Button asChild className="bg-gradient-to-r from-purple-500 to-purple-800 hover:from-purple-600 hover:to-purple-900 text-white py-3 px-6 rounded-lg transition-all">
                <Link href="/ask_us">Ask Us a Question</Link>
              </Button>
            </section>
          </div>
        </main>
      </div>

      <Footer1 />
    </div>
  );
}
