import React from 'react';
import styles from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import {Skill} from './skill/Skill'
import {Typography} from "../typography/typography";
import {skills} from "./skills.data";
import s from './Skills.module.css'

export const Skills = () => {

    const mappedSkills = skills.map((skill) => {
        return <Skill key={skill.skillId} skill={skill}/>
    })

    return (
        <section id={'skills'} className={styles.skillsBlock}>
            <div className={`${styleContainer.container} ${styles.skillsContainer}`}>
                <Typography className={s.title}>Skills</Typography>
                <div className={styles.skills}>{mappedSkills}</div>
            </div>
        </section>
    );
};