import Header from "@/components/Header";
import React from "react";
import styles from "../../styles/contactUs.module.css";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
import Navbar from "@/components/Navbar";
import LinkCard from "@/components/LinkCard";
import Image from "next/image";

const CareersIndex = ({}) => {
  return (
    <div>
      <Navbar firstTitle="Home" firstLink="/" secondTitle="Careers" />
      <Header
        label="Careers"
        title="Join our dynamic team and work on exciting projects."
        subtitle="If you think you’re a good fit for our innovative team, we’d love to hear from you."
      />
      <div className={styles.contactUsWrapper}>
        <div className={`${styles.contactUsContainerMobile} mobile`}>
          <LinkCard
            title={"Let's get started"}
            description={
              "Looking to work with tech consultants who have expert development capabilities and creative design skills? We’re eager to connect with you."
            }
            buttonTitle={"Schedule a call"}
            buttonLink={"/contact/schedule-a-call"}
          />
          <LinkCard
            title={"Join our team"}
            description={
              "If you think you’re a good fit for our innovative team, we’d love to hear from you."
            }
            buttonTitle={"View job openings"}
            buttonLink={"/careers"}
            button2Title={"Learn more"}
          />
          <LinkCard
            title={"Press and media inquiries"}
            description={
              "For press information, including images, media, speaking engagements, questions, and articles."
            }
            buttonTitle={"Press inquiries"}
            buttonLink={"/contact/press-and-media"}
          />
          <LinkCard
            title={"General inquiries"}
            description={
              "For any support, introductions, general interest, getting started on a project, or any other inquiries."
            }
            buttonTitle={"Message us"}
            buttonLink={"/contact/message-us"}
          />
        </div>

        <div className={`${styles.contactUsContainerDesktop} desktop`}>
          <LinkCard
            title={"Let's get started"}
            description={
              "Looking to work with tech consultants who have expert development capabilities and creative design skills? We’re eager to connect with you."
            }
            buttonTitle={"Schedule a call"}
            buttonLink={"/contact/schedule-a-call"}
          />
          <LinkCard
            title={"Join our team"}
            description={
              "If you think you’re a good fit for our innovative team, we’d love to hear from you."
            }
            buttonTitle={"View job openings"}
            buttonLink={"/careers"}
          />
          <LinkCard
            title={"Press and media inquiries"}
            description={
              "For press information, including images, media, speaking engagements, questions, and articles."
            }
            buttonTitle={"Press inquiries"}
            buttonLink={"/contact/press-and-media"}
          />
          <LinkCard
            title={"General inquiries"}
            description={
              "For any support, introductions, general interest, getting started on a project, or any other inquiries."
            }
            buttonTitle={"Message us"}
            buttonLink={"/contact/message-us"}
          />
        </div>
      </div>
    </div>
  );
};

export default CareersIndex;
