import React from "react";
// import { FaCrown } from "react-icons/fa";
import { IoStarOutline } from "react-icons/io5";
import { PiCrownLight } from "react-icons/pi";

import { MdOutlineShoppingBag } from "react-icons/md";


import { BsMenuButton } from "react-icons/bs";


export default function Navbar() {
    return (
        <div className="z-10 fixed  h-20 w-full backdrop-blur-2xl bg-white/10 ">
            <div className="flex items-center justify-between  w-full h-full px-6 text-black">

                <div className="flex items-center gap-2 p-4 pl-5 pr-5 bg-gray-700 rounded-full">
                    <BsMenuButton />
                    <div>Menu</div>
                </div>

                <div className="flex items-center gap-6">

                    <div className="font-poppins-regular tracking-[0.5em]">2&nbsp;0&nbsp;2&nbsp;2</div>


                    <div className="w-fit h-fit p-3 rounded-full border-2 border-white flex flex-col items-center justify-center text-white">

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

                    <div className="flex gap-1">
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                        <IoStarOutline />
                    </div>
                </div>


                <div className="flex items-center gap-2 p-4 pl-5 pr-5 bg-gray-700 rounded-full">
                    <div>Booking</div>
                    <MdOutlineShoppingBag />
                </div>
            </div>
        </div>

    )
}