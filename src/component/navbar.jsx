import React from "react";
// import { FaCrown } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { PiCrownLight } from "react-icons/pi";

import { MdOutlineShoppingBag } from "react-icons/md";


import { BsMenuButton } from "react-icons/bs";


export default function Navbar() {
    const menuItems = ["ROOMS", "WELLNESS", "GASTRO", "HOTEL", "EVENTS", "CONTACT"]
    return (
        <div className="fixed top-0 z-10 w-full backdrop-blur-2xl bg-white/10 border-b border-white/20">
            {/* Top Nav */}
            <div className="flex items-center justify-between w-full px-4 py-3 md:px-6 text-black">
                {/* Left: Menu Button */}
                <div className="flex items-center gap-2 p-2 md:p-4 bg-gray-700 rounded-full text-white">
                    <BsMenuButton />
                    <div>Menu</div>
                </div>

                {/* Center Content */}
                <div className="flex items-center justify-center gap-4 sm:gap-6 text-white text-sm md:text-base">
                    <div className="tracking-[0.5em] font-poppins-regular">2&nbsp;0&nbsp;2&nbsp;2</div>

                    {/* Crown Icon and Text */}
                    <div className="p-2 sm:p-3 rounded-full border-2 border-white flex flex-col items-center justify-center">
                        <div className="text-xl mb-[-4px]">
                            <PiCrownLight />
                        </div>
                        <div className="relative w-[45px] h-[30px] -mb-4">
                            <div className="absolute inset-0 border-t-2 border-white rounded-t-full" />
                            <div className="absolute top-1 left-2 right-2 h-[24px] border-t-2 border-white rounded-t-full" />
                            <div className="absolute top-2 left-4 right-4 h-[18px] border-t-2 border-white rounded-t-full" />
                        </div>
                        <div className="text-center leading-tight -mt-1">
                            <span className="font-charmonman-regular text-2xl font-bold tracking-wide">
                                R
                                <span className="font-gideon-roman-regular text-[14px] font-normal">OYAL</span>
                            </span>
                        </div>
                    </div>

                    {/* Stars */}
                    <div className="flex gap-1 text-white">
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                </div>

                {/* Right: Booking Button */}
                <div className="flex items-center gap-2 p-2 md:p-4 bg-gray-700 rounded-full text-white">
                    <div>Booking</div>
                    <MdOutlineShoppingBag />
                </div>
            </div>

            {/* Menu Items Nav - Always in row, scrollable on small screens */}
            <div className="w-full overflow-x-auto bg-white/10 backdrop-blur-2xl border-b border-white/20">
                <div className="flex flex-row items-center gap-8 sm:gap-6 px-4 py-3 whitespace-nowrap text-white text-sm sm:text-base min-w-max">
                    {menuItems.map((item, index) => (
                        <div
                            key={index}
                            className="hover:text-yellow-300 cursor-pointer transition"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </div>


    )
}