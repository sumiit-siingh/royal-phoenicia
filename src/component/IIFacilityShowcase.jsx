import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function FacilityShowcase() {
    const data = [
        {
            label: "Room",
            image:
                "https://res.cloudinary.com/dq829orud/image/upload/v1749586396/pexels-pixabay-164595_uj1dan.jpg",
        },
        {
            label: "Pool",
            image:
                "https://res.cloudinary.com/dq829orud/image/upload/v1749586397/pexels-pixabay-261169_az99lu.jpg",
        },
        {
            label: "Dining",
            image:
                "https://res.cloudinary.com/dq829orud/image/upload/v1749586396/pexels-stephan-bergmann-143460989-27247505_hq31nw.jpg",
        },
    ];

    const [activeIndex, setActiveIndex] = useState(null);

    return (
        <div className="w-full h-fit relative pt-40 bg-amber-50">
            {/* "II" Text */}
            <div className="flex w-full items-center justify-center absolute">
                <div className="flex p-2 border">
                    <div className="p-2 border font-gideon-roman-regular text-2xl text-gray-600">
                        II
                    </div>
                </div>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex justify-center items-center h-screen">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex-1 w-fit overflow-hidden group cursor-pointer"
                    >
                        <div className="h-[29rem] m-2 overflow-hidden border-b border-l border-r">
                            <img
                                src={item.image}
                                alt={item.label}
                                className="absolute group-hover:flex inset-0 w-full h-full object-contain scale-100 opacity-0 group-hover:opacity-100 duration-[4.4s] delay-500 group-hover:scale-110 transition-all ease-in-out p-5 z-0"
                            />
                            <div className="group absolute inset-0 flex items-center justify-center z-10">
                                <div className="text-sky-800 group-hover:text-white text-6xl tracking-widest font-gideon-roman-regular font-semibold bg-opacity-50 px-6 py-3 rounded">
                                    {item.label}
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Mobile View (Click to Show + Animate) */}
            <div className="md:hidden flex overflow-x-auto gap-4 p-4 pt-32">
                {data.map((item, index) => (
                    <div
                        key={index}
                        onClick={() =>
                            setActiveIndex(activeIndex === index ? null : index)
                        }
                        className="relative min-w-[250px] h-[300px] flex-shrink-0 overflow-hidden group border-b border-l border-r"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className={`absolute inset-0 w-full h-full object-cover transition-all duration-[2200ms] ease-in-out p-2 ${activeIndex === index
                                    ? "opacity-100 scale-110"
                                    : "opacity-0 scale-100"
                                }`}
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div
                                className={`tracking-widest font-gideon-roman-regular font-semibold px-4 py-2 rounded text-4xl transition-all duration-500 ${activeIndex === index
                                        ? "text-white scale-110"
                                        : "text-sky-800"
                                    }`}
                            >
                                {item.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className=" relative w-full group flex items-center justify-center  cursor-pointer">
                <div className=" absolute opacity-0 group-hover:bg-sky-800 text-white text-5xl shadow  group-hover:opacity-100 group-hover:border p-10 rounded-full transition-all duration-1000 ">
                    <div className="relative flex items-center justify-center h-10 w-10 ">
                        <IoIosArrowForward className="absolute opacity-70" />
                        <IoIosArrowForward className="translate-x-1 absolute" />
                    </div>
                </div>
                <div className=" absolute group-hover:opacity-0  rounded-full h-15 w-32  border text-center p-4  duration-1000">Accomodation</div>
            </div>
        </div>
    );
}
