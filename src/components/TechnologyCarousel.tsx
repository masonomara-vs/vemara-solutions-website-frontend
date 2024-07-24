import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";
import styles from '../styles/TechnologyCarousel.module.css';
import { wrap } from "@motionone/utils";
import { useRef } from "react";

const TechnologyCarousel = ({ technology }: { technology: any }) => {
  const technologyA = [...technology.sort((a: any, b: any) => Math.random() - 0.5)];
  const technologyB = [...technology.sort((a: any, b: any) => Math.random() - 0.5)];
  const technologyC = [...technology.sort((a: any, b: any) => Math.random() - 0.5)];

  const baseVelocityA = -.33;
  const baseVelocityB = .33;
  const baseVelocityC = -.33;

  const baseXA = useMotionValue(0);
  const baseXB = useMotionValue(0);
  const baseXC = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 100,
    stiffness: 800
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  const xA = useTransform(baseXA, (v) => `${wrap(-33, -66, v)}%`);
  const xB = useTransform(baseXB, (v) => `${wrap(-33, -66, v)}%`);
  const xC = useTransform(baseXC, (v) => `${wrap(-33, -66, v)}%`);

  const directionFactorA = useRef<number>(1);
  const directionFactorB = useRef<number>(1);
  const directionFactorC = useRef<number>(1);

  useAnimationFrame((t, delta) => {
    let moveByA = directionFactorA.current * baseVelocityA * (delta / 1000);
    let moveByB = directionFactorB.current * baseVelocityB * (delta / 1000);
    let moveByC = directionFactorC.current * baseVelocityC * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactorA.current = -1;
      directionFactorB.current = -1;
      directionFactorC.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactorA.current = 1;
      directionFactorB.current = 1;
      directionFactorC.current = 1;
    }

    moveByA += directionFactorA.current * moveByA * velocityFactor.get();
    moveByB += directionFactorB.current * moveByB * velocityFactor.get();
    moveByC += directionFactorC.current * moveByC * velocityFactor.get();

    baseXA.set(baseXA.get() + moveByA);
    baseXB.set(baseXB.get() + moveByB);
    baseXC.set(baseXC.get() + moveByC);
  });

  return (
    <div className={styles.carouselWrapper}>
      <motion.div className={styles.carouselContainer} style={{ x: xA }} >
        {technologyA.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
        {technologyA.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
        {technologyA.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className={styles.carouselContainer} style={{ x: xB }} >
        {technologyB.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
        {technologyB.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
        {technologyB.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
      <motion.div className={styles.carouselContainer} style={{ x: xC }} >
        {technologyC.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
        {technologyC.map((tech: any, index: any) => (
          <div
            key={tech._id}
            className={styles.carouselItem}
          >
            <span className={styles.techName}>{tech.name}</span>
          </div>
        ))}
        {technologyC.map((tech: any, index: any) => (
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
