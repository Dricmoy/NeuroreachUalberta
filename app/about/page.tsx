import ContactForm from '@/components/ContactForm';

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
      <header className="text-center mb-12 mt-8">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
          About Us
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
          Learn more about our organization and our mission.
        </p>
      </header>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Our Mission</h2>
        <p className="text-gray-600 mb-4">
          We are dedicated to advancing the field of neuroscience and fostering a vibrant community of scholars and professionals.
        </p>
        <h3 className="text-xl font-semibold mt-6 text-green-700">Our Team</h3>
        <p className="text-gray-600">
          Meet the passionate individuals driving our mission forward.
        </p>
        {/* Add team information or profiles here */}
      </section>

      <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
        <h2 className="text-2xl font-semibold mb-4 text-green-700">Contact Us</h2>
        <ContactForm />
      </section>
    </main>
  );
}
