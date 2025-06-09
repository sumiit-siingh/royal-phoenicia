import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const images = [
  'https://res.cloudinary.com/dq829orud/image/upload/v1749418041/pexels-jess-vide-5232684_swbhwb.jpg',
  'https://res.cloudinary.com/dq829orud/image/upload/v1749417502/pexels-einfoto-2350511_fsdken.jpg',
];

export default function CurtainSlider() {
  const [index, setIndex] = useState(0);
  const [showCurtain, setShowCurtain] = useState(false); // Start with curtain hidden
  const [bgZoom, setBgZoom] = useState(1);
  const INITIAL_BG_DELAY = 10000; // 5 seconds for the initial background display
  const BG_ZOOM_DURATION = 7000; // Matches your bg image transition duration (in ms)

  // Control full loop: curtain in ➝ curtain out ➝ bg zoom ➝ next
  useEffect(() => {
    let initialZoomSetupTimeout; // For the initial background zoom start
    let initialDelayBeforeCurtainTimeout; // For the delay before the curtain sequence begins

    // Timers specific to one cycle of the curtain animation
    let curtainShowTimeout;
    let curtainHideAndBgZoomStartTimeout;
    let nextImageCycleTimeout;


    const runSequence = () => {
      // Step 1: Show curtain
      setShowCurtain(true);

      // Duration for curtain to be fully visible before it starts exiting
      const CURTAIN_VISIBLE_DURATION = 9000; // Adjust as needed
      // Total duration for curtain's entry and exit animations
      const CURTAIN_ANIMATION_TOTAL_DURATION = 4000 + 1000; // x duration + opacity duration

      curtainShowTimeout = setTimeout(() => {
        // Step 2: Hide curtain
        setShowCurtain(false);

        // Step 3: Zoom BG (in or out)
        // This timeout fires after the curtain has started its exit animation (x: 2s, opacity: 1s)
        // We want the BG zoom to start after the curtain is mostly off screen.
        curtainHideAndBgZoomStartTimeout = setTimeout(() => {
          setBgZoom((prev) => (prev === 1 ? 1.4 : 1));
        }, 1000); // Start BG zoom 1 second into the curtain's exit animation

        // Step 4: Wait for bg zoom to finish, then next image and restart sequence
        nextImageCycleTimeout = setTimeout(() => {
          setIndex((prev) => (prev + 1) % images.length);
          runSequence(); // repeat the cycle
        }, 1000 + BG_ZOOM_DURATION); // Wait for the BG zoom to complete (1s delay + 4s zoom)

      }, CURTAIN_VISIBLE_DURATION); // Curtain stays visible for this duration
    };

    // --- Initial setup before the repeating curtain sequence ---

    // 1. Start the initial background zoom shortly after component mounts
    initialZoomSetupTimeout = setTimeout(() => {
      setBgZoom(1.4); // Zoom in the background initially
    }, 100); // Small delay to ensure render

    // 2. After the initial background display time, start the main curtain animation loop
    initialDelayBeforeCurtainTimeout = setTimeout(() => {
      setBgZoom(1); // Reset BG zoom to initial state before the first curtain appears
      runSequence(); // Start the first curtain animation cycle
    }, INITIAL_BG_DELAY); // Wait for the initial 5 seconds

    // --- Cleanup function for all timeouts ---
    return () => {
      clearTimeout(initialZoomSetupTimeout);
      clearTimeout(initialDelayBeforeCurtainTimeout);
      clearTimeout(curtainShowTimeout);
      clearTimeout(curtainHideAndBgZoomStartTimeout);
      clearTimeout(nextImageCycleTimeout);
    };
  }, []); // Empty dependency array means this useEffect runs once on mount

  return (
    <div className="relative w-screen min-h-screen overflow-hidden bg-black">

      {/* 🌆 Background window image */}
      <motion.img
        src="https://res.cloudinary.com/dq829orud/image/upload/v1749417501/pexels-yajun-dong-50968307-19036807_gzw7xy.jpg"
        animate={{ scale: bgZoom }}
        transition={{ duration: BG_ZOOM_DURATION / 1000, ease: 'easeInOut' }} 
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* 🏨 Title on top */}
      <div className="absolute inset-0 z-50 flex items-center justify-center px-4">
        <div className="text-white font-bold text-center space-y-3">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 3, duration: 3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <span className="block font-gideon-roman-regular text-4xl sm:text-8xl tracking-widest">Hotel</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 3, duration: 3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <span className="block font-gideon-roman-regular text-4xl sm:text-8xl tracking-widest ">Royal Phoenicia</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ delay: 3, duration: 3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <span className="block text-sm sm:text-xl text-gray-300 font-normal tracking-wide">
              YOUR FAVOURITE PLACE. OUR FAMILY STORY
            </span>
          </motion.div>
        </div>
      </div>

      {/* 🎭 Curtain Image */}
      <AnimatePresence>
        {showCurtain && (
          <motion.div
            key={index}
            initial={{ x: '100%', opacity: 1, scale: 1 }}
            animate={{ x: '0%', scale: 1.8 }}
            exit={{ x: '-100%', opacity: 0 }}
            transition={{
              x: { duration: 2, ease: 'easeInOut' },
              scale: { duration: 5, ease: 'easeInOut', delay: 2 },
              opacity: { duration: 1, ease: 'easeInOut' },
            }}
            className="absolute inset-0 w-full h-full " 
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