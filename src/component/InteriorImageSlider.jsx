import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
    'https://res.cloudinary.com/dq829orud/image/upload/v1749505512/pexels-ramazphotos-32418083_pevmet.jpg',
    'https://res.cloudinary.com/dq829orud/image/upload/v1749505512/pexels-naimbic-2290753_naoan8.jpg',
    'https://res.cloudinary.com/dq829orud/image/upload/v1749505511/pexels-quark-studio-1159039-2506990_p9v8ip.jpg',
    'https://res.cloudinary.com/dq829orud/image/upload/v1749505511/pexels-pixabay-161758_vkfwpy.jpg',
    'https://res.cloudinary.com/dq829orud/image/upload/v1749505510/pexels-cottonbro-5371573_h47xyw.jpg',
];

export default function AlternatingImageSlider() {
    const [index, setIndex] = useState(0);
    const [zoomIn, setZoomIn] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setZoomIn((prev) => !prev);
            setIndex((prev) => (prev + 1) % images.length);
        }, 8000);

        return () => clearTimeout(timer);
    }, [index]);

    return (
        <div className="relative w-screen h-screen overflow-hidden bg-black">
            {images.map((src, i) => (
                <AnimatePresence key={i}>
                    {i === index && (
                        <motion.img
                            key={src + zoomIn}
                            src={src}
                            initial={{ x: '100%', opacity: 0 }}
                            animate={{ x: 0, opacity: 1, scale: zoomIn ? 1.4 : 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                x: { duration: 2, ease: 'easeInOut' },
                                opacity: { duration: 2, ease: 'easeInOut' },
                                scale: { duration: 6, ease: 'easeInOut', delay: 2 },
                            }}
                            className="absolute top-0 left-0 w-full h-full object-cover z-10"
                        />
                    )}
                </AnimatePresence>
            ))}

            {/* Centered Card Overlay */}
            <div className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 border border-gray-500 p-6  shadow-xl text-center ">
                <div className='border border-gray-600 p-5 bg-white '>
                    <div className='border border-gray-600 p-20 md:pt-10 pt-5 h-100  md:space-y-10 space-y-5'>
                        <p className="text-gray-700   font-gideon-roman-regular md:text-lg text-sm ">Favourite Hotel</p>
                        <p className="text-gray-700  font-gideon-roman-regular md:text-lg text-sm ">
                            Business and Event Spaces </p>
                        <p className="text-gray-700  font-gideon-roman-regular md:text-lg text-sm">Diverse Dining Options</p>
                        <p className="text-gray-700  font-gideon-roman-regular md:text-lg text-sm">Multiple Swimming Pools</p>
                        <p className="text-gray-700  font-gideon-roman-regular md:text-lg text-sm">Family-Friendly Amenities</p>
                    </div>
                </div>

            </div>
        </div>
    );
}
