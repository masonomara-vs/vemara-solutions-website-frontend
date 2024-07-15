"use client";

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
        {/* <div
          className={
            menuOpen == true ? styles.fullMenuOpen : styles.fullMenuClosed
          }
        >
          <div
            className={menuOpen == true ? styles.closeMenu : styles.hidden}
            onClick={handleMenu}
          />
          <div
            className={
              menuOpen == true
                ? styles.fullMenuWrapperOpen
                : styles.fullMenuWrapperClosed
            }
          >
            <div className={styles.fullMenuTop}>
              <div className={styles.fullMenuHeader}>
                <Link
                  href={"/"}
                  target={"_top"}
                  className={styles.titleWrapper}
                >
                  <Image src={`/logos/png/icon.png`}
                    alt="Vemara Solutions"
                    fill
                    objectFit='contain' />
                </Link>

                <div className={styles.menuOpen} onClick={handleMenu}>
                  <span className={styles.fullMenuClose}>Close</span>
                </div>
              </div>
              <Link
                className={styles.fullMenuItem}
                href={"/portfolio"}
                target={"_top"}
              >
                <span className="titleSmall">Portfolio</span>
                <span className={styles.fullMenuItemDescription}>
                  Explore Selected Work
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/services"}
                target={"_top"}
              >
                <span className="titleSmall">Services</span>
                <span className={styles.fullMenuItemDescription}>
                  Flexible and Scalable Solutions
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/about"}
                target={"_top"}
              >
                <span className="titleSmall">About</span>
                <span className={styles.fullMenuItemDescription}>
                  Building Digital Presences
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/blog"}
                target={"_top"}
              >
                <span className="titleSmall">Blog</span>
                <span className={styles.fullMenuItemDescription}>
                  Insights and Advice
                </span>
              </Link>
              <Link
                className={styles.fullMenuItem}
                href={"/contact"}
                target={"_top"}
              >
                <span className="titleSmall">Contact</span>
                <span className={styles.fullMenuItemDescription}>
                  New Business and Inquiries
                </span>
              </Link>
            </div>
          </div>
        </div> */}

        <div className={styles.topWrapper}>
          <div className={styles.topContainer}>
            <div className={styles.menuOpen} onClick={handleMenu}>
              <Image src={`/menu-icon.png`}
                alt="Open"
                fill
                objectFit='contain'
              />
            </div>
            <div className={styles.titleDesktopWrapper}>


              <Link href={"/"} target={"_top"} className={styles.titleWrapper}>
                <Image src={`/logos/png/logo__side--white.png`}
                  alt="Vemara Solutions"
                  fill
                  objectFit='contain' />
              </Link>
            </div>
            <div className={styles.desktopMenuLinks}>
              <div className={"button textButtonDark"}>
                Work
              </div>
              <div className={"button textButtonDark"}>
                Solutions
              </div>
              <div className={"button textButtonDark"}>
                About
              </div>
              <div className={"button textButtonDark"}>
                Careers
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
                objectFit='contain'
              />
            </div>


            {/* <div className={styles.menuDesktop}>
            <Link
              className={styles.menuButton}
              href={"/portfolio"}
              target={"_top"}
            >
              <span className={styles.menuText}>Portfolio</span>
            </Link>
            <Link
              className={styles.menuButton}
              href={"/services"}
              target={"_top"}
            >
              <span className={styles.menuText}>Services</span>
            </Link>
            <Link className={styles.menuButton} href={"/about"} target={"_top"}>
              <span className={styles.menuText}>About</span>
            </Link>
            <Link className={styles.menuButton} href={"/blog"} target={"_top"}>
              <span className={styles.menuText}>Blog</span>
            </Link>
            <Link
              className={styles.menuButton}
              href={"/contact"}
              target={"_top"}
            >
              <span className={styles.menuText}>Contact</span>
            </Link>
          </div> */}
            {/* <Link className={styles.cta} target="_top" href="/contact">
            <span className={styles.ctaText}>Get Started</span>
          </Link> */}
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
