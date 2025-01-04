'use client'

import { Header1 } from "@/components/header";
import { Footer1 } from "./footer";
import { About } from "./About copy";

export function ContactForm() {
  return (    
    <div className="w-full min-h-screen flex flex-col"> {/* Use flexbox to arrange the content vertically */}
      <Header1 />
      <div className="bg-gradient-to-b flex-grow"> {/* Allow the main content to take up available space */}
        <About />
      </div>

      {/* Footer stays at the bottom */}
      <footer className="mt-auto">
        <Footer1 />
      </footer>
    </div>
  );
}
