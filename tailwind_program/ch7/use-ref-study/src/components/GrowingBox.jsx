import { useEffect, useRef } from "react";

const GrowingBox = () => {
  const boxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const size = 160 + scrollY * 0.5;

      if (boxRef.current) {
        boxRef.current.style.width = `${size}px`;
        boxRef.current.style.height = `${size}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={boxRef}
      className="flex justify-center items-center w-40 h-40 bg-pink-400 transition-all"
    >
      GrowingBox
    </div>
  );
};

export default GrowingBox;
