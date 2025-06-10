import React from "react";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { IoIosArrowForward } from "react-icons/io";


export default function WellnessMessage() {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.9 });
    const controls = useAnimation();
    const [hasAnimated, setHasAnimated] = useState(false);
    const [isFixed, setIsFixed] = useState(false);

    useEffect(() => {
        if (isInView) {
            setIsFixed(true);
            if (!hasAnimated) {
                controls.start({
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    transition: { duration: 4.5, ease: "easeInOut" },
                });

                setHasAnimated(true);
            }
        } else {
            setIsFixed(false);
        }
    }, [isInView, hasAnimated, controls]);

    return (
        <div ref={ref} className="h-screen w-full bg-gray-100 overflow-hidden flex flex-col items-center justify-center gap-20">

            {/* Top "I" box */}
            <div className="border border-gray-400 h-24 w-20 flex items-center justify-center">
                <div className="border-2 border-gray-400 h-18 w-12 flex items-center justify-center">
                    <div className="text-3xl font-libre-bodoni-regular text-gray-500">I</div>
                </div>
            </div>

            {/* Motion Text in Center */}
            <motion.div
                animate={controls}
                initial={{ opacity: 0, scale: 0.2 }}
                className="text-center font-libre-bodoni-regular text-lg sm:text-xl md:text-2xl lg:text-5xl w-full text-gray-700 px-4"
            >
                <span>The stay at Wellness & Pool Hotel</span>
                <span className="block my-4">Royalphoenicia means enjoying every moment.</span>
                Relax. Find inspiration. Be fascinated.
            </motion.div>

            {/* Bottom "Hotel" pill */}
            <div className=" relative group flex items-center justify-center  h-20 w-40 cursor-pointer">
                <div className=" absolute opacity-0 group-hover:bg-sky-800 text-white text-5xl shadow  group-hover:opacity-100 group-hover:border p-10 rounded-full transition-all duration-1000 ">
                    <div className="relative flex items-center justify-center h-10 w-10 ">
                        <IoIosArrowForward className="absolute opacity-70" />
                        <IoIosArrowForward className="translate-x-1 absolute" />
                    </div>
                </div>
                <div className=" absolute group-hover:opacity-0  rounded-full h-15 w-32  border text-center p-4  duration-1000">Hotel</div>
            </div>
        </div>

    );
}
