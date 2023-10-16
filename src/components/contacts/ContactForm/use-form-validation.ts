import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from "zod";

const schema = z.object({
    email: z.string().email('email').nonempty('Enter email'),
    name: z.string().nonempty('required'),
    message: z.string().min(15, '15 length').nonempty('required')
})

export type FormValidationInput = z.infer<typeof schema>

export const UseFormValidation = () => {
    return useForm<FormValidationInput>({
        resolver: zodResolver(schema),
        mode: 'onSubmit',
        defaultValues: {
            name: '',
            email: '',
            message: '',
        }
    })
}