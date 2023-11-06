import{memo, ReactNode} from 'react';

import s from './title.module.scss'

export type TitlePropsType = {
    children?: ReactNode
}

export const Title  = memo(({ children }:TitlePropsType) => {
    return <h2 className={s.title}>{children}</h2>
})