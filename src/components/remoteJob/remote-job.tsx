import React from 'react';
import styleContainer from '../common/styles/Container.module.css'
import {Button} from "../button/button";
import s from './remote-job.module.scss'

export const RemoteJob = () => {
    return (
        <section id={'remote-work'} className={s.remoteJobBlock}>
            <div className={`${styleContainer.container} ${s.remoteJobContainer}`}>
                <div className={s.remote}>
                    <h2 className={s.title}>Looking at options for remote work</h2>
                    <Button className={s.remoteBtn}>Start with me</Button>
                </div>
            </div>
        </section>
    );
};

