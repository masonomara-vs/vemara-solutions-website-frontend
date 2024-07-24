import { fadeIn, fadeInIcon } from "@/pages/utils/motion";
import { motion } from 'framer-motion';
import styles from "../styles/ProcessCard.module.css";
import Image from "next/image";

export default function ProcessCard({ step, title, description }: { step: any, title: any, description: any }) {
  const renderIcon = () => {
    switch (step) {
      case "1":
        return <Image src="/bolt.svg" height={20.17} width={11} priority alt="bolt" />;
      case "2":
        return <Image src="/compass.svg" height={18.33} width={18.33} priority alt="compass" />;
      case "3":
        return <Image src="/finance.svg" height={17.42} width={17.42} priority alt="finance" />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={fadeIn("up", "spring", 0, 0.8)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0 }}
    >
      <div className={styles.container}>
        <motion.div
          variants={fadeInIcon("up", "spring", 0.1, 0.8)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0 }}
        >
          <div className={styles.iconContainer}>
            {renderIcon()}
          </div>
        </motion.div>
        <div className={styles.textContainer}>
          <span className="inactive" style={{ opacity: .6 }}>
            Step {step}
          </span>
          <span className="label">{title}</span>
          <span className="description">{description}</span>
        </div>
      </div>
    </motion.div>
  );
}
