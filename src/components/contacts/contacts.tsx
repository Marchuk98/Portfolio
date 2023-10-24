import React from 'react';
import styles from './сontacts.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import { ContactForm } from "./contact-form/contact-form";
import {ContactInfo} from "./contact-info/contact-info";
import {Typography} from "../typography/typography";
import {contacts} from "./contact.data";

export const Contacts = () => {

    const mapperdContact = contacts.map((contact, index) => {
        return (
            <ContactInfo key={index} title={contact.title} infoText={contact.infoText}
                         IconComponent={contact.IconComponent}/>
        )
    })

    return (
        <section id={'contact-me'} className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <Typography>Contact Me</Typography>
                <div className={styles.contactsFormWrapper}>
                    <ul className={styles.contactsInfoItem}>
                        {mapperdContact}
                    </ul>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};