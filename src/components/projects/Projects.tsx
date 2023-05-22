import React from 'react';
import styles from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css"
import ProjectItem from "./projectItem/ProjectItem";
import Title from "../../features/title/Title";
import socialProject from '../assets/image/social-network.png';
import todolistProject from '../assets/image/todolist.jpg';

const Projects = () => {


    return (
        <div className={styles.projectsBlock}>
            <div className={`${styleContainer.container} ${styles.projectsContainer}`}>
              <Title text={'My project'} description={'Most common methods for designing websites that ' +
                  'work well on desktop is responsive and adaptive design'}/>
                <div className={styles.projects}>
                    <ProjectItem
                        projectImg={socialProject}
                        projectLink={'https://vk.com/feed'}
                        title={"Todolist"}
                        description={"Here is a todolist developed by me, which will help in planning the workflow."}/>
                    <ProjectItem
                        projectImg={todolistProject}
                        projectLink={'https://todoist.com/ru'}
                        title={"Social Network"}
                        description={"A social network is a visual demonstration of the project"}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;