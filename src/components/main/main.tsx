import React, {useEffect, useRef} from 'react';
import styles from './main.module.scss';
import styleContainer from '../common/styles/Container.module.css';
import Typed from 'typed.js';
import mySelf from '../assets/image/myPhoto.png'
import { FaJs, FaReact } from 'react-icons/fa';
import {SiRedux, SiTypescript} from "react-icons/si";

export const Main = () => {
    const type = useRef(null);

    useEffect(() => {
        const typed = new Typed(type.current, {
            strings: ['Frontend Developer'],
            typeSpeed: 90,
            loop: true,
            backSpeed: 50,
            startDelay: 800,
            backDelay: 800
        });
        return () => {
            typed.destroy();
        };
    }, []);

    return (
        <div id="home" className={styles.mainBlock}>
            <div className={styles.mainWrapper}>
                <div className={styleContainer.container}>
                    <div className={styles.mainWrapperBlock}>
                        <div className={styles.mainWrapperText}>
                            <span className={styles.mainGeneralTitle}>Hi There, I am</span>
                            <h1 className={styles.mainNameTitle}>Vladimir Marchuk</h1>
                            <div className={styles.mainDynamicPrint}>
                                <span className={styles.mainPrefixText}>
                                    A <span ref={type}></span>
                                </span>
                            </div>
                            <p className={styles.mainDescriptionText}>
                                I'm a frontend developer based in Belarus, and I'm very passionate and dedicated to my
                                work.
                            </p>
                        </div>
                    </div>
                    <div className={styles.mainPhoto}>
                        <div className={styles.icons}>
                            <FaReact className={styles.icon} color="#61dafb" />
                            <SiRedux className={styles.icon} color="#764abc" />
                            <SiTypescript className={styles.icon} color="#007acc" />
                            <FaJs className={styles.icon} color="#f7df1e" />
                        </div>
                        <img className={styles.photo} src={mySelf} alt="Your Photo" />
                    </div>
                </div>
            </div>
        </div>
    );
};
