import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { useRef, FormEvent } from "react";


export default function Footer() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const subscribeUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (inputRef.current && inputRef.current.value) {
      const res = await fetch("/api/subscribeUser", {
        body: JSON.stringify({
          email: inputRef.current.value,
        }),

        headers: {
          "Content-Type": "application/json",
        },

        method: "POST",
      });

      if (res.ok) {
        console.log("User subscribed successfully.");
      } else {
        console.error("Failed to subscribe user.");
      }
    } else {
      console.error("Email input is not available or empty.");
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.ctaContainer}>
          <div className={styles.imageCalloutContainer}>
            <Image
              src="/jump.gif"
              alt="Vemara Solutions"
              fill
              style={{ objectFit: "cover" }} />
          </div>
          <span className="header" style={{ color: "white" }}>
            We're excited to see what comes next.
          </span>
          <div className={styles.ctaButtonsWrapper}>

            <Link className="buttonPrimaryForeground" target="_top" href={`/contact`} >
              <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt=""></Image>
            </Link>


            <Link className="buttonSecondaryForeground" target="_top" href={`/contact`} >
              <span className={`callout`}>Explore jobs</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>

          </div>
        </div>

        <div className={styles.desktopFooterWrapper}>


          <div className={styles.menuContainer}>
            <div className={styles.logoContainer}>
              <Image
                src="/logos/png/logo--white.png"
                alt="Vemara Solutions"
                fill
                style={{ objectFit: "cover" }} />
            </div>
            <span className="label" style={{ color: "white" }}>Discover Vemara Solutions</span>
            <div className={styles.menuLinkWrapper}>
              <Link href={"/home"} target={"_top"} className="buttonTextBackground">
                <span className="callout">Home</span>
              </Link>
              <Link href={"/work"} target={"_top"} className="buttonTextBackground">
                <span className="callout">Work</span>
              </Link>
              <Link href={"/services"} target={"_top"} className="buttonTextBackground">
                <span className="callout">Services</span>
              </Link>
              <Link href={"/about"} target={"_top"} className="buttonTextBackground">
                <span className="callout">About</span>
              </Link>
              <Link href={"/careers"} target={"_top"} className="buttonTextBackground">
                <span className="callout">Careers</span>
              </Link>
              <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                <span className="callout">Contact</span>
              </Link>
            </div>

            <div className={styles.policyLinkWrapper}>
              <div className={styles.policyLinkRow}>
                <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                  <span className="active">Privacy Policy</span>
                </Link>
                <div className={styles.policyDivider} />
                <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                  <span className="active">Sitemap</span>
                </Link>
              </div>
              <div className="description" style={{ color: "rgba(255,255,255,.6)" }}>
                2024 Vemara Solutions. All Rights Reserved.
              </div>
            </div>

          </div>

          <div className={styles.emailContainer}>
            <span className="label" style={{ color: 'rgba(255,255,255)' }}>
              Stay updated with our quarterly newsletter: insights from tech experts on scaling and innovation.
            </span>
            <form className={styles.emailInputContainer} onSubmit={subscribeUser}>
              <label className="inactive" htmlFor='email-input' style={{ color: "white" }}>Your email:</label>
              <input ref={inputRef} type="email" id="emailSignup" name="emailSignup" className="inputBackground" placeholder="Your best email, please" />
              <button className="buttonPrimaryForeground" type='submit' style={{ marginTop: 24 }}>
                <span className={`callout`}>Subscribe</span>
                <Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt="" ></Image>
              </button>
            </form>
          </div>
          <div className={styles.contactUsContainer}>
            <span className="label" style={{ color: "white" }}>
              Contact us
            </span>
            <div className={styles.contactUsButtonsWrapper}>

              <Link className="buttonPrimaryForeground" target="_top" href={`/contact`} >
                <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt=""></Image>
              </Link>

              <Link className="buttonSecondaryForeground" target="_top" href={`/contact`} >
                <span className={`callout`}>Message us</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
              </Link>

            </div>
            <Link
              target="_top"
              href={`tel:7324554515`}
              className={styles.telephoneButton}
            >
              <Image
                height={14.63}
                width={14.63}
                src="/logos/png/phone.png"
                priority
                alt=""
              ></Image>
              <span className="active" style={{ color: "white" }}> (732) 455-4515</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
