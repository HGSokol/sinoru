import { useIntersectionObserver } from "~/modules/home-module/ui/hooks";

import style from "./styles/index.module.scss";

export const Section = ({ children }: { children: React.ReactNode }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={`${style.section} ${isIntersecting && style.visible}`}
    >
      {children}
    </section>
  );
};
