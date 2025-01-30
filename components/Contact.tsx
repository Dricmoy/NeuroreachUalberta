import EnhancedQAForm from "./EnhancedQAForm";
import { Footer1 } from "./footer";

export const About = () => (
  <div className="relative w-full bg-gradient-to-b md:mb-10 pt-24"> {/* Use relative to layer content above background */}
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
              Any question regarding the team, or what we do here.<br/>
              Questions regarding volunteer opportunities available.<br/>
              Inquiries about upcoming and miscellaneous events.<br/>
              General Questions Can be Found on our Forum! <br/>
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
