import { PortableText } from "next-sanity";

type IconCardProps = {
    _id: string;
    title: string;
    iconCardCombo: {
        iconCards: { _key: string; title: string; body?: any }[];
    };
};

export function IconCard({ props }: { props: IconCardProps }) {
    return (
        <section className="content py-12">
            <div className="">
                {/* Section Title */}
                <div className="text-headline-large font-bold tracking-tight mb-12">
                    {props.title}
                </div>

                {/* Icon Card Grid */}
                <div className="flex flex-wrap">
                    {props.iconCardCombo.iconCards.map((item) => (
                        <div
                            key={item._key}
                            className="w-full md:w-[35%] grow cursor-pointer 
                            transition-all hover:shadow-elevation-2 hover:translate-y-[-2px] motion-safe:transition-transform"
                        >
                            <h3 className="text-display-large font-bold tracking-tight">
                                {item.title}
                            </h3>
                            {item.body && (
                                <div className="text-body-large leading-normal max-w-[40ch]">
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
