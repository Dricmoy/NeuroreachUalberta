'use client'
import ContactForm from '@/components/ContactForm';

export default function Ask() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <header className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
          Ask a Neuroscience Student
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
          Submit your questions about neuroscience and get expert answers.
        </p>
      </header>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <ContactForm />
      </section>
    </main>
  );
}
