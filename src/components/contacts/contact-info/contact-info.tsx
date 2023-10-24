import React from 'react';
import styles from './contact-info.module.scss'

type ContactInfoPropsType = {
    title: string
    infoText: string
    IconComponent: React.FC
}


export const ContactInfo: React.FC<ContactInfoPropsType> = ({title, infoText, IconComponent}) => {
    return (
        <div className={styles.contactInfoWrapper}>
            <div className={styles.contactInfoIcon}>
                <IconComponent />
            </div>
            <div className={styles.contactInfo}>
                <span className={styles.contactInfoTitle}>{title}</span>
                <span className={styles.contactInfoText}>{infoText}</span>
            </div>
        </div>
    );
};
