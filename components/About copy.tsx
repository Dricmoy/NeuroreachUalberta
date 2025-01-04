import EnhancedQAForm from "./EnhancedQAForm";
import { Footer1 } from "./footer";
import Image from "next/image";

export const About = () => (
  <div className="relative w-full bg-gradient-to-b pt-32 lg:pt-40"> {/* Use relative to layer content above background */}
    {/* Background Image */}
    <div className="fixed inset-0 z-0">
      {[...Array(1)].map((_, i) => (
        <div
          key={i}
          className="relative w-full h-full"
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

    {/* Main Content */}
    <div className="relative z-10 container mx-auto">
      <div className="grid grid-cols-1 gap-12 items-center md:grid-cols-2">
        <div className="flex flex-col gap">
          <div className="space-y-10 space-x-2">
            <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-left font-regular">
              <span className="text-purple-800">
                <span className="text-purple-400"> Ask us </span><span className="text-purple-500">Anything</span>
              </span>
            </h1>
            <p className="text-lg md:text-xl leading-relaxed text-black max-w-lg text-left">
              At Neuroreach, we believe in making neuroscience accessible to everyone. 
              Whether you're a high school student curious about the human brain, a college student navigating the 
              complexities of neuroscience studies, or just a curious mind, we've got your back!
            </p>

            <p className="md:text-xl leading-relaxed text-black max-w-lg text-left">
              <span className="font-semibold text-2xl text-purple-800">🔍 What to Ask?<br/></span>
              Questions about neuroscience concepts or theories.<br/>
              Tips for succeeding in neuroscience classes or research.<br/>
              Insights into careers and opportunities in neuroscience.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-black max-w-lg text-left">
              💡 <span className="font-semibold text-2xl text-purple-800">No Question is Too Big or Small!<br/></span>
              Our team of passionate neuroscience students 
              is here to provide thoughtful, personalized answers. Feel free to ask — we're just a click away!
            </p>
          </div>
        </div>
        
        <EnhancedQAForm/>
      </div>
    </div>
  
  </div>
);
