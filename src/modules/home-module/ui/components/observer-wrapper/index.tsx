import { useIntersectionObserver } from "../../hooks/useObserver";
import styles from "./styles/light.module.scss";

const Section = ({ children }: { children: React.ReactNode }) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.3,
  });

  return (
    <section
      ref={ref}
      className={`${styles.section} ${isIntersecting && styles.visible}`}
    >
      {children}
    </section>
  );
};

export default Section;
