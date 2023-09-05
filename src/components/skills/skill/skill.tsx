import React from 'react';
import styles from './Skill.module.css';
import { IconType } from 'react-icons'

type SkillType = {
    skillId: number
    title: string;
    fill: string
    Icons: IconType
}

type SkillPropsType = {
    skill: SkillType
}

export const Skill = ({skill}: SkillPropsType) => {

    const {Icons, fill, title} = skill

    return (
        <div className={styles.skill}>
            <div className={''}>
                <Icons size={100} color={fill}/>
            </div>
            <h3 className={styles.skillTitle}>{title}</h3>
        </div>
    );
};
