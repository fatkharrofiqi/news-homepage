import { twMerge } from "tailwind-merge";

interface HomeProp {
  className?: string;
}

export default function Home({ className }: HomeProp) {
  return (
    <div className={twMerge("grid gap-8", className)}>
      <img
        src={"images/image-web-3-mobile.jpg"}
        alt="hero"
        className="block md:hidden"
      />
      <img
        src={"images/image-web-3-desktop.jpg"}
        alt="hero"
        className="hidden md:block"
      />
      <div className="flex flex-col md:flex-row gap-8 md:gap-10">
        <p className="font-extrabold text-5xl flex-1 md:content-center">
          The Bright Future of Web 3.0?
        </p>
        <div className="flex flex-col gap-8 flex-1">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <div>
            <button
              type="button"
              className="bg-[#F15D51] uppercase font-bold text-gray-800 px-10 py-5"
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
