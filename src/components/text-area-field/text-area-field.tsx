import { ComponentPropsWithoutRef, forwardRef, KeyboardEvent } from 'react';
import s from './text-area-field.module.scss';

export type TextAreaFieldProps = {
    value?: string;
    label?: string;
    errorMessage?: string;
    onEnter?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
    className?: string;
} & ComponentPropsWithoutRef<'textarea'>;

export const TextAreaField = forwardRef<HTMLTextAreaElement, TextAreaFieldProps>(
    (
        {
            value,
            label,
            errorMessage,
            onEnter,
            onKeyDown,
            className,
            ...rest
        },
        ref
    ) => {
        const showError = errorMessage && errorMessage.length > 0;

        const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
            if (onEnter && e.key === 'Enter') {
                onEnter(e);
            }
            onKeyDown?.(e);
        };

        return (
            <div className={s.root}>
                {label && <span>{label}</span>}
                <div className={s.fieldContainer}>
                    <textarea
                        value={value}
                        ref={ref}
                        className={`${s.field} ${showError ? s.error : ''}`}
                        onKeyDown={handleKeyDown}
                        {...rest}
                    />
                </div>
                {showError && <span className={s.error}>{errorMessage}</span>}
            </div>
        );
    }
);