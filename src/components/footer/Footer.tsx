import React from 'react';
import styles from './Footer.module.css'
import styleContainer from '../common/Container.module.css'

const Footer = () => {
    return (
        <div className={styles.footerBlock}>
            <div className={`${styleContainer.container} ${styles.footerContainer}`}>
                    <span className={styles.text}>Vladimir Marchuk</span>
                <div className={styles.footerItem}>
                        <a href={"#"}>1</a>
                        <a href={"#"}>2</a>
                        <a href={"#"}>3</a>
                        <a href={"#"}>4</a>
                </div>
                    <span className={styles.footerPrivacy}>&#169; 2023 All rights reserved</span>
            </div>
        </div>
    );
};

export default Footer;