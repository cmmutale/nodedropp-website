import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "~/sanity/lib/image";
import ProjectGallerySlide from "./ProjectGallerySlide";

type HeroProps = {
    _id: string;
    title: string;
    text: any;
    image: string;
};

export function Hero({ title, text, image }: HeroProps) {
    return (
        <section className="full min-h-screen pt-24">
            <div className="content">
                {/* Text Content */}
                <div className="flex flex-col gap-6">
                    {title && (
                        <h1 className="text-display-large font-bold leading-[100%] tracking-tight">
                            {title}
                        </h1>
                    )}
                    {text && (
                        <div className="text-body-large leading-relaxed max-w-[60ch]">
                            <PortableText value={text} />
                        </div>
                    )}
                    {/* CTA Button */}
                    <a
                        href="#contact"
                        className="mt-4 block w-fit px-6 py-3 bg-primary text-on-primary rounded-medium shadow-elevation-2 hover:bg-primary/90 transition duration-200"
                    >
                        Work With Us
                    </a>
                </div>

                {/* Image */}
                {image && (
                    <div className="flex justify-center md:justify-end">
                        <Image
                            src={urlFor(image).width(800).height(600).url()}
                            alt=""
                            width={800}
                            height={600}
                            className="rounded-large shadow-elevation-1"
                        />
                    </div>
                )}
            </div>
            <ProjectGallerySlide />
        </section>
    );
}
