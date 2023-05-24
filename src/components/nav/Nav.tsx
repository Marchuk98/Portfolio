import React from 'react';
import styles from "./Nav.module.css";
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
                    className={styles.navlinkItem}
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
                    className={styles.navlinkItem}
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
                    className={styles.navlinkItem}
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
                    className={styles.navlinkItem}
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
                    className={styles.navlinkItem}
                >
                    Contact
                </Link>
            </li>
        </ul>
    );
};