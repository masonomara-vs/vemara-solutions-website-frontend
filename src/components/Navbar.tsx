import { useState, useEffect } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";
import Image from "next/image";



export default function Navbar({ firstTitle, firstLink, secondTitle, secondLink, thirdTitle, thirdLink }: { firstTitle?: string, firstLink?: string, secondTitle?: string, secondLink?: string, thirdTitle?: string, thirdLink?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [reg, setReg] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [servicesDropdownOpen, setServicesMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutMenuOpen] = useState(false);
  const [contactDropdownOpen, setContactMenuOpen] = useState(false);
  const [servicesMobileDropdownOpen, setServicesMobileMenuOpen] = useState(false);
  const [aboutMobileDropdownOpen, setAboutMobileMenuOpen] = useState(false);
  const [contactMobileDropdownOpen, setContactMobileMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY < 0) {
        setShow(true);
        return;
      }

      if (window.scrollY > 208) {
        setReg(false);
      } else {
        setReg(true);
      }

      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    };

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
      <div className={`${styles.mobileMenuWrapper} ${mobileMenuOpen ? styles.mobileMenuWrapperOpen : ''}`}>
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


            <div className={styles.menuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <Image
                src={`/close-icon.png`}
                alt="Open"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
        <div className={styles.mobileMenuContainer}>

          <div className={styles.mobileLinkWrapper}>
            <Link href={"/"} target={"_top"} className={`${styles.mobileLinkButton} buttonTextBackground`}>
              <span className="callout">Home</span>
            </Link>
            <Link href={"/work"} target={"_top"} className={`${styles.mobileLinkButton} buttonTextBackground`}>
              <span className="callout">Work</span>
            </Link>
            <div onClick={() => setServicesMobileMenuOpen(!servicesMobileDropdownOpen)} className={`${styles.mobileLinkButton} buttonTextBackground`}>
              <span className="callout">Services</span>
              <Image src="/breadcrumbsChevronBackground.svg" height={11.6375} width={7.182} priority alt="" className={styles.mobileLinkChevron} style={{ transform: servicesMobileDropdownOpen ? "rotate(-90deg)" : "rotate(90deg)" }} />
            </div>
            <div className={`${styles.mobileLinkSubwrapper} ${servicesMobileDropdownOpen ? styles.mobileLinkSubwrapperOpenServices : ''}`} >
              <Link href={"/services/"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Services overview</div>
              </Link>
              <Link href={"/services/solutions"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Solutions</div>
              </Link>
              <Link href={"/services/technology"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Technology</div>
              </Link>
              <Link href={"/services/contexts"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Contexts</div>
              </Link>
            </div>
            <div onClick={() => setAboutMobileMenuOpen(!aboutMobileDropdownOpen)} className={`${styles.mobileLinkButton} buttonTextBackground`}>
              <span className="callout">About</span>
              <Image src="/breadcrumbsChevronBackground.svg" height={11.6375} width={7.182} priority alt="" className={styles.mobileLinkChevron} style={{ transform: aboutMobileDropdownOpen ? "rotate(-90deg)" : "rotate(90deg)" }}
              />
            </div>
            <div className={`${styles.mobileLinkSubwrapper} ${aboutMobileDropdownOpen ? styles.mobileLinkSubwrapperOpenAbout : ''}`}>
              <Link href={"/about"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>About overview</div>
              </Link>
              <Link href={"/about/about-us"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>About us</div>
              </Link>
              <Link href={"/about/leadership-team"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Leadership team</div>
              </Link>

            </div>
            <Link href={"/careers"} target={"_top"} className={`${styles.mobileLinkButton} buttonTextBackground`}>
              <span className="callout">Careers</span>
            </Link>
            <div onClick={() => setContactMobileMenuOpen(!contactMobileDropdownOpen)} className={`${styles.mobileLinkButton} buttonTextBackground`}>
              <span className="callout">Contact</span>
              <Image src="/breadcrumbsChevronBackground.svg" height={11.6375} width={7.182} priority alt="" className={styles.mobileLinkChevron} style={{ transform: contactMobileDropdownOpen ? "rotate(-90deg)" : "rotate(90deg)" }} />
            </div>
            <div className={`${styles.mobileLinkSubwrapper} ${contactMobileDropdownOpen ? styles.mobileLinkSubwrapperOpenContact : ''}`}>
              <Link href={"/contact/"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Contact us</div>
              </Link>
              <Link href={"/contact/schedule-a-call"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Schedule a call</div>
              </Link>
              <Link href={"/contact/job-application"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Apply for a job</div>
              </Link>
              <Link href={"/contact/press-and-media"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Press & media</div>
              </Link>
              <Link href={"/contact/message-us"}
                target={"_top"} className={styles.mobileSublink}>
                <div className={` callout`}>Message us</div>
              </Link>
            </div>
          </div>
          <div className={styles.ctaButtonsWrapper}>

            <Link className="buttonPrimaryForeground" target="_top" href={`/contact/schedule-a-call`} >
              <span className={`callout`}>Schedule a call</span><Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt=""></Image>
            </Link>


            <Link className="buttonSecondaryForeground" target="_top" href={`/contact/message-us`} >
              <span className={`callout`}>Message us</span><Image height={12.87} width={12.87} src="/clientActionArrowWhite.svg" priority alt=""></Image>
            </Link>

          </div>
          <div className={styles.policyLinkWrapper}>
            {/* <div className={styles.policyLinkRow}>
              <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                <span className="active">Privacy Policy</span>
              </Link>
              <div className={styles.policyDivider} />
              <Link href={"/contact"} target={"_top"} className="buttonTextBackground">
                <span className="active">Sitemap</span>
              </Link>
            </div> */}
            <div className="description" style={{ color: "rgba(255,255,255,.6)", fontWeight: 600, marginBottom: 5 }}>
              2024 Vemara Solutions. All Rights Reserved.
            </div>
            <div className="description" style={{ color: "rgba(255,255,255,.6)", fontWeight: 400 }}>
              Formerly Open Source Solutions
            </div>
          </div>
        </div>
      </div>
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
                <div className={"buttonTextBackground"} style={{ fontSize: 15, paddingLeft: 8, paddingRight: 8 }}>
                  <Link
                    href={"/work"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    <span>Work</span>
                  </Link>
                </div>
                <div className={"buttonTextBackground"} style={{ fontSize: 15, paddingLeft: 8, paddingRight: 3 }} onMouseOver={() => setServicesMenuOpen(true)} onMouseLeave={() => setServicesMenuOpen(false)}>
                  <Link
                    href={"/services"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    <span>Services</span>
                  </Link>
                  <Image src="/breadcrumbsChevronBackground.svg" height={8.75} width={5.4} priority alt="" style={{ rotate: "90deg" }} />
                  <div className={`${styles.dropdownWrapper} ${servicesDropdownOpen ? styles.dropdownWrapperOpen : ''}`}>
                    <div className={styles.dropdownContainer}>


                      <Link href={"/services"}
                        target={"_top"} className={`${styles.linkHoverEffect}, ${styles.linkHoverEffectMain}`}>
                        <div className={`${styles.dropdownTitleDiv} callout`} style={{ marginBottom: 5 }}>Services overview<Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt="" style={{ opacity: 1 }}></Image></div>
                        <div className="fieldlabel" style={{ fontWeight: 400, lineHeight: "145%" }}>Working within a variety of business contexts for your needs.</div>
                      </Link>
                      <div className={styles.verticalDivider} />
                      <div className={styles.dropdownMiniMenu}>
                        <Link href={"/services/solutions"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Solutions</div>
                        </Link>
                        <Link href={"/services/technology"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Technology</div>
                        </Link>
                        <Link href={"/services/contexts"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Contexts</div>
                        </Link>

                      </div>
                    </div>
                  </div>
                </div>
                <div className={"buttonTextBackground"} style={{ fontSize: 15, paddingLeft: 8, paddingRight: 3 }} onMouseOver={() => setAboutMenuOpen(true)} onMouseLeave={() => setAboutMenuOpen(false)}>
                  <Link
                    href={"/about"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    <span>About</span>
                  </Link>
                  <Image src="/breadcrumbsChevronBackground.svg" height={8.75} width={5.4} priority alt="" style={{ rotate: "90deg" }} />
                  <div className={`${styles.dropdownWrapper} ${aboutDropdownOpen ? styles.dropdownWrapperOpen : ''}`}>
                    <div className={styles.dropdownContainer}>


                      <Link href={"/about"}
                        target={"_top"} className={`${styles.linkHoverEffect}, ${styles.linkHoverEffectMain}`}>
                        <div className={`${styles.dropdownTitleDiv} callout`} style={{ marginBottom: 5 }}>About overview<Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt="" style={{ opacity: 1 }}></Image></div>
                        <div className="fieldlabel" style={{ fontWeight: 400, lineHeight: "145%" }}>Working within a variety of business contexts for your needs.</div>
                      </Link>
                      <div className={styles.verticalDivider} style={{ height: 105 }} />
                      <div className={styles.dropdownMiniMenu}>
                        <Link href={"/about/about-us"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>About us</div>
                        </Link>
                        <Link href={"/about/leadership-team"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Leadership team</div>
                        </Link>

                      </div>
                    </div>
                  </div>

                </div>
                <div className={"buttonTextBackground"} style={{ fontSize: 15, paddingLeft: 8, paddingRight: 8 }}>
                  <Link
                    href={"/careers"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    <span>Careers</span>
                  </Link>
                </div>
                <div className={"buttonTextBackground"} style={{ fontSize: 15, paddingLeft: 8, paddingRight: 3 }} onMouseOver={() => setContactMenuOpen(true)} onMouseLeave={() => setContactMenuOpen(false)}>
                  <Link
                    href={"/contact"}
                    target={"_top"}
                    className={styles.clientsWrapper}
                  >
                    <span>Contact</span>
                  </Link>
                  <Image src="/breadcrumbsChevronBackground.svg" height={8.75} width={5.4} priority alt="" style={{ rotate: "90deg" }} />
                  <div className={`${styles.dropdownWrapper} ${contactDropdownOpen ? styles.dropdownWrapperOpen : ''}`}>
                    <div className={styles.dropdownContainer}>


                      <Link href={"/contact"}
                        target={"_top"} className={`${styles.linkHoverEffect}, ${styles.linkHoverEffectMain}`}>
                        <div className={`${styles.dropdownTitleDiv} callout`} style={{ marginBottom: 5 }}>Contact Us<Image height={12.87} width={12.87} src="/clientActionArrowBlack.svg" priority alt="" style={{ opacity: 1 }}></Image></div>
                        <div className="fieldlabel" style={{ fontWeight: 400, lineHeight: "145%" }}>We like to partner with businesses driving their goals forward.</div>
                      </Link>
                      <div className={styles.verticalDivider} style={{ height: 152 }} />
                      <div className={styles.dropdownMiniMenu}>
                        <Link href={"/contact/schedule-a-call"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Schedule a call</div>
                        </Link>
                        <Link href={"/contact/job-application"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`} >Apply for a job</div>
                        </Link>
                        <Link href={"/contact/press-and-media"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Press & media</div>
                        </Link>
                        <Link href={"/contact/message-us"}
                          target={"_top"} className={styles.linkHoverEffect}>
                          <div className={`${styles.dropdownTitleDiv} callout`}>Message us</div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <div className={styles.desktopButtonLinks}>
                <Link className="buttonSecondaryForeground" target="_top" href={`/contact/message-us`} style={{ paddingTop: 10, paddingBottom: 10, borderRadius: 17.6 }}>
                  <span className={`callout`} style={{ fontSize: 15 }}>Message us</span><Image height={11.29} width={11.29} src="/clientActionArrowWhite.svg" priority alt=""></Image>
                </Link>
                <Link className="buttonPrimaryForeground" target="_top" href={`/contact/schedule-a-call`} style={{ paddingTop: 10, paddingBottom: 10, borderRadius: 17.6 }} >
                  <span className={`callout`} style={{ fontSize: 15 }}>Schedule a call</span><Image height={11.29} width={11.29} src="/clientActionArrowBlack.svg" priority alt=""></Image>
                </Link>
              </div>
              <div className={styles.menuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
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

              <Image src="/breadcrumbsChevronForeground.svg" height={8.75} width={5.4} priority alt="" />
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
                  <Image src="/breadcrumbsChevronForeground.svg" height={8.75} width={5.4} priority alt="" />
                  <div className={styles.inactiveLink}>
                    <div className="inactive">{thirdTitle}</div>
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div >
    </>
  );
}
