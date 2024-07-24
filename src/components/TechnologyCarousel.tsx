import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import styles from '../styles/TechnologyCarousel.module.css'
import { wrap } from "@motionone/utils";
import { useRef } from "react";

const TechnologyCarousel = ({ technology }: { technology: any }) => {
  const baseVelocity = 5
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className={styles.carouselWrapper}>
      <motion.div className={styles.carouselContainer} style={{ x }} >
        {technology.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className={styles.carouselContainer} style={{ x }} >
        {technology.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className={styles.carouselContainer} style={{ x }} >
        {technology.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechnologyCarousel;
