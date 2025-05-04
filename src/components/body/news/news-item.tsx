interface NewsItemProp {
  title: string;
  content: string;
}

export default function NewsItem({ title, content }: NewsItemProp) {
  return (
    <div className="py-10">
      <p className="font-bold text-white text-2xl">{title}</p>
      <p className="text-gray-400">{content}</p>
    </div>
  );
}
