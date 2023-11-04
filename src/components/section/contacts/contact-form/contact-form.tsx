import React, {MutableRefObject, useRef} from 'react';
import s from './contact-form.module.scss'
import {Button} from "../../../ui/button/button";
import {ControlledTextField} from "../../../controlled/controlled-text-field";
import {FormValidationInput, UseFormValidation} from "./use-form-validation";
import {ControlledTextAreaField} from "../../../controlled/controlled-text-area-field";
import emailjs from '@emailjs/browser'
import {toast} from "react-toastify";

type FormValidationProps = {
    onSubmitHandler?: (data: FormValidationInput) => void
}

export const ContactForm = (props: FormValidationProps) => {

    const {onSubmitHandler} = props

    const {handleSubmit, control, reset} = UseFormValidation()

    const form = useRef() as MutableRefObject<HTMLFormElement>

    const onSubmit = async (data: FormValidationInput) => {
        try {
            await emailjs.send('service_jicz9sb', 'template_hlh2jnb', data, '8ovZ0l9SksbHL6KJy');
            toast.success('You have successfully sent the message');
            reset();
            if (onSubmitHandler) {
                onSubmitHandler(data);
            }
        } catch (error) {
            toast.error('Error sending the message');
        }
    };

    return (
        <form className={s.contacts_form} onSubmit={handleSubmit(onSubmit)} ref={form}>
            <div className={s.contacts_input_wrapper}>
                <ControlledTextField placeholder={'Your name'} label={'Name'} name={'name'} control={control} autoComplete="username"/>
                <ControlledTextField placeholder={'Your email'} label={'Email'} name={'email'} control={control} autoComplete="username"/>
            </div>
            <ControlledTextAreaField placeholder={'Your message here'} name={'message'} control={control} className={s.contacts_textarea} />
            <Button type={'submit'} className={s.contactBtn}>Send Message</Button>
        </form>
    );
};