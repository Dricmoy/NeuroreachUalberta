import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { ContactIcon } from "lucide-react";

export default function EnhancedQAForm() {
    const [question, setQuestion] = useState('');
    const [details, setDetails] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Submitted:', { question, details });

        const formData = new FormData();
        formData.append('entry.1612564992', question);
        formData.append('entry.532594157', details);

        fetch('https://docs.google.com/forms/d/1-NY_-R5HnOcfUIx_t5uTN2PJJp2MhtKD73OaEoB-gSs/formResponse', {
            method:'POST',
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
        
        setQuestion('');
        setDetails('');
    };

    return (
        <div className="w-full mb-32 md:mb-0">
        <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl overflow-hidden">
            <div className="px-6 py-12 sm:px-10">
            <div className="flex flex-col items-center space-y-6">
                <Badge variant="outline" className="text-base text-white bg-purple-700">
                Note!
                </Badge>
                <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
                This is to directly message Our Team.<br/> Please direct Neuroscience questions to the forum!
                </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-10 space-y-6">
                <div>
                <Label htmlFor="question" className="block text-lg font-medium text-gray-700">
                    Your Question
                </Label>
                <Input
                    id="question"
                    name="question"
                    type="text"
                    required
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-base"
                    placeholder="E.g., Do you guys have any open positions?"
                />
                </div>

                <div>
                <Label htmlFor="details" className="block text-lg font-medium text-gray-700">
                    More Details
                </Label>
                <textarea
                    id="details"
                    name="details"
                    rows={4}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    className="mt-2 block w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500 text-base"
                    placeholder="Any additional context you want to add..."
                />
                </div>

                <div className="flex justify-center mt-8">
                <Button
                    type="submit"
                    className="gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white text-lg font-medium rounded-lg shadow-md transform transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105"
                >
                    Submit Question <ContactIcon className="w-5 h-5" />
                </Button>
                </div>
            </form>
            </div>

            <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 sm:px-10">
            <p className="text-sm text-center text-gray-500">
                By submitting, you agree to our{' '}
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-purple-600 hover:text-purple-500">
                Privacy Policy
                </a>
                .
            </p>
            </div>
        </div>
        </div>
    );
}
