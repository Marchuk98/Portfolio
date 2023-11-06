import React from 'react';
import s from './footer.module.scss'
import {footer} from "./footer.data";

export const Footer = () => {
    return (
        <footer className={s.footerBlock}>
            <div className={`container ${s.footerContainer}`}>
                    <span className={s.text}>Vladimir Marchuk</span>
                <ul className={s.footerList}>
                    {footer.map(({id, Icon, link,prefix})=>{
                        return (
                            <li key={id} className={s.footerItem}>
                                <a rel='noreferrer' target={'_blank'} href={link}>
                                    <Icon className={`${s[`${prefix}`]}`} size={50} />
                                </a>
                            </li>
                        )
                    })}
                </ul>
                    <span className={s.footerPrivacy}>&#169; {new Date().getFullYear()} All rights reserved</span>
            </div>
        </footer>
    );
};

