import React from 'react';
import s from './project-item.module.scss'
import {Button} from "../../../ui/button/button";

type ProjectItemType = {
    id: number
    title: string
    img: string
    linkDeploy: string
    linkRepo: string
    projectTitle: string
    projectDescription: string
}

type ProjectItemPropsType = {
    project: ProjectItemType
}

export const ProjectItem = ({project}: ProjectItemPropsType) => {
    const {projectTitle, title, img, linkRepo, linkDeploy, projectDescription} = project;

    return (
        <li className={s.project}>
            <div className={s.card}>
                <img src={img} alt={`project: ${title}`} className={s.previewImage}/>
                <div className={s.link}>
                    <Button className={s.linkButton} target={'_blank'} as={'a'} href={linkDeploy} >Demo</Button>
                    <Button className={s.linkButton} target={'_blank'} as={'a'} href={linkRepo}>Code</Button>
                </div>
            </div>
            <div className={s.projectInfo}>
                <h3 className={s.title}>{projectTitle}</h3>
                <span className={s.description}>{projectDescription}</span>
            </div>
        </li>
    );
};