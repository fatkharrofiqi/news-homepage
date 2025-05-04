import Home from "@/components/body/home";
import News from "@/components/body/news";
import Trending from "@/components/body/trending";

const page = () => {
  return (
    <div className="space-y-8">
      <Home />
      <News />
      <Trending />
    </div>
  );
};

export default page;
