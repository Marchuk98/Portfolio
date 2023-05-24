import React from 'react';
import styles from './ContactForm.module.css'

export const ContactForm = () => {
    return (
        <div>
            <form className={styles.contacts_form} action="">
                <div className={styles.contacts_input_block}>
                    <input className={styles.contacts_input} placeholder={'Name*'} type="text"/>
                    <input className={styles.contacts_input} placeholder={'Email*'} type="text"/>
                </div>
                <textarea className={styles.contacts_textarea} placeholder={'Your message here*'} name=""></textarea>
                <button type={'submit'} className={styles.main_btn} >
                    Send Message
                </button>
            </form>
        </div>
    );
};

export default ContactForm;