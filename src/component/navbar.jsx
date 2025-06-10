import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { PiCrownLight } from "react-icons/pi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { BsMenuButton } from "react-icons/bs";

export default function Navbar() {
    const menuItems = ["ROOMS", "WELLNESS", "GASTRO", "HOTEL", "EVENTS", "CONTACT"];

    return (
        <div className="absolute top-0 z-999 w-full backdrop-blur-2xl  border-b border-gray-300 ">

            {/* Top Navbar */}
            <div className="flex items-center justify-between  w-full py-2 sm:px-6 text-gray-300 border-b border-gray-300">

                {/* Left: Menu */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full text-sm sm:text-base">
                    <BsMenuButton className="text-lg sm:text-xl" />
                    <span>Menu</span>
                </div>

                {/* Center */}
                <div className="flex items-center justify-center gap-4 sm:gap-6">

                    {/* Year */}
                    <div className="tracking-widest text-xs sm:text-sm font-poppins-regular">
                        2&nbsp;0&nbsp;2&nbsp;2
                    </div>

                    {/* Crown & Title */}
                    <div className="flex flex-col items-center justify-center px-3 py-2 sm:px-4 sm:py-3 rounded-full border-2 border-white text-xs sm:text-sm">

                        <PiCrownLight className="text-lg text-white sm:text-2xl mb-[-2px]" />

                        {/* Responsive Rounded Arcs */}
                        <div className="relative w-10 sm:w-12 h-6 sm:h-7 -mb-4">
                            <div className="absolute inset-0 border-t-2 border-white rounded-t-full" />
                            <div className="absolute top-[4px] left-[10%] right-[10%] h-[70%] border-t-2 border-white rounded-t-full" />
                            <div className="absolute top-[8px] left-[20%] right-[20%] h-[50%] border-t-2 border-white rounded-t-full" />
                        </div>

                        {/* Royal Text */}
                        <div className="-mt-1 text-center leading-tight">
                            <span className="font-charmonman-regular text-lg sm:text-2xl font-bold tracking-wide text-white">
                                R
                                <span className="font-gideon-roman-regular text-[10px] sm:text-sm font-normal text-white">OYAL</span>
                            </span>
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 text-gray-300 text-sm sm:text-base">
                        {Array(4).fill().map((_, i) => (
                            <IoStarOutline key={i} />
                        ))}
                    </div>
                </div>

                {/* Right: Booking */}
                <div className="flex items-center gap-2 px-4 py-2 bg-gray-700 rounded-full text-sm sm:text-base">
                    <span>Booking</span>
                    <MdOutlineShoppingBag className="text-lg sm:text-xl" />
                </div>
            </div>

            {/* Menu Items */}
            <div className="w-full overflow-x-auto z-10  bg-white/10 backdrop-blur-2xl ">
                <div className="flex  items-center justify-center gap-4 sm:gap-10 px-4 py-3 whitespace-nowrap text-white text-xs sm:text-sm md:text-base min-w-max">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="hover:text-yellow-300 cursor-pointer transition-all duration-200 font-poppins-regular"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
