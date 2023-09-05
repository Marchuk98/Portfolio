import React from 'react';
import s from "./projects.module.scss"
import {ProjectItem} from "./projectItem/project-item";
import {Typography} from "../../typography/typography";
import {projects} from "./projects.data";

export const Projects = () => {

    const mappedProject = projects.map((project) => {
        return <ProjectItem key={project.id} project={project} />
    })

    return (
        <section id={'my-projects'} className={s.projectsBlock}>
            <div className={`container ${s.projectsContainer}`}>
                <Typography>My projects</Typography>
                <div className={s.projects}>
                    {mappedProject}
                </div>
            </div>
        </section>
    );
};