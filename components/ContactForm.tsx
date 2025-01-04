'use client'

import { Header1 } from "@/components/header";
import { Footer1 } from "./footer";
import { About } from "./About copy";
import Image from "next/image";

export function ContactForm() {
  return (    
    <div className="relative w-full min-h-screen flex flex-col"> {/* Use flexbox to arrange the content vertically */}
        {/* Main Content */}
        <div className="relative z-10 flex-grow bg-gradient-to-b mb-30">
            <Header1 />
            <About />
        </div>

        {/* Footer stays at the bottom */}
        <footer className="mt-auto relative z-10">
            <Footer1 />
        </footer>
    </div>
  );
}
