import React from 'react';
import styles from "./nav.module.scss";
import { Link } from "react-scroll";

export const NavLinks = () => {
    return (
        <ul className={styles.nav}>
            <li>
                <Link
                    to="home"
                    spy={true}
                    smooth={true}
                    duration={450}
                    className={`${styles.navLinkItem} ${styles.active}`}
                >
                    Home
                </Link>
            </li>
            <li>
                <Link
                    to="skills"
                    spy={true}
                    smooth={true}
                    duration={450}
                    offset={-70}
                    className={styles.navLinkItem}
                >
                    Skills
                </Link>
            </li>
            <li>
                <Link
                    to="my-projects"
                    spy={true}
                    smooth={true}
                    duration={450}
                    offset={-70}
                    className={styles.navLinkItem}
                >
                   projects
                </Link>
            </li>
            <li>
                <Link
                    to="remote-work"
                    spy={true}
                    smooth={true}
                    duration={450}
                    offset={-80}
                    className={styles.navLinkItem}
                >
                    Remote
                </Link>
            </li>
            <li>
                <Link
                    to="contact-me"
                    spy={true}
                    smooth={true}
                    duration={450}
                    className={styles.navLinkItem}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
};