import React from "react";
export default function AboutUs() {
    const images = ["https://res.cloudinary.com/dq829orud/image/upload/v1749721823/check-hotel-receptionist-counter-wearing-600nw-1836531721_zo9xdd_c_crop_ar_1_1_nuwxwv.jpg", "https://res.cloudinary.com/dq829orud/image/upload/v1749586396/pexels-pixabay-164595_uj1dan.jpg", "https://res.cloudinary.com/dq829orud/image/upload/v1749586396/pexels-pixabay-164595_uj1dan.jpg"]
    return (
        <div className="  md:mt-20 -mt-50 h-screen md:space-y-30  space-y-10 w-full ">
            <div className=" flex w-full items-center   justify-center">
                <div className="flex items-center justify-center border border-gray-400 h-22 pl-3 pr-3 p-2 ">
                    <div className="p-2 border-2 flex items-center justify-center h-16 font-gideon-roman-regular text-3xl text-gray-500">
                        IV
                    </div>
                </div>
            </div>
            <div className="flex w-full  bg-re d-300 items-center justify-center">
                <div className="font-libre-bodoni-regular tracking-widest md:text-7xl text-xl">
                    Exceptional gastranomy <span className="block ">served in elegent spaces.</span>
                </div>
            </div>
            <div className=" flex flex-wrap bg-r ed-400 md:items-center md:justify-around flex-row ">
                <div className="h-[400px] md:h-[500px] md:w-[600px] overflow-y-scroll space-y-20 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-transparent">
                    {images.map((img, index) => (
                        <div key={index} className="w-full">
                            <img src={img} alt={`Image ${index + 1}`} className="w-full object-cover " />
                        </div>
                    ))}
                </div>

                <div className=" md:space-y-10 ">
                    <div className="md:text-3xl tracking-wider font-gideon-roman-regular text-md font-semibold  md:p-0 p-5">About us</div>
                    <div className="max-w-100 text-gray-600 max-h-150 font-poppins-regular md:text-sm text-xs p-5 md:p-0 bg-gre en-300">Royal Phoenicia Hotel offers an array of top-tier
                        facilities designed to enhance the comfort and
                        convenience of every guest. The hotel features
                        a luxurious spa and wellness center, where
                        guests can indulge in soothing treatments and
                        rejuvenating massages. For those seeking to
                        maintain their fitness routine, the fully equipped
                        gym provides a space for exercise, while the
                        outdoor pool offers a relaxing environment to
                        unwind. Dining at the hotel is a pleasure, with
                        an on-site restaurant offering a diverse
                        selection of cuisines in an elegant atmosphere.
                        Additionally, the hotel provides business
                        facilities, including meeting rooms and event
                        spaces, ideal for corporate travelers. With its
                        comprehensive range of services.
                    </div>
                </div>
            </div>
        </div>
    )
}