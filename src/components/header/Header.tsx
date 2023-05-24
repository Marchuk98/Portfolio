import React from 'react';
import styles from './Header.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {NavLinks} from "../nav/Nav";





const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
            <NavLinks/>
            </div>
        </div>
    );
};

export default Header;