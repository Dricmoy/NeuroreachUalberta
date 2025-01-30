'use client'
import { ContactForm } from '@/components/ContactForm'
import React, { useState } from 'react'
import { Footer1 } from '@/components/footer'

export default function page() {

    return (
        <div className='relative w-full min-h-screen from-gray-50 to-purple-50'>

            {/* Contact Form */}
            <div className="relative lg:mb-20 md:mb-10 sm:mb-10">
                <ContactForm />
            </div>

            {/* Footer stays at the bottom */}
            <footer className="mt-auto relative z-10">
                <Footer1 />
            </footer>
        </div>
    )
}
