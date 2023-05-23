import React from 'react';
import styles from './ProjectItem.module.scss'

type ProjectItemPropsType = {
    title:string
    description:string
    projectLink:string
    projectImg:string
}

const ProjectItem = (props:ProjectItemPropsType) => {
    return (
        <div className={styles.project}>
            <a className={styles.card} href={props.projectLink} target="_blank">
            <div className={styles.previevImage}>
                    <img src={props.projectImg} alt={props.title}/>
            </div>
            </a>
            <div className={styles.projectInfo}>
                <h3 className={styles.title}>{props.title}</h3>
                <span className={styles.description}>{props.description}</span>
            </div>
        </div>
    );
};

export default ProjectItem;



