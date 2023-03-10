import React from 'react';
import styles from './Contacts.module.css'
import styleContainer from '../common/Container.module.css'

const Contacts = () => {
    return (
        <div className={styles.contactsBlock}>
            <div className={`${styleContainer.container} ${styles.contactsContainer}`}>
                <h2 className={styles.title}>Contacts</h2>
                    <form className={styles.contactsForm}>
                        <input className={styles.contactsInput} type={"text"}/>
                        <input className={styles.contactsInput} type={"text"}/>
                        <textarea className={styles.contactTextArea} name={''} id={''} cols={30} rows={10}/>
                        <a className={styles.forSubmit} href={''}>Send</a>
                    </form>
            </div>
        </div>
    );
};

export default Contacts;