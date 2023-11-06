import React from 'react';
import {Skill} from './skill/skill'
import {Title} from "../../ui/title/title";
import {skills} from "./skills.data";
import s from './skills.module.scss'

export const Skills = () => {

    const mappedSkills = skills.map((skill) => {
        return <Skill key={skill.skillId} skill={skill}/>
    })

    return (
        <section id={'skills'} className={s.skillsBlock}>
            <div className={`container ${s.skillsContainer}`}>
                <Title>My Skills</Title>
                <div className={s.skills}>{mappedSkills}</div>
            </div>
        </section>
    );
};