import React from "react";
import { PortableText } from "next-sanity";
import Image from "next/image";
import { urlFor } from "~/sanity/lib/image";

type ImageCardProps = {
    _id: string;
    title: string;
    imageCardCombo: {
        imageCards: {
            _key: string;
            title: string;
            image: any;
            body?: any;
        }[];
    };
};

export function ImageCard({ props }: { props: ImageCardProps }) {
    return (
        <section className="content py-24">
            <div className="">
                {/* Section Heading */}
                <div className="mb-12">
                    <h2 className="text-display-large font-bold text-center">
                        {props.title}
                    </h2>
                </div>

                {/* Image Card Grid */}
                <div className="flex flex-wrap">
                    {props.imageCardCombo.imageCards.map((item) => (
                        <div
                            key={item._key}
                            className="w-full md:w-[35%] grow text-center"
                        >
                            <div className="relative h-64 w-full">
                            <Image
                                src={urlFor(item.image).width(600).height(600).url()}
                                fill
                                alt={item.title || "Image"}
                                className="object-contain"
                            />
                            </div>
                            <div className="text-headline-large font-bold">
                                {item.title}
                            </div>
                            {item.body && (
                                <div className="">
                                    <PortableText value={item.body} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
