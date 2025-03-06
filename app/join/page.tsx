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
            <main className="mt-40 self-center z-10 mb-10">
                {/* Centered Embedded Google Form */}
                <iframe
                    src="https://docs.google.com/forms/d/e/1FAIpQLSdkQ0Ny6SrSw4NU5uqinf0LItfetnKSeZ1B3BOMJ6l4QC5BJQ/viewform?embedded=true"
                    className="rounded-md bg-white md:w-[900px] h-[900px]"
                    style={{ border: "none" }}
                >
                    Loading…
                </iframe>
            </main>

            {/* Footer */}
            <footer className="mt-auto relative z-0">
                <Footer1 />
            </footer>
        </div>
    );
}
