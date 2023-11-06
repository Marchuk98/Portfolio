import { FieldValues, useController, UseControllerProps } from 'react-hook-form';
import { TextAreaField, TextAreaFieldProps } from '../ui/text-area-field/text-area-field';

type ControlledTextAreaFieldProps<T extends FieldValues> = Omit<UseControllerProps<T>,
    'rules' | 'defaultValue'> & Omit<TextAreaFieldProps, 'onChange' | 'value'>;

export const ControlledTextAreaField = <T extends FieldValues>({ control, name, ...rest }: ControlledTextAreaFieldProps<T>) => {
    const { field, fieldState: { error } } = useController({ name, control });
    return <TextAreaField {...field} errorMessage={error?.message} {...rest} />;
};