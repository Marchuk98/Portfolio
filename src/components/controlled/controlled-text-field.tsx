import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {TextField, TextFieldProps} from "../ui/text-field/text-field";


type ControlledTextFieldProps<T extends FieldValues> = Omit<UseControllerProps<T>,
    'reles' | 'defaultValue'> & Omit<TextFieldProps, 'onChang' | 'value'>


export const ControlledTextField = <T extends FieldValues>({control, name, ...rest}: ControlledTextFieldProps<T>) => {

    const {field, fieldState: {error}} = useController({name, control})


    return <TextField {...field} errorMessage={error?.message} {...rest} />
}