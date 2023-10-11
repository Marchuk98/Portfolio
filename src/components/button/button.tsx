import {ComponentPropsWithoutRef, ElementType} from "react";
import s from './button.module.scss'

export type ButtonProps<T extends ElementType> = {
    as?: T
    href?: string
    onClick?: () => void
    target?: string
    className?: string
} & ComponentPropsWithoutRef<T>

export const Button = <T extends ElementType = 'button'>(props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {

    const {
        as: Component = 'button',
        href,
        onClick,
        target,
        children,
        className,
        ...rest
    } = props

    return (
        <Component
            {...rest}
            target={target}
            href={href}
            onClick={onClick}
            className={s.btn}>
            {children}
        </Component>
    )
}