import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header1 } from "@/components/header"
import { Footer1 } from '@/components/footer'

export default function AboutUs() {
    const positions = [
        { top: '0', left: '0' },        // Top-left
        { top: '0', right: '0' },       // Top-right
        { bottom: '0', left: '0' },     // Bottom-left
        { bottom: '0', right: '0' },    // Bottom-right
      ];
    return (
    <div className="min-h-screen bg-purple-50 flex flex-col">
      <div className="fixed inset-2 z-0">
        {[...Array(1)].map((_, i) => (
            <div
                key={i}
                className={`relative w-full h-full ${
                i > 2 ? 'hidden lg:block' : 'block'
                }`} // Hide the bottom two images on smaller screens
            >
                <Image
                src={`/images/collage-${i + 1}.jpg`}
                alt=""
                fill
                className="object-cover opacity-30"
                />
            </div>
        ))}
      </div>
      <div className="relative z-10 flex-grow">
        <Header1 />
        <main className="max-w-4xl mx-auto px-4 sm:px-6 sm:py-24 lg:px-8 lg:py-24">
          <div className="bg-white bg-opacity-100 shadow-xl rounded-lg p-8">
            {/* Main Title */}
            <h1 className="text-5xl md:text-7xl w-full text-center font-regular mb-8 text-purple-800">
                <span className="text-purple-400">About</span> <span className="text-purple-500">Us</span>
            </h1>

            {/* Mission Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-regular text-purple-700 mb-4">Our Mission</h2>
              <p className="text-black-900">
                NeuroReach is a registered student group at the University of Alberta, Canada, founded in August 2023. Our mission is to expose high school students to the fascinating field of neuroscience, with a special focus on groups traditionally underrepresented in this area of study.
              </p>
            </section>


            {/* Initiatives Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-regular text-purple-700 mb-4">Our Initiatives</h2>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="bg-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">Annual In-Person Symposium</h3>
                    <p className="text-black-900">
                      Immersive experience for high school students featuring lab tours, workshops, and presentations from leading researchers.
                    </p>
                  </CardContent>
                </Card>
                <Card className="bg-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-purple-800">Brain Health Initiative</h3>
                    <p className="text-black-900">
                      Virtual presentation series covering neuroscience basics, brain health, careers, and university experience.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </section>

            {/* Resources Section */}
            <section className="mb-12">
              <h2 className="text-2xl font-regular text-purple-700 mb-4">Resources</h2>
              <ul className="list-disc list-inside text-black-900">
                <li>Q&A column for high school students</li>
                <li>Upcoming video series on scientific literacy and paper reading skills</li>
              </ul>
            </section>

            {/* Get in Touch Section */}
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

      <Footer1 />
    </div>
  );
}
