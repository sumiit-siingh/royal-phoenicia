import React, { useState } from "react";
import { PiCrownLight } from "react-icons/pi";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";


export default function HotelInfoLayout() {
    const [hovered, setHovered] = useState(null); // 'left' | 'right' | null

    return (
        <div className="flex h-screen font-serif text-white">
            {/* Left Side */}
            <div
                onMouseEnter={() => setHovered("left")}
                onMouseLeave={() => setHovered(null)}
                className={`flex items-center justify-between
          transition-all duration-4000 ease-in-out origin-left
          ${hovered === "left" ? "flex-[3]" : hovered === "right" ? "flex-[1]" : "flex-[2]"}
          bg-[#336B87] p-10
        `}
            >
                <div className="flex flex-col justify-center gap-12">
                    <div className="md:text-4xl text-xl tracking-widest"><span className="text-base text-center md:mr-10">I </span> Rooms</div>
                    <div className="md:text-4xl text-xl tracking-widest"><span className="text-base text-center md:mr-10">II</span>Wellness</div>
                    <div className="md:text-4xl text-xl tracking-widest"><span className="text-base text-center md:mr-10">III</span>Gastro</div>
                    <div className="md:text-4xl text-xl tracking-widest"><span className="text-base text-center md:mr-10">IV</span>Hotel</div>
                    <div className="md:text-4xl text-xl tracking-widest"><span className="text-base text-center md:mr-10">V</span> Events</div>
                </div>
                <div className=" flex flex-col tracking-widest items-center justify-start h-90 w-full  ">
                    <h2 className="text-3xl  mb-4">More about rooms</h2>
                    <ul className="space-y-2 text-lg text-gray-200">
                        <li>120 comfortable rooms</li>
                        <li>Dinings</li>
                        <li>Packages</li>
                        <li>Pools</li>
                    </ul>
                </div>

            </div>

            {/* Right Side */}
            <div
                onMouseEnter={() => setHovered("right")}
                onMouseLeave={() => setHovered(null)}
                className={`
          transition-all duration-4000 ease-in-out origin-right
          ${hovered === "right" ? "flex-[1.2]" : hovered === "left" ? "flex-[2]" : "flex-[2]"}
          bg-[#2A4D69] p-10 flex flex-col items-center justify-center text-center
        `}
            >
                <div className="flex flex-col items-center justify-center px-3 md:translate-x-0 translate-x-2 py-2 sm:px-4 sm:py-3 rounded-full border-2 text-amber-200 text-xs sm:text-sm">

                    <PiCrownLight className="text-lg  sm:text-2xl mb-[-2px]" />

                    {/* Responsive Rounded Arcs */}
                    <div className="relative w-10 sm:w-12 h-6 sm:h-7 -mb-4">
                        <div className="absolute inset-0 border-t-2  rounded-t-full" />
                        <div className="absolute top-[4px] left-[10%] right-[10%] h-[70%] border-t-2  rounded-t-full" />
                        <div className="absolute top-[8px] left-[20%] right-[20%] h-[50%] border-t-2  rounded-t-full" />
                    </div>

                    {/* Royal Text */}
                    <div className="-mt-1 text-center leading-tight">
                        <span className="font-charmonman-regular text-lg sm:text-2xl font-bold tracking-wide ">
                            R
                            <span className="font-gideon-roman-regular text-[10px] sm:text-sm font-normal ">OYAL</span>
                        </span>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="text-3xl font-semibold tracking-widest">Wellness & Pools</div>
                    <div className="text-3xl font-semibold tracking-widest">Hotel Royal Phoenicia</div>
                    <div className="text-lg text-gray-300 font-poppins-regular mt-4">
                        <p>Building 1288</p>
                        <p>Road 3931, Block 339</p>
                        <p>Umm Al Hasam – Manama</p>
                        <p>Bahrain</p>
                    </div>
                    <div className="mt-10 font-poppins-regular text-gray-300">
                        <p>+973 1730 7307</p>
                        <p>info@royalphoeniciahotel.com</p>
                        <a  className="">Contacts →</a>
                    </div>
                    <div className="flex justify-center gap-6 mt-6 text-2xl">
                        <IoLogoInstagram className="bg-gray-400 text-gray-600 rounded-full " /> 
                        <FaFacebook className="text-gray-400 rounded-full "/>
                        <RiYoutubeLine className="bg-gray-400 text-gray-700 rounded-full text-2xl p-[0.9px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}
