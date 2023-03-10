import React from 'react';
import styles from "./Projects.module.css"
import styleContainer from "../common/Container.module.css"
import ProjectItem from "./projectItem/ProjectItem";

const Projects = () => {
    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
            <h2 className={styles.title}>My Projects</h2>
                <div className={styles.projects}>
                    <ProjectItem title={"Project title"} description={"Brief description"}/>
                    <ProjectItem title={"Project title"} description={"Brief description"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;