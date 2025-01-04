import { ContactForm } from '@/components/ContactForm'
import React from 'react'
import Image from 'next/image'

export default function page() {
    return (
        <div className='relative w-full min-h-screen from-gray-50 to-purple-50'>

            {/* Contact Form */}
            <div className="relative z-10">
                <ContactForm />
            </div>
        </div>
    )
}
