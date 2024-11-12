import { ContactIcon, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const About = () => (
  <div className="w-full py-20 lg:py-40 bg-gradient-to-b">
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
        <div className="flex flex-col gap-6">
          <div>
            <Badge variant="outline" className="text-base text-white bg-purple-700">
              Check Us out!
            </Badge>
          </div>
          <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-left font-regular">
                <span className="text-purple-800">
                    Volunteering at
                    <span className="text-purple-400"> Neuro</span><span className="text-purple-500">reach</span>
                </span>
                </h1>
            <p className="text-lg md:text-xl leading-relaxed text-black max-w-md text-left">
                 Our club is dedicated to exploring the vast world of
              neuroscience through symposiums, discussion, and community
              engagement. Whether you’re a neuroscience student, passionate
              learner, or curious individual, Neuroreach is the place for you!
            </p>

            <p className="text-lg md:text-xl leading-relaxed text-black max-w-md text-left">
            We also provide several easily accessible resources to students, including a Q and A column for high school students to ask questions to neuroscience students. 
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-6">
            <Button size="lg" className="gap-3 px-6 py-3 text-purpl-950 border-purple-900" variant="outline">
                Have a Question? Ask a Neuro Student<ContactIcon className="w-5 h-5" />
            </Button>
            <Button size="lg" className="gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white">
              Find our Events here <MoveRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
            {/* Video in the first div */}
            <div className="border rounded-md aspect-square overflow-hidden">
                <video
                    width="100%"
                    height="100%"
                    controls
                    className="w-full h-full object-cover"
                >
                    <source src="/Symposium.mp4" type="video/mp4" />
                    {/* Fallback message in case the video cannot be loaded */}
                    <p>Your browser does not support the video tag or the video cannot be loaded.</p>
                </video>
            </div>
            {/* Image 1 in the second div */}
            <div className="border rounded-md row-span-2 overflow-hidden">
                <img
                src="/bake_sale.png"
                alt="Image 1"
                className="w-full h-full object-cover"
                />
            </div>

            {/* Image 2 in the third div */}
            <div className="border rounded-md aspect-square overflow-hidden">
                <img
                src="Promotions.png"
                alt="Image 2"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
      </div>
    </div>
  </div>
);
