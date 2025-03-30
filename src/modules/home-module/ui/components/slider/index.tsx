import { useEffect, useState } from "react";

import light from "./styles/light.module.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const images = [
    "/src/common/assets/back1.webp",
    "/src/common/assets/back2.webp",
    "/src/common/assets/back3.webp",
    "/src/common/assets/back4.webp",
    "/src/common/assets/back5.webp",
  ];

  const slides = [...images, images[0]];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        if (prev >= images.length) {
          setIsTransitioning(false);
          return 0;
        }
        setIsTransitioning(true);
        return prev + 1;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={light.sliderWrapper}>
      <div
        className={light.slider}
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: isTransitioning ? "transform 1s ease-in-out" : "none",
        }}
      >
        {slides.map((image, index) => (
          <div
            key={index}
            style={{
              backgroundImage: `linear-gradient(180deg, rgba(24, 30, 41, 0.6) 0%, rgba(24, 30, 41, 0.4) 100%), url(${image})`,
            }}
            className={light.slide}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
