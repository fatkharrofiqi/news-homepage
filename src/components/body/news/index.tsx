import { twMerge } from "tailwind-merge";
import NewsItem from "./news-item";

interface NewsProp {
  className?: string;
}

export default function News({ className }: NewsProp) {
  return (
    <div className={twMerge("bg-[#00001A] px-7", className)}>
      <p className="pt-10 font-bold text-3xl text-[#E6A650]">New</p>
      <div className="divide-y-2 divide-gray-600">
        <NewsItem
          title="Hydrogen VS Electric Cars"
          content="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <NewsItem
          title="The Downsides of AI Artistry"
          content="What are the possible adverse effects of on-demand AI image generation?"
        />
        <NewsItem
          title="Is VC Funding Dying Up?"
          content="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </div>
    </div>
  );
}
