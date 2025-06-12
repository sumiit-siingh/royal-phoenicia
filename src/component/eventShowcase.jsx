import React from "react";
import { motion } from "framer-motion";

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
      className="relative h-screen overflow-y-scroll snap-y snap-mandatory"
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
          {/* <div className="relative z-20 flex items-center justify-center h-full">
            <div className="bg-white bg-opacity-90 p-10 rounded-lg shadow-lg max-w-xl text-center border">
              <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4">
                {text.title}
              </h2>
              <p className="text-gray-600 mb-6">{text.desc}</p>
              <button className="px-6 py-2 border border-gray-500 rounded-full hover:bg-gray-100 transition">
                MORE
              </button>
            </div>
          </div> */}
          <div className="absolute w-[35%] top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-gray-500 p-6  shadow-xl text-center ">
            <div className='border border-gray-600 p-5 bg-white '>
              <div className='border border-gray-600 p-20 md:pt-10 pt-5 h-100  md:space-y-10 space-y-5'>
                <h2 className="text-3xl md:text-4xl inline w-250 font-serif font-semibold mb-4">
                  {text.title}
                </h2>
                <p className="text-gray-600 mb-6">{text.desc}</p>
                <button className="px-6 py-2 border border-gray-500 rounded-full hover:bg-gray-100 transition">
                  MORE
                </button>
              </div>
            </div>

          </div>
        </section>
      ))}
    </div>
  );
}
