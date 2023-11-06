import React from 'react';
import s from './skill.module.scss';
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
        <div className={s.skill}>
            <div>
                <Icons size={60} color={fill}/>
            </div>
            <h3 className={s.skillTitle}>{title}</h3>
        </div>
    );
};
