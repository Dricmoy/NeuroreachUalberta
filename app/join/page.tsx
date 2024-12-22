import { Footer1 } from "@/components/footer";
import { Header1 } from "@/components/header";

export default function Join() {
  return (
    <div className="text-gray-900">
        <Header1 />

        <main className="mt-28 max-w-7xl mx-auto p-6 space-y-12">
            {/* Intro Section */}
            <section className="intro text-center">
            <h2 className="text-4xl font-extrabold text-indigo-600">
                Join Our Team!
            </h2>
            <p className="mt-4 text-xl text-gray-700 max-w-3xl mx-auto">
                We're looking for passionate individuals to join our growing team. Help
                us make a difference in [your industry]! Apply today and be part of something
                special.
            </p>
            </section>

            {/* Why Join Us Section */}
            <section className="why-join space-y-4">
            <h3 className="text-3xl font-semibold text-indigo-500">
                Why Join Us?
            </h3>
            <ul className="list-inside list-disc space-y-2 text-lg text-gray-800">
                <li>Work with talented people</li>
                <li>Opportunities for growth and development</li>
                <li>Flexible working hours and remote work options</li>
                <li>Competitive salary and benefits</li>
            </ul>
            </section>

            {/* Application Form Section */}
            <section className="application-form bg-white p-8 rounded-lg shadow-lg space-y-6">
            <h3 className="text-3xl font-semibold text-indigo-600">Apply Now</h3>
            <form action="/submit-application" method="POST" className="space-y-4">
                {/* Full Name */}
                <div className="flex flex-col">
                <label htmlFor="name" className="text-lg font-medium text-gray-700">
                    Full Name:
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                </div>

                {/* Email Address */}
                <div className="flex flex-col">
                <label htmlFor="email" className="text-lg font-medium text-gray-700">
                    Email Address:
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                <label htmlFor="message" className="text-lg font-medium text-gray-700">
                    Why do you want to join?
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    className="mt-2 p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows={4}
                />
                </div>

                <button
                type="submit"
                className="mt-4 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
                >
                Submit Application
                </button>
            </form>
            </section>
        </main>

        <Footer1></Footer1>
    </div>
  );
}
