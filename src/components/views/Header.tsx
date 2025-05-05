import Link from "next/link";

export function Header() {
    return (
        <header className="full py-4 px-[clamp(1rem,_6vw,_3rem)] sticky top-0 left-0 w-full z-[999]">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-display-small font-extrabold tracking-tighter grow-0 group">
                    <span className="group-hover:lowercase">NODE</span><span className="group-hover:uppercase">drop</span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex justify-end gap-8 text-label-large font-semibold font-alt uppercase grow">
                    <Link href="#work" className="hover:underline underline-offset-4">
                        Work
                    </Link>
                    <Link href="#services" className="hover:underline underline-offset-4">
                        Services
                    </Link>
                    <Link href="#about" className="hover:underline underline-offset-4">
                        About
                    </Link>
                </nav>

                {/* CTA Button */}
                <Link
                    href="#contact"
                    className="ml-8 block w-fit px-6 py-3 bg-primary text-on-primary rounded-medium shadow-elevation-2 hover:bg-primary/90 transition duration-200 font-medium"
                >
                    Let’s Talk
                </Link>
            </div>
        </header>
    );
}
