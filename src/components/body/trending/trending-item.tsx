interface TrendingItemProp {
  src: string;
  number: string;
  title: string;
  content: string;
}

export default function TrendingItem({
  src,
  number,
  title,
  content,
}: TrendingItemProp) {
  return (
    <div className="space-x-7 flex flex-row">
      <img src={src} alt={number} className="h-[9.25rem]" />

      <div className="py-2 space-y-2">
        <p className="text-[1.75rem] text-orange-500 font-bold">{number}</p>
        <p className="font-extrabold">{title}</p>
        <p>{content}</p>
      </div>
    </div>
  );
}
