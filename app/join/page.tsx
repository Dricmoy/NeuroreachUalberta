"use client";

import { Footer1 } from "@/components/footer";
import { Header1 } from "@/components/header";
import Image from "next/image";

export default function Join() {
    return (
        <div className="text-purple-900 bg-gradient-to-b from-white to-purple-50 min-h-screen flex flex-col">
            {/* Fixed background image */}
            <div className="fixed inset-0 z-0">
                <div className="relative w-full h-full">
                    <Image
                        src="/images/collage-2.png"
                        alt="Background"
                        fill
                        className="object-cover opacity-30"
                    />
                </div>
            </div>

            {/* Header with Navbar */}
            <Header1 />

            {/* Main content */}
            <main className="flex-grow mt-28 max-w-5xl mx-auto px-6 mb-10 space-y-6 relative z-10">
                {/* Intro Section */}
                <section className="text-center space-y-4">
                    <h1 className="text-4xl md:text-6xl max-w-2xl mx-auto tracking-tight font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-500 shadow-b shadow-purple-600">
                        <span className="text-purple-700">
                            <span className="text-purple-400">Find your place </span>
                            <span className="text-purple-500">with us!</span>
                        </span>
                    </h1>

                </section>

                
                {/* Centered Embedded Google Form */}
                <div className="flex justify-center border bg-white">
                    <iframe
                        src="https://docs.google.com/forms/d/e/1FAIpQLSdkQ0Ny6SrSw4NU5uqinf0LItfetnKSeZ1B3BOMJ6l4QC5BJQ/viewform?embedded=true"
                        width="600"
                        height="690"
                        className="w-full max-w-2xl mb-10 mt-6 rounded-md bg-white"
                        style={{ border: "none" }}
                    >
                        Loading…
                    </iframe>
                </div>
            </main>

            {/* Footer */}
            <footer className="mt-auto relative z-0">
                <Footer1 />
            </footer>
        </div>
    );
}
