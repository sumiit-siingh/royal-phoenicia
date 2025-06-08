import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://res.cloudinary.com/dq829orud/image/upload/v1749385527/pexels-zhangkaiyv-1139556_rh77ar.jpg',
  'https://res.cloudinary.com/dq829orud/image/upload/v1749391790/pexels-pixabay-417430_u1cwnk.jpg',
];

export default function CurtainSlider() {
  const [index, setIndex] = useState(0);
  const [showCurtain, setShowCurtain] = useState(true);
  const [bgZoom, setBgZoom] = useState(1);

  // Control full loop: curtain in ➝ curtain out ➝ bg zoom ➝ next
  useEffect(() => {
    let sequence;

    const runSequence = () => {
      // Step 1: Show curtain
      setShowCurtain(true);

      sequence = setTimeout(() => {
        // Step 2: Hide curtain
        setShowCurtain(false);

        // Step 3: Zoom BG (in or out)
        setTimeout(() => {
          setBgZoom((prev) => (prev === 1 ? 1.4 : 1));
        }, 1000); // after curtain exits

        // Step 4: Wait for bg zoom to finish, then next image
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % images.length);
          runSequence(); // repeat
        }, 5000); // bg zoom time
      }, 6000); // curtain visible duration
    };

    runSequence();
    return () => clearTimeout(sequence);
  }, []);

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-black">

      {/* 🌆 Background window image */}
      <motion.img
        src="https://res.cloudinary.com/dq829orud/image/upload/v1749385529/pexels-pixabay-534219_lgqxqx.jpg"
        animate={{ scale: bgZoom }}
        transition={{ duration: 4, ease: 'easeInOut' }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 🏨 Title on top */}
      <div className="absolute inset-0 z-50 flex items-center justify-center px-4">
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold text-center">
          Hotel Royal Phoenicia
        </h1>
      </div>

      {/* 🎭 Curtain Image */}
      <AnimatePresence>
        {showCurtain && (
          <motion.div
            key={index}
            initial={{ x: '100%', opacity: 1, scale: 1 }}
            animate={{ x: '0%', scale: 1.3 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              x: { duration: 2, ease: 'easeInOut' },
              scale: { duration: 4, ease: 'easeInOut', delay: 2 },
              opacity: { duration: 1, ease: 'easeInOut' },
            }}
            className="absolute inset-0 w-full h-full z-10"
          >
            <img
              src={images[index]}
              className="w-full h-full object-cover"
              alt="Curtain"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>

  );
}
