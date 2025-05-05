import { twMerge } from "tailwind-merge";
import TrendingItem from "./trending-item";

interface TrendingProp {
  className?: string;
}

export default function Trending({ className }: TrendingProp) {
  return (
    <div className={twMerge("space-y-10", className)}>
      <TrendingItem
        src="images/image-retro-pcs.jpg"
        number="01"
        title="Reviving Retro PCs"
        content="What happens when old PCs are given modern upgrades?"
      />
      <TrendingItem
        src="images/image-top-laptops.jpg"
        number="02"
        title="Top 10 Laptops of 2022"
        content="Our best picks for various needs and budgets."
      />
      <TrendingItem
        src="images/image-gaming-growth.jpg"
        number="03"
        title="The Growth of Gaming"
        content="How the pandemic has sparked fresh opportunities."
      />
    </div>
  );
}
