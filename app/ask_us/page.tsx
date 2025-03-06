'use client'
import { ContactForm } from '@/components/ContactForm'
import React, { useState } from 'react'
import { Footer1 } from '@/components/footer'

export default function page() {
    return (
        <div 
            className="relative w-full min-h-screen" 
            style={{
                backgroundImage: "url('/aboutbg.jpg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Contact Form */}
            <ContactForm />

        
            {/* Footer stays at the bottom */}
            <footer className="mt-auto relative z-10">
                <Footer1 />
            </footer>
        </div>
    )
}
