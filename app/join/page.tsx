export default function Join() {
    return (
      <main className="flex flex-col min-h-screen items-center justify-center px-6 md:px-12 lg:px-24 bg-gradient-to-b from-green-50 to-green-100 text-gray-800">
        <header className="text-center mb-12 mt-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-green-700 mb-4 tracking-tight">
            Join Us
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-xl mx-auto">
            Learn how you can become a part of our community.
          </p>
        </header>
  
        <section className="w-full max-w-3xl py-8 bg-white shadow-md rounded-lg mb-10 p-6">
          <h2 className="text-2xl font-semibold mb-4 text-green-700">Membership Benefits</h2>
          <p className="text-gray-600 mb-4">
            As a member, you&apos;ll have access to exclusive events, networking opportunities, and more.
          </p>
          <h3 className="text-xl font-semibold mt-6 text-green-700">How to Join</h3>
          <p className="text-gray-600">
            Fill out the form below to join our organization.
          </p>
          {/* Add your joining form or instructions here */}
        </section>
      </main>
    );
  }
  