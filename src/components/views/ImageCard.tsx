import React from 'react'
import { PortableText } from 'next-sanity'
import Image from 'next/image'
import { urlFor } from '~/sanity/lib/image'


type ImageCardProps = {
    _id: string
    title: string,
    imageCardCombo: any,
}

export function ImageCard({ props }: { props: any }) {
    return (
        <section>
            <div className="inner">
                <div className="stack">
                    <h2>{props.title}</h2>
                    <p></p>
                </div>

                <div className="card-galler">
                    {
                        props.imageCardCombo.imageCards.map((item: any) => (
                            <div key={item._key}>
                                <Image
                                    src={urlFor(item.image).width(300).height(300).url()}
                                    width={300}
                                    height={300}
                                    alt=''
                                />
                                <div>{item.title}</div>
                                {item.body ? <PortableText value={item.body} /> : null}
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
