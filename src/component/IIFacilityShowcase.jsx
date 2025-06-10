import React from "react";

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

    return (
        <div className="w-full relative pt-40 bg-amber-50">
            <div className="flex w-full items-center justify-center absolute">
                <div className="flex  p-2 border">
                    <div className="p-2 border font-gideon-roman-regular text-2xl text-gray-600">II </div>
                </div>
            </div>
            {/* Desktop View */}
            <div className="hidden md:flex justify-center items-center h-screen">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative flex-1  w-fit overflow-hidden  group cursor-pointer"
                    >
                        {/* Background image with zoom on hover */}
                        <div className="h-[29rem] m-2 overflow-hidden border-b border-l border-r ">
                            <img
                                src={item.image}
                                alt={item.label}
                                className="absolute group-hover:flex inset-0 w-full h-full object-contain scale-100 opacity-0 group-hover:opacity-100 duration-[4.4s] delay-500 group-hover:scale-110 transition-all  ease-in-out p-5  z-0"
                            />
                         


                            {/* Overlay with text - always visible */}
                            <div className=" group absolute inset-0 flex items-center  justify-center z-10">
                                <div className="text-sky-800 group-hover:text-white text-6xl  tracking-widest font-gideon-roman-regular font-semibold   bg-opacity-50 px-6 py-3 rounded">
                                    {item.label}
                                </div>
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Mobile View */}
            <div className="md:hidden flex overflow-x-auto gap-4 p-4">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="relative min-w-[250px] h-[300px] flex-shrink-0  overflow-hidden group"
                    >
                        <img
                            src={item.image}
                            alt={item.label}
                            className="absolute inset-0 w-full h-full object-cover scale-100 transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 flex items-center justify-center z-10">
                            <div className="text-sky-800 text-6xl  tracking-widest font-gideon-roman-regular font-semibold">
                                {item.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
