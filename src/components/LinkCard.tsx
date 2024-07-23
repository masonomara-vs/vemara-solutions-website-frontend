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
}: {
  title: string;
  description: string;
  buttonTitle: string;
  buttonLink: string;
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
        </div>
      </motion.div>
    </div>
  );
}
