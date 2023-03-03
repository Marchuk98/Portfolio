import React from 'react';
import styles from './Header.module.css'
import styleContainer from '../common/Container.module.css'
import Nav from "../nav/Nav";


const Header = () => {
    return (
        <div className={styles.header}>
            <div className={`${styleContainer.container} ${styles.headerContainer}`}>
            <Nav/>
            </div>
        </div>
    );
};

export default Header;