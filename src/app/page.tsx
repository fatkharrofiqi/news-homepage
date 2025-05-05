import Home from "@/components/body/home";
import News from "@/components/body/news";
import Trending from "@/components/body/trending";

const page = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-[auto,auto,auto] md:grid-rows-[auto,min-content] gap-14">
      <Home className="md:col-span-2" />
      <News className="md:col-span-1" />
      <Trending className="row-span-1 md:col-span-3 md:grid md:grid-cols-3 md:gap-14 pb-14" />
    </div>
  );
};

export default page;
