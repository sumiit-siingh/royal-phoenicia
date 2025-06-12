import React from 'react';
import { IoFastFoodOutline } from "react-icons/io5";
import { MdOutlinePool } from "react-icons/md";
import { MdOutlineMeetingRoom } from "react-icons/md";



const facilities = [
  {
    icon: <IoFastFoodOutline />,
    title: "Restaurant",
    description:
      "Royal Phoenicia Hotel offers an array of top-tier facilities designed to enhance the comfort and convenience of every guest.",
    color: "text-black",
    hoverColor: "hover:text-sky-800",
  },
  {
    icon: <MdOutlinePool />,
    title: "POOL",
    description:
      "Royal Phoenicia Hotel features multiple outdoor swimming pools, including a dedicated children's pool, offering relaxation for all guests.",
    color: "text-black",
    hoverColor: "hover:text-sky-800",
  },
  {
    icon: <MdOutlineMeetingRoom />
,
    title: "ROOM",
    description:
      "Royal Phoenicia Hotel in Manama, offers a variety of spacious and well-appointed rooms to suit diverse guest preferences.",
    color: "text-black",
    hoverColor: "hover:text-sky-800",
  },
];

export default function FacilityCards() {
  return (
    <div className="w-full mt-20 py-16 border-t bg-white flex items-center justify-center">
      <div className="flex flex-row flex-wrap justify-between gap-8 px-4 w-full max-w-7xl">
        {facilities.map((facility, index) => (
          <div
            key={index}
            className="flex-1 min-w-[280px] max-w-[320px] text-center  space-y-4"
          >
            <div className="text-4xl flex items-center justify-center">{facility.icon}</div>

            <h2
              className={`text-2xl sm:text-3xl font-serif transition-all duration-2000 transform ${facility.color} ${facility.hoverColor} hover:scale-145`}
            >
              {facility.title}
            </h2>

            <p className="text-gray-500 text-sm leading-relaxed font-sans px-2">
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
