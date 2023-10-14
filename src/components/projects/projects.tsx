import React from 'react';
import s from "./projects.module.scss"
import styleContainer from "../common/styles/Container.module.css"
import {ProjectItem} from "./projectItem/project-item";
import {Typography} from "../typography/typography";
import {projects} from "./projects.data";

const Projects = () => {

    const mappedProject = projects.map((project) => {
        return <ProjectItem key={project.id} project={project} />
    })


    return (
        <section id={'my-projects'} className={s.projectsBlock}>
            <div className={`${styleContainer.container} ${s.projectsContainer}`}>
                <Typography>My projects</Typography>
                <div className={s.projects}>
                    {mappedProject}
                </div>
            </div>
        </section>
    );
};

export default Projects;