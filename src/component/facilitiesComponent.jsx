import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const facilities = [
  {
    title: "Fitness Center",
    description: "Stay fit with our state-of-the-art gym and personal trainers available.",
    image: "https://res.cloudinary.com/dq829orud/image/upload/v1749706583/wp12177195_my4zsl.jpg",
  },
  {
    title: "On-Site Dining",
    description: "Enjoy gourmet meals prepared by top chefs in a luxurious setting.",
    image: "https://res.cloudinary.com/dq829orud/image/upload/v1749706432/Food-and-Beverages-Awards14_rhcqfp.jpg",
  },
  {
    title: "Wellness Center & Spa",
    description: "Relax and rejuvenate with our premium spa treatments and wellness options.",
    image: "https://res.cloudinary.com/dq829orud/image/upload/v1749706379/full-length-portrait-two-fit-600nw-1012021528_gfexhn.jpg",
  },
];

export default function Facilities() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="flex h-screen w-screen overflow-hidden">
      <div className="flex   w-full items-center h-30 justify-center absolute">
        <div className="flex items-center justify-center border border-gray-400 h-22 pl-3 pr-3 p-2 ">
          <div className="p-2 border-2 flex items-center justify-center h-16 font-gideon-roman-regular text-3xl text-gray-500">
            III
          </div>
        </div>
      </div>
      <div className=" flex h-[90%] mt-30 ">
        {facilities.map((facility, index) => {
          const isHovered = hoveredIndex === index;

          return (
            <motion.div
              key={index}
              className="relative flex-1 overflow-hidden"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              animate={{
                flex: isHovered ? 1.5 : hoveredIndex === null ? 1 : 0.9,
                zIndex: isHovered ? 10 : 1,
              }}
              transition={{ duration: 2 }}
            >
              <motion.img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover"
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ duration: 2 }}
              />
              <div className="absolute inset-0 z-10 bg-black/40 flex flex-col items-center justify-center font-libre-bodoni-regular">
                <motion.h2
                  className="text-white text-2xl tracking-wider max-w-65 md:text-4xl font-bold text-center"
                  animate={{ scale: isHovered ? 1.2 : 1 }}
                  transition={{ duration: 2 }}
                >
                  {facility.title}
                </motion.h2>
                <motion.p
                  className="text-white text-sm text-center mt-3 font-poppins-regular max-w-xs"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isHovered ? 1 : 0 }}
                  transition={{ duration: 1 }}
                >
                  {facility.description}
                </motion.p>
              </div>
              {index === 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 group w-fit flex items-center justify-center h-20 cursor-pointer z-40">
                  {/* Hovered circle with arrows */}
                  <div className="absolute group-hover:opacity-100 group-hover:backdrop-blur-sm -translate-y-10  text-white text-5xl shadow group-hover:border p-6 rounded-full transition-all duration-1000 ease-in-out">
                    <div className="relative flex items-center justify-center h-6 w-6">
                      <IoIosArrowForward className="absolute opacity-70 text-xl" />
                      <IoIosArrowForward className="translate-x-1 absolute text-xl" />
                    </div>
                  </div>

                  {/* Static label */}
                  <div className="absolute group-hover:opacity-0 -translate-y-10 rounded-full border text-center py-2 px-6 text-sm md:text-base bg-opacity-20 text-white transition-all duration-1000 backdrop-blur-sm shadow ease-in-out">
                    More
                  </div>
                </div>
              )}

            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
