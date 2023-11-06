import React from 'react';
import s from "./projects.module.scss"
import {ProjectItem} from "./projectItem/project-item";
import {Title} from '../../ui/title/title'
import {projects} from "./projects.data";

export const Projects = () => {

    const mappedProject = projects.map((project) => {
        return <ProjectItem key={project.id} project={project} />
    })

    return (
        <section id={'my-projects'} className={s.projectsBlock}>
            <div className={`container ${s.projectsContainer}`}>
                <Title>My projects</Title>
                <div className={s.projects}>
                    {mappedProject}
                </div>
            </div>
        </section>
    );
};