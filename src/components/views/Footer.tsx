import Link from "next/link";

export function Footer() {
    return (
        <footer className="w-full border-t-4 border-black bg-white text-black px-6 py-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12">

                {/* Left: Logo + CTA */}
                <div className="flex flex-col gap-4">
                    <Link href="/" className="text-3xl font-extrabold uppercase border-2 border-black px-3 py-1 inline-block w-max">
                        NodeDrop
                    </Link>
                    <p className="max-w-sm text-sm font-mono leading-relaxed">
                        We design bold, functional websites that actually convert. Let’s talk about your next project.
                    </p>
                    <Link
                        href="#contact"
                        className="mt-2 text-sm uppercase bg-black text-white px-4 py-2 border-2 border-black w-max hover:bg-yellow-300 hover:text-black transition-all"
                    >
                        Let’s Work Together
                    </Link>
                </div>

                {/* Middle: Company Links */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold uppercase border-b-2 border-black pb-1">Company</h4>
                    <Link href="#work" className="text-sm font-mono hover:underline">Work</Link>
                    <Link href="#services" className="text-sm font-mono hover:underline">Services</Link>
                    <Link href="#about" className="text-sm font-mono hover:underline">About</Link>
                </div>

                {/* Right: Legal Links */}
                <div className="flex flex-col gap-2">
                    <h4 className="text-sm font-bold uppercase border-b-2 border-black pb-1">Legal</h4>
                    <Link href="/terms" className="text-sm font-mono hover:underline">Terms of Service</Link>
                    <Link href="/privacy" className="text-sm font-mono hover:underline">Privacy Policy</Link>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-12 border-t-2 border-black pt-6 text-xs font-mono text-gray-700 flex justify-between items-center flex-col sm:flex-row">
                <span>© {new Date().getFullYear()} NodeDrop. All rights reserved.</span>
                <span>Made with brutal honesty.</span>
            </div>
        </footer>
    );
}
