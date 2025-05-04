import { PortableText } from 'next-sanity'
import React from 'react'

type IconCardProps = {
    _id: string
    title: string,
    iconCardCombo: any
}

export function IconCard({ props }: { props: any }) {
    // console.log(props.iconCardCombo)

    return (
        <section className='py-12'>
            <div className="inner">
                <div className="stack font-bold text-4xl">{props.title}</div>

                <div className="card-gallery">
                    {
                        props.iconCardCombo.iconCards.map((item: any) => (
                            <div key={item._key}>
                                <h3>{item.title}</h3>
                                {item.body ? <PortableText value={item.body} /> : null}
                            </div>
                        ))
                    }
                    <div className="card--icon">
                        <div className="h2">{ }</div>
                    </div>
                </div>
            </div>
        </section>
    )
}
