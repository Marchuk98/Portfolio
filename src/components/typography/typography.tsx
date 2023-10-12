import React, {ComponentPropsWithoutRef, ElementType, ReactNode} from 'react';
import s from "./typography.module.scss"
import clsx from "clsx";


export type TypographyPropsType<T extends ElementType = 'p'> = {
    as?: T
    children?: ReactNode
    className?: string
} & ComponentPropsWithoutRef<'p'>

export const Typography = <T extends ElementType = 'p'>(props: TypographyPropsType<T> & Omit<ComponentPropsWithoutRef<T>, keyof TypographyPropsType<T>>) => {

    const {as: Component = 'p', className, children, ...rest} = props

    const classNames = {
        title: clsx(s.title, className)
    }

    return (
        <Component className={classNames.title} {...rest}>{children}</Component>
    )
}