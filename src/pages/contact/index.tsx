import Header from "@/components/Header";
import styles from "../../styles/contactUs.module.css";
import Navbar from "@/components/Navbar";
import LinkCard from "@/components/LinkCard";
import Image from "next/image";

const ContactIndex = ({}) => {
  return (
    <div>
      <Navbar firstTitle="Home" firstLink="/" secondTitle="Contact Us" />
      <Header
        label="Contact Us"
        title="We're excited to see what comes next."
        subtitle="We like to partner with businesses that are leading innovative initiatives and using industry-leading technology to drive their goals forward."
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
        <div className={styles.officesWrapper}>
          <h1>Vemara Solutions Offices</h1>
          <div className={styles.officeImage}>
            <Image
            //cant get this working
              src={`/logo.png`}
              alt="Vemara Solutions"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          <h1>Asbury Park, NJ</h1>
          <div className={styles.timeWrapper}>
            <h1>Time</h1>
            <h1>.</h1>
            <h1>Open</h1>
          </div>
          <div className={styles.addressText}>
            1301 Corlies Ave, Neptune City NJ 07712
          </div>
          <div className={styles.addressText}>(732) 455-4515</div>
        </div>
      </div>
    </div>
  );
};

export default ContactIndex;
