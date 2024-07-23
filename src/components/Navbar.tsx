import React, { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

export default function Navbar({ firstTitle, firstLink, secondTitle, secondLink, thirdTitle, thirdLink }: { firstTitle: string, firstLink: string, secondTitle: string, secondLink?: string, thirdTitle?: string, thirdLink?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [reg, setReg] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > 208) {
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

  return (
    <>
      {firstLink ? (<div className={`headerblockBreadcrumbs`}></div>) :
        (<div className={`headerblock`}></div>)}
      <div className={`headerbar active${show} default${reg}`}>
        <div className={`${styles.wrapper}`}>
          <div className={styles.topWrapper}>
            <div className={styles.topContainer}>
              <Link href={"/"} target={"_top"} className={styles.titleDesktopWrapper}>
                <div className={styles.titleWrapper}>
                  <Image
                    src={`/logos/png/logo__side--white.png`}
                    alt="Vemara Solutions"
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </Link>
              <div className={styles.desktopMenuLinks}>
                <div className={"button textButtonDark"}>
                  <Link
                    href={"/work"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    Work
                  </Link>
                </div>
                <div className={"button textButtonDark"}>
                  <Link
                    href={"/services"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    Services
                  </Link>
                </div>
                <div className={"button textButtonDark"}>
                  <Link
                    href={"/about"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    About
                  </Link>
                </div>
                <div className={"button textButtonDark"}>
                  <Link
                    href={"/careers"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    Careers
                  </Link>
                </div>
                <div className={"button textButtonDark"}>
                  <Link
                    href={"/contact"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className={styles.desktopButtonLinks}>
                <div className={"button buttonSecondaryDark buttonSecondaryDarkSmall"}>
                  <div>Message us</div>
                </div>
                <div className={"button buttonPrimaryDark buttonPrimaryDarkSmall"}>
                  <div>Schedule a call</div>
                </div>
              </div>
              <div className={styles.menuOpen} onClick={handleMenu}>
                <Image
                  src={`/menu-icon.png`}
                  alt="Open"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
        </div >
        {firstLink && (
          <div className={`${styles.breadcrumbsWrapper} breadcrumbsCheck`}>
            <div className={styles.breadcrumbsContainer}>
              <Link href={firstLink} target="_top" className={styles.activeLink}>
                <div className="active">{firstTitle}</div>
              </Link>

              <Image src="/breadcrumbsChevron.svg" height={8.75} width={5.4} priority alt="" />
              {secondLink ? (
                <Link href={secondLink} target="_top" className={styles.activeLink}>
                  <div className="active">{secondTitle}</div>
                </Link>
              ) : (
                <div className={styles.inactiveLink}>
                  <div className="inactive">{secondTitle}</div>
                </div>
              )}

              {thirdTitle && (
                <>
                  <Image src="/breadcrumbsChevron.svg" height={8.75} width={5.4} priority alt="" />
                  <div className={styles.inactiveLink}>
                    <div className="inactive">{thirdTitle}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
