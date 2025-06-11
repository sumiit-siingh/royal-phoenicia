import { label } from "framer-motion/client";
import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

export default function PackageShowcase() {
    const images = [
        {
            src: "https://res.cloudinary.com/dq829orud/image/upload/v1749621204/istockphoto-1413761479-612x612_so7pd3.jpg",
            label: "All Season",
            title: "Royal Weekend Stay Package",
            des: "From BHD 250 / Per person / 3 Night"
        },
        {
            src: "https://res.cloudinary.com/dq829orud/image/upload/v1749621047/luxury-dinner-table-hotel_1150-11071_tnergf.avif",
            label: "All Season",
            title: "Luxury Dining Experience",
            des: "From BHD 250 / Per person / 3 Night"
        },
        {
            src: "https://res.cloudinary.com/dq829orud/image/upload/v1749621047/happy-family-summer-vacation-people-having-fun-beach-active-healthy-lifestyle_411285-3920_xlihre.avif",
            label: "All Season",
            title: "Family Fun Vacation",
            des: "From BHD 250 / Per person / 3 Night"
        }
    ];

    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="bg-orange-50 w-full h-screen py-12">
            <div className="overflow-x-auto ">
                <div className="items-center justify-center flex p-10 w-full">
                    <div className="md:text-6xl text-4xl tracking-widest font-semibold font-gideon-roman-regular flex items-center  p-10 justify-center">
                        <div>Stay Packages</div>
                    </div>
                </div>
                <div className="w-full overflow-x-auto px-4">
                    <div className="flex items-center gap-4 md:gap-6 w-max">
                        {images.map((img, index) => (
                            <div
                                key={index}
                                className="flex-shrink-0"
                                onMouseEnter={() => setHoveredIndex(index)}
                                onMouseLeave={() => setHoveredIndex(null)}
                            >
                                {/* Image Box */}
                                <div className="relative w-[90vw] sm:w-[70vw] md:w-[520px] lg:w-[620px] h-[360px] sm:h-[420px] md:h-[480px] lg:h-[520px] overflow-hidden">
                                    {/* Image */}
                                    <img
                                        src={img.src}
                                        alt={img.title}
                                        className={`w-full h-full object-cover transition-transform duration-[2000ms] ease-in-out ${hoveredIndex === index ? "scale-110" : "scale-100"
                                            }`}
                                    />

                                    {/* Inner Frame */}
                                    <div className="absolute inset-4 border border-white z-10 pointer-events-none "></div>

                                    {/* Dark Overlay */}
                                    <div className="absolute inset-0 bg-black/30 z-20"></div>

                                    {/* Centered Text */}
                                    <div className="absolute top-20 left-1/2 font-poppins-regular -translate-x-1/2 z-30 text-white text-sm md:text-base  drop-shadow-md">
                                        {img.label}
                                    </div>
                                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-30 px-4">

                                        <h3 className="text-white text-lg md:text-2xl font-libre-bodoni-regular tracking-wider font-semibold mb-2 drop-shadow-md">
                                            {img.title}
                                        </h3>
                                        <p className="text-gray-300 text-sm md:text-base drop-shadow-sm">
                                            {img.des}
                                        </p>
                                    </div>
                                    {/* Bottom-Center Animated Button */}
                                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 group w-fit flex items-center justify-center h-20 cursor-pointer z-40">
                                        {/* Hovered circle with arrows */}
                                        <div className="absolute group-hover:opacity-100 group-hover:backdrop-blur-sm -translate-y-10  text-white text-5xl shadow  group-hover:border p-6 rounded-full transition-all duration-1000 ease-in-out">
                                            <div className="relative flex items-center justify-center h-6 w-6">
                                                <IoIosArrowForward className="absolute opacity-70 text-xl" />
                                                <IoIosArrowForward className="translate-x-1 absolute text-xl" />
                                            </div>
                                        </div>

                                        {/* Static label */}
                                        <div className="absolute group-hover:opacity-0 -translate-y-10 rounded-full border text-center py-2 px-6 text-sm md:text-base  bg-opacity-20 text-white transition-all duration-1000 backdrop-blur-sm shadow ease-in-out">
                                           More
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
}
