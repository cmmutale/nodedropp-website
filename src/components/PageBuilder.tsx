import { Hero } from "./views/Hero";
import { Features } from "./views/Features";
import { SplitImage } from "./views/SplitImage";
import { FAQs } from "./views/Faqs";
import { ImageCard } from "./views/ImageCard";
import { IconCard } from "./views/IconCard";

type PageBuilderProps = {
    content: any;
};

export function PageBuilder({ content }: PageBuilderProps) {
    if (!Array.isArray(content)) {
        return null;
    }

    return (
        <main className="full">
            {content.map((block) => {
                switch (block._type) {
                    case "hero":
                        return <Hero key={block._key} {...block} />;
                    case "features":
                        return <Features key={block._key} {...block} />;
                    case "splitImage":
                        return <SplitImage key={block._key} {...block} />;
                    case "faqs":
                        return <FAQs key={block._key} {...block} />;
                    case "iconCards":
                        return <IconCard key={block._key} {...block} props={block} />
                    case "imageCards":
                        return <ImageCard key={block._key} {...block} props={block} />
                    default:
                        // This is a fallback for when we don't have a block type
                        return <div key={block._key}>Block not found: {block._type}</div>;
                }
            })}
        </main>
    );
}