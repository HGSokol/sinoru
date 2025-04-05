import { useEffect, useState } from "react";

import IMAGE1 from "~/common/assets/back1.webp";
import IMAGE2 from "~/common/assets/back2.webp";
import IMAGE3 from "~/common/assets/back3.webp";
import IMAGE4 from "~/common/assets/back4.webp";
import IMAGE5 from "~/common/assets/back5.webp";

import style from "./styles/index.module.scss";

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const images = [IMAGE1, IMAGE2, IMAGE3, IMAGE4, IMAGE5];

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
    <div className={style.sliderWrapper}>
      <div
        className={style.slider}
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
            className={style.slide}
          ></div>
        ))}
      </div>
    </div>
  );
};
