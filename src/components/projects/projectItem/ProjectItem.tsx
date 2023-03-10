import React from 'react';
import styles from './ProjectItem.module.css'

type ProjectItemPropsType = {
    title:string
    description:string
}

const ProjectItem = (props:ProjectItemPropsType) => {
    return (
        <div className={styles.project}>
            <div className={styles.previevImage}>
                <a className={styles.projectButton} href={""}>To pass</a>
            </div>
            <div className={styles.textField}>
                <span className={styles.title}>{props.title}</span>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default ProjectItem;