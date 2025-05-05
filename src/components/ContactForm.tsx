import React from "react";

export function ContactForm() {
    return (
        <section className="w-full bg-white text-black border-t-4 border-black px-6 py-20">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-extrabold uppercase border-l-8 border-black pl-4 mb-6">
                    Let’s Work Together
                </h2>
                <p className="font-mono text-lg mb-10 border-t-2 border-black pt-4">
                    Send us a message about your project and we’ll get back to you ASAP.
                </p>

                <form className="grid gap-6" action="/api/contact" method="POST">
                    <div>
                        <label className="block text-sm font-bold uppercase mb-1" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full border-2 border-black bg-white px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold uppercase mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full border-2 border-black bg-white px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-bold uppercase mb-1" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            required
                            className="w-full border-2 border-black bg-white px-4 py-2 font-mono focus:outline-none focus:ring-2 focus:ring-yellow-300"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="uppercase border-2 border-black bg-black text-white px-6 py-3 font-bold hover:bg-yellow-300 hover:text-black transition-all w-max"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </section>
    );
}
