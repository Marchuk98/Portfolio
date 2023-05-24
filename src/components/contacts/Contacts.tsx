import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/styles/Container.module.css'
import ContactForm from "./ContactForm/ContactForm";
import {ContactInfo} from "./ContactInfo/ContactInfo";
import {faLocationDot} from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {faPhone} from "@fortawesome/free-solid-svg-icons/faPhone";
import {faAt} from "@fortawesome/free-solid-svg-icons/faAt";
import Title from "../../features/title/Title";

const Contacts = () => {

    const infoItemsArray = [
        {title: 'Address', infoText: 'Brest, Belarus', icon: faLocationDot },
        {title: 'Phone', infoText: '+375 (29) 826-76-10', icon: faPhone },
        {title: 'Email', infoText: 'vladimir.fmr98@gmail.com', icon: faAt },
    ]

    const infoItems = infoItemsArray.map((el,index)=> {
        return (
            <ContactInfo key={index} title={el.title} infoText={el.infoText} icon={el.icon}/>
        )
    })

    return (
        <div id={'contact-me'} className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Title text={'Contact Me'} description={'Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday'}/>
                <div className={styles.contactsFormWrapper}>
                    <div className={styles.contactsInfoItem}>
                        {infoItems}
                    </div>
                    <ContactForm/>
                </div>
            </div>
        </div>
    );
};

export default Contacts;