import React from 'react';
import styles from './header.module.scss'
import {NavLinks} from "../nav/nav";


export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.headerContainer}`}>
            <NavLinks/>
            </div>
        </header>
    );
};