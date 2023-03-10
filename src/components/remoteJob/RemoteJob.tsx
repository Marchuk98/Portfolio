import React from 'react';
import styles from './RemoteJob.module.css'
import styleContainer from '../common/Container.module.css'

const RemoteJob = () => {
    return (
        <div className={styles.remoteJobBlock}>
            <div className={`${styleContainer.container} ${styles.remoteJobContainer}`}>
                <div className={styles.remote}>
                    <h2 className={styles.title}>Looking at options for remote work</h2>
                    <a className={styles.remoteButton} href={''}>Start with me</a>
                </div>
            </div>
        </div>
    );
};

export default RemoteJob;