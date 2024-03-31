"use client";

import { MotionStyle, motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useEffect, useRef, useState } from "react";

const HorizontalScroll = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <HorizontalScrollCarousel>{children}</HorizontalScrollCarousel>
    </div>
  );
};

const HorizontalScrollCarousel = ({ children }: { children: ReactNode }) => {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Function to update window width
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Initial window width
    setWindowWidth(window.innerWidth);

    // Event listener for window resize
    window.addEventListener("resize", handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array means this effect will only run once on mount

  // Your logic for rendering based on windowWidth
  const renderText = windowWidth <= 600;

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    renderText ? ["1%", "-120%"] : ["1%", "-90%"]
  );

  const motionStyle: MotionStyle = { x };
  return (
    <section ref={targetRef} className="relative h-[300vh] bg-white px-64">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={motionStyle} className="flex gap-4">
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalScroll;
