import {ComponentPropsWithoutRef, ElementType} from "react";
import s from './button.module.scss'
import clsx from "clsx";

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

    const classNames = {
        button: clsx(s.btn, s.btn1, className)
    }

    return (
        <Component
            {...rest}
            target={target}
            href={href}
            onClick={onClick}
            className={classNames.button}>
            <svg>
                <rect x='0' y='0' fill='none' width='100%' height='100%' />
            </svg>
            {children}
        </Component>
    )
}