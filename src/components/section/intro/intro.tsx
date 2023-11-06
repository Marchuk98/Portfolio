import React, {useEffect, useRef} from 'react';
import s from './intro.module.scss';
import Typed from 'typed.js';
import mySelf from '../../../assets//image/myPhoto.png'
import {FaJs, FaReact} from 'react-icons/fa';
import {SiRedux, SiTypescript} from "react-icons/si";

export const Intro = () => {
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
        <section id="home" className={s.mainBlock}>
            <div className={s.mainWrapper}>
                <div className={`container ${s.container} `}>
                    <div className={s.mainWrapperBlock}>
                        <div className={s.mainWrapperText}>
                            <span className={s.mainGeneralTitle}>Hi There, I am</span>
                            <h1 className={s.mainNameTitle}>Vladimir Marchuk</h1>
                            <div className={s.mainDynamicPrint}>
                                <span className={s.mainPrefixText}>
                                    A <span ref={type}></span>
                                </span>
                            </div>
                            <p className={s.mainDescriptionText}>
                                I'm a frontend developer based in Belarus, and I'm very passionate and dedicated to my
                                work.
                            </p>
                        </div>
                    </div>

                    <div className={s.mainPhoto}>
                        <div className={s.icons}>
                            <FaReact className={s.icon} color="#61dafb" />
                            <SiRedux className={s.icon} color="#764abc" />
                            <SiTypescript className={s.icon} color="#007acc" />
                            <FaJs className={s.icon} color="#f7df1e" />
                        </div>
                        <img className={s.photo} src={mySelf} alt="Your Photo" />
                    </div>

                </div>
            </div>
        </section>
    );
};
