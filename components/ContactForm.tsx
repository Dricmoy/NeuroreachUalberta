'use client'

import { Header1 } from "@/components/header";
import { Footer1 } from "./footer";
import { About } from "./About copy";

export function ContactForm() {
  return (    
    <div className="w-full">
      <Header1 />
      <div className="bg-gradient-to-b">
        <About />
      </div>
      <div className="w-full fixed bottom-0">
        
      <div className="invisible md:visible absolute bottom-20 right-10 w-48 h-48 bg-purple-400 opacity-30 rounded-full animate-bounce"></div>
          <Footer1 />
      </div>
    </div>
  );
}
