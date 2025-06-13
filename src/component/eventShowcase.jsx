import React from "react";
import { motion } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";

const texts = [
  {
    title: "Family gatherings",
    desc: "We know how much your event means to you—be it a jubilee, anniversary, or wedding, we're here to make every detail count with elegance, care, and unforgettable experiences tailored just for you.",
    marquee: "Family Gatherings",
  },
  {
    title: "Corporate Events",
    desc: "Host impactful business meetings, product launches, and networking sessions in an ambiance of class and convenience. Tailored to impress and deliver.",
    marquee: "Corporate Events",
  },
  {
    title: "Social Celebrations",
    desc: "From birthdays to themed parties, we create moments that linger. Lavish décor, fine cuisine, and vibrant energy — all in one place.",
    marquee: "Social Celebrations",
  },
];

export default function EventScroller() {
  return (
    <div
      className="relative h-screen w-full overflow-y-scroll snap-y snap-mandatory"
      style={{
        backgroundImage: `url('https://res.cloudinary.com/dq829orud/image/upload/v1749749317/img_pool1_zo390u.webp')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {texts.map((text, i) => (
        <section
          key={i}
          className="relative h-screen snap-start overflow-hidden"
        >
          {/* Pinned Marquee Background */}
          <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 z-10 pointer-events-none">
            <motion.div
              className="whitespace-nowrap text-[9vw] font-libre-bodoni-regular text-white opacity-80"
              animate={{ x: ["100%", "-100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            >
              {text.marquee}
            </motion.div>
          </div>

          {/* Foreground Scrollable Card */}

          <div className="absolute flex flex-col items-center justify-center md:h-100   md:w-[450px] w-[340px] h-[350px]  top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-gray-500 shadow-xl text-center ">
            {/* Inner Container */}
            <div className="border border-gray-600 p-4 md:h-[320px]  md:p-5 bg-white w-[300px] md:w-[400px]">
              <div className="border border-gray-600 flex h-70 flex-col items-center justify-center md:pt-0  md:space-y-10">
                <h2 className="text-lg md:text-2xl md:-translate-y-5 -translate-y-15 font-serif font-semibold">
                  {text.title}
                </h2>
                <p className="text-gray-600 md:-translate-y-10 -translate-y-8 text-xs md:text-sm px-2 md:px-6 max-w-xs md:max-w-[300px]">
                  {text.desc}
                </p>
              </div>
            </div>

            {/* Button / Arrow Section */}
            <div className="absolute bottom-15 md:top-90 group flex items-center justify-center mt-6 cursor-pointer">
              {/* Hover Circle Arrow */}
              <div className="opacity-0 md:-translate-y-20 group-hover:opacity-100 group-hover:bg-sky-800 text-white text-3xl md:text-5xl shadow group-hover:border p-4 md:p-7 rounded-full transition-all duration-700 ease-in-out">
                <div className="relative flex items-center justify-center w-10 h-10">
                  <IoIosArrowForward className="absolute opacity-70" />
                  <IoIosArrowForward className="absolute translate-x-1" />
                </div>
              </div>

              {/* Default "more" button */}
              <div className="absolute  group-hover:opacity-0 -translate-y-0 md:-translate-y-20 rounded-full h-10 w-24 border flex items-center justify-center text-sm md:text-base transition-all duration-700 ease-in-out">
                <span>more</span>
              </div>
            </div>
          </div>

        </section>
      ))}
    </div>
  );
}
