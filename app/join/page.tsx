import { Footer1 } from "@/components/footer";
import { Header1 } from "@/components/header";

export default function Join() {
  return (
    <div className="text-purple-900 bg-gradient-to-b from-purple-100 to-purple-200 min-h-screen flex flex-col">
        <Header1 />

        <main className="flex-grow mt-28 max-w-5xl mx-auto px-6 space-y-12">
            {/* Intro Section */}
            <section className="text-center space-y-6">
                <h1 className="text-5xl md:text-7xl max-w-2xl mx-auto tracking-tighter font-regular">
                    <span className="text-purple-800">
                        <span className="text-purple-400"> Find your place </span>
                        <span className="text-purple-500">with us!</span>
                    </span>
                </h1>
                <p className="text-lg text-purple-500 max-w-3xl mx-auto">
                    Looking for a way to get involved? NeuroReach offers various volunteer opportunities throughout the Fall and Winter terms, including but not limited to:
                </p>
            </section>

            {/* Application Form Section */}
            <section className="bg-white rounded-lg shadow-lg p-8 space-y-6 border-t-4 border-purple-400">
                <h3 className="text-3xl font-semibold text-purple-700 text-center">
                    Apply Now
                </h3>
                <form action="/submit-application" method="POST" className="space-y-6">
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
                            className="mt-2 p-4 border border-purple-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                            className="mt-2 p-4 border border-purple-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                    </div>

                    {/* Position Dropdown */}
                    <div className="flex flex-col">
                        <label htmlFor="position" className="text-lg font-medium text-purple-600">
                            Position:
                        </label>
                        <select
                            id="position"
                            name="position"
                            className="mt-2 p-4 border border-purple-300 rounded-full shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
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
                            className="mt-2 p-4 border border-purple-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-purple-500"
                            rows={4}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-purple-700 text-white py-4 rounded-full shadow hover:bg-purple-800 transition-all"
                    >
                        Submit Application
                    </button>
                </form>
            </section>
        </main>

        <footer className="mt-auto relative">
            <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-400 opacity-30 rounded-full animate-bounce"></div>
            <Footer1 />
        </footer>
    </div>
  );
}
