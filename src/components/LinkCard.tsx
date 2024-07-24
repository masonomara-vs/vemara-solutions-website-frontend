import React from "react";
import styles from "../styles/LinkCard.module.css";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "@/pages/utils/motion";

export default function LinkCard({
  title,
  description,
  buttonTitle,
  buttonLink,
  button2Title,
  button2Link
}: {
  title: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
  button2Title?: string;
  button2Link?: string;
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
          <h2>{title}</h2>
          <div className={styles.linkDescription}>{description}</div>
          <div className={styles.linkAction}>
            <Link href={buttonLink} target={"_top"}>
              {buttonTitle} -&gt;
            </Link>
          </div>
          {button2Title ? 
          <div className={styles.link2Action}>
          <Link href={button2Link ?? ''} target={"_top"}>
            {button2Title} -&gt;
          </Link>
        </div>
        : null}
        </div>
      </motion.div>
    </div>
  );
}
