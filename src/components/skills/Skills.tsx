import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/Container.module.css'
import Skill from './skill/Skill'

const Skills = () => {
    return (
        <div className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <h2 className={styles.title}>Skills</h2>
                <div className={styles.skills}>
                    <Skill title ={"JS"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
                    <Skill title ={"CSS"} description={"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa."}/>
                    <Skill title ={"React"} description={'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.'}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;