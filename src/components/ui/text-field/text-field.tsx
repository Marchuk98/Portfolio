import {ComponentPropsWithoutRef, forwardRef, KeyboardEvent} from 'react'
import s from './text-field.module.scss'
import clsx from "clsx";


export type TextFieldProps = {
    value?: string
    label?: string
    errorMessage?: string
    onEnter?: (e: KeyboardEvent<HTMLInputElement>) => void
    className?: string
} & ComponentPropsWithoutRef<'input'>

export const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
    (
        {
            value,
            type,
            label,
            errorMessage,
            onEnter,
            onKeyDown,
            className,
            ...rest
        },
        ref
    ) => {

        const classNames = {
            root: clsx(s.root, className)
        }

        const showError = errorMessage && errorMessage.length > 0

        const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
            if (onEnter && e.key === 'Enter') {
                onEnter(e)
            }
            onKeyDown?.(e)
        }

        return (
            <div className={classNames.root}>
                {label && <span className={s.label}>{label}</span>}

                <div className={s.fieldContainer}>
                    <input
                        value={value}
                        ref={ref}
                        className={`${s.field} ${showError ? s.error : ''}`}
                        type={"text"}
                        onKeyDown={handleKeyDown}
                        {...rest}
                    />
                </div>
                {showError && (
                    <span className={s.error}>{errorMessage}</span>
                )}
            </div>
        )
    })