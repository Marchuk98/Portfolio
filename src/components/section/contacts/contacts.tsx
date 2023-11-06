import React from 'react';
import s from './сontacts.module.scss'
import {ContactForm} from "./contact-form/contact-form";
import {ContactInfo} from "./contact-info/contact-info";
import {Title} from "../../ui/title/title";
import {contacts} from "./contact.data";

export const Contacts = () => {

    const mappedContact = contacts.map((contact, index) => {
        return (
            <ContactInfo key={index} title={contact.title} infoText={contact.infoText}
                         IconComponent={contact.IconComponent}/>
        )
    })

    return (
        <section id={'contact-me'} className={s.contactsBlock}>
            <div className={`container ${s.contactsContainer}`}>
                <Title>Contact Me</Title>
                <div className={s.contactsFormWrapper}>
                    <ul className={s.contactsInfoItem}>
                        {mappedContact}
                    </ul>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
};