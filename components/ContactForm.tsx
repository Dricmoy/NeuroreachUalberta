'use client'

import { Header1 } from "@/components/header";
import { About } from "./Contact";
import Image from "next/image";
import { useState } from "react";

export function ContactForm() {
  return (    
    <div className="relative w-full flex flex-col"> {/* Use flexbox to arrange the content vertically */}
        {/* Main Content */}
        <div className="relative z-10 flex-grow bg-gradient-to-b">
            <Header1 />
            <About />
        </div> 
    </div>
  );
}
