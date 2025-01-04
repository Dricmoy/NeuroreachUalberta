'use client'

import { Footer1 } from "@/components/footer";
import { Header1 } from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ContactIcon } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function Join() {
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [message, setmessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', { fullname, email });

        const formData = new FormData();
        formData.append('entry.179987437', fullname);
        formData.append('entry.380946814', email);
        formData.append('entry.', message);

        fetch('https://docs.google.com/forms/d/e/1FAIpQLSdzXLzJ-V66DSR2Suxk34RMENc3O8fZIrUPUhX9UGQHiX2dqw/formResponse', {
            method: 'POST',
            mode: 'no-cors',
            body: formData,
        })
            .then(response => {
                if (response.ok) {
                    console.log('Form submitted successfully!');
                } else {
                    console.error('Form submission failed');
                }
            })
            .catch(error => {
                console.error('Error submitting the form:', error);
            });

        // Optionally reset form fields
        setfullname('');
        setemail('');
        setmessage('');
    };

    return (
        <div className="text-purple-900 bg-gradient-to-b from-white to-purple-50 min-h-screen flex flex-col">
            {/* Fixed background image */}
            <div className="fixed inset-0 z-0">
                {[...Array(1)].map((_, i) => (
                    <div
                        key={i}
                        className={`relative w-full h-full ${i > 2 ? 'hidden lg:block' : 'block'}`}
                    >
                        <Image
                            src={`/images/collage-2.png`}
                            alt="Background"
                            fill
                            className="object-cover opacity-30"
                        />
                    </div>
                ))}
            </div>

            {/* Header */}
            <Header1 />

            {/* Main content */}
            <main className="flex-grow mt-28 max-w-5xl mx-auto px-6 mb-10 space-y-12 relative z-10"> {/* Added relative and z-10 */}
                {/* Intro Section */}
                <section className="text-center space-y-6">
                    <h1 className="text-5xl md:text-7xl max-w-2xl mx-auto tracking-tighter font-regular">
                        <span className="text-purple-800">
                            <span className="text-purple-400"> Find your place </span>
                            <span className="text-purple-500">with us!</span>
                        </span>
                    </h1>
                    <p className="text-lg text-purple-500 max-w-3xl mx-auto">
                        Looking for a way to get involved? NeuroReach offers various volunteer opportunities 
                        throughout the Fall and Winter terms, including but not limited to the 
                        <b>Brain Health Initiative Presentations</b>, <b>Event Fundraisers</b>, and, of course, our <b>Annual Neuroposium!</b>
                        <br />
                    </p>
                </section>

                {/* Application Form Section */}
                <section className="bg-white shadow-2xl rounded-3xl p-8 space-y-6 border-t-4 border-purple-400">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Badge centered */}
                        <div className="flex justify-center">
                            <Badge variant="outline" className="bg-purple-700 text-base text-white">
                                Apply Here!
                            </Badge>
                        </div>

                        {/* Full Name */}
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-lg font-medium text-purple-600">
                                Full Name:
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                value={fullname}
                                onChange={(e) => setfullname(e.target.value)}
                                className="mt-2 p-4 border border-purple-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Email Address */}
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-lg font-medium text-purple-600">
                                Email Address:
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                required
                                value={email}
                                onChange={(e) => setemail(e.target.value)}
                                className="mt-2 p-4 border border-purple-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                        </div>

                        {/* Position Dropdown */}
                        <div className="flex flex-col">
                            <label htmlFor="position" className="text-lg font-medium text-purple-600">
                                Choose the Position You Want to Apply to:
                            </label>
                            <select
                                id="position"
                                name="position"
                                className="mt-2 p-4 text-purple-900 border border-purple-300 rounded-md shadow appearance-none focus:outline-none focus:ring-2 focus:ring-purple-500"
                                style={{ backgroundImage: "none" }}
                            >
                                <option value="coming-soon">Coming Soon</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-lg font-medium text-purple-600">
                                Why do you want to join?
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                value={message}
                                onChange={(e) => setmessage(e.target.value)}
                                className="mt-2 p-4 border border-purple-300 rounded-md shadow focus:outline-none focus:ring-2 focus:ring-purple-100"
                                rows={4}
                            />
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <Button
                                type="submit"
                                className="gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-lg shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                            >
                                Submit Application <ContactIcon className="w-5 h-5" />
                            </Button>
                        </div>
                    </form>
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-auto relative z-0">
                <Footer1 />
            </footer>
        </div>
    );
}
