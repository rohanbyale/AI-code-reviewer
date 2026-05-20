import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const VideoRevealSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="min-h-screen flex items-center justify-center bg-black overflow-hidden"
    >
      <motion.video
        src="https://www.pexels.com/download/video/36038040/"   // 🔁 replace with your video path
        autoPlay
        muted
        loop
        playsInline
        className="rounded-2xl shadow-2xl"
        initial={{
          scale: 0.6,
          opacity: 0,
        }}
        animate={
          isInView
            ? {
                scale: 1,
                opacity: 1,
              }
            : {}
        }
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        style={{
          width: "80vw",
          maxWidth: "1200px",
        }}
      />
    </section>
  );
};

export default VideoRevealSection;