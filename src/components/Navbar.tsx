import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [reg, setReg] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 48) {
      setReg(false);
    }

    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const pauseMenu = () => {
    setMenuOpen(true);
  };

  return (
    <>
      <div className={`headerblock active${show} default${reg}`}>{""}</div>
      <div className={`${styles.wrapper} header active${show} default${reg}`}>
        <div className={styles.topWrapper}>
          <div className={styles.topContainer}>
            <div className={styles.menuOpen} onClick={handleMenu}>
              <Image src={`/menu-icon.png`}
                alt="Open"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <div className={styles.titleDesktopWrapper}>
              <Link href={"/"} target={"_top"} className={styles.titleWrapper}>
                <Image src={`/logos/png/logo__side--white.png`}
                  alt="Vemara Solutions"
                  fill
                  style={{ objectFit: 'contain' }} />
              </Link>
            </div>
            <div className={styles.desktopMenuLinks}>
              <Link className={"button textButtonDark"} href={'/work'} target={"_top"} >
                Work
              </Link>
              <div className={"button textButtonDark"}>
                Services
              </div>
              <div className={"button textButtonDark"}>
                About
              </div>
              <div className={"button textButtonDark"}>
                Careers
              </div>
              <div className={"button textButtonDark"}>
                Contact
              </div>
            </div>
            <div className={styles.desktopButtonLinks}>
              <div className={"button buttonSecondaryDark buttonSecondaryDarkSmall"} >
                <div>
                  Message us
                </div>
              </div>
              <div className={"button buttonPrimaryDark buttonPrimaryDarkSmall"}>
                <div>
                  Schedule a call
                </div>

              </div>

            </div>
            <div className={`${styles.menuOpen} ${styles.menuFiller}`} onClick={handleMenu}>
              <Image src={`/menu-icon.png`}
                alt="Open"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
        <div className={styles.mobileButtonsWrapper}>
          <div className={"button buttonSecondaryDark buttonSecondaryDarkSmall"} style={{ maxWidth: 'none' }}>
            <div>
              Message us
            </div>
          </div>
          <div className={"button buttonPrimaryDark buttonPrimaryDarkSmall"} style={{ maxWidth: 'none' }}>
            <div>
              Schedule a call
            </div>
          </div>
        </div>
      </div>

    </>
  );
}