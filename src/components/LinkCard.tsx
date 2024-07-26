import styles from "../styles/LinkCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import Image from "next/image";

export default function LinkCard({
  title,
  description,
  buttonTitle,
  buttonLink,
  button2Title,
  button2Link,
  delay = 0
}: {
  title: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
  button2Title?: string;
  button2Link?: string;
  delay?: number
}) {
  return (
    <div className={styles.linkCardWrapper}>
      <motion.div
        key={title}
        variants={fadeIn("up", "spring", 0, 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }} // Adjust amount as needed
      >
        <div className={styles.linkContainer}>
          <h4 className="label">{title}</h4>
          <div className="description">{description}</div>

          <Link className="buttonPrimaryBackground" target="_top" href={buttonLink} >
            <span className={`callout`}>{buttonTitle}</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
          </Link>
          {button2Title ?
            <Link className="buttonSecondaryBackground" target="_top" href={button2Link ?? ''} >
              <span className={`callout`}>{button2Title}</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>
            : null}
        </div>
      </motion.div>
    </div>
  );
}
