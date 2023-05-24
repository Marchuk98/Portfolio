import React from 'react';
import styles from './ContactInfo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {IconDefinition} from "@fortawesome/free-brands-svg-icons";

type ContactInfoPropsType = {
    title:string
    infoText:string
    icon:IconDefinition
}


export const ContactInfo:React.FC<ContactInfoPropsType> = ({title,infoText,icon}) => {
    return (
        <div className={styles.contactInfoWrapper}>
            <div className={styles.contactInfoIcon}>
                <FontAwesomeIcon icon={icon} style={{color: "#ffffff",}} />
            </div>
            <div className={styles.contactInfo}>
                <span className={styles.contactInfoTitle}>{title}</span>
                <span className={styles.contactInfoText}>{infoText}</span>
            </div>
        </div>
    );
};
