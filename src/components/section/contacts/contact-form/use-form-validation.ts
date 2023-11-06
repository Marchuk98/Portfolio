import {useForm} from "react-hook-form";
import {zodResolver} from '@hookform/resolvers/zod'
import {z} from "zod";

const schema = z.object({
    email: z.string().email('Invalid email address').nonempty('Enter email'),
    name: z.string().nonempty('Required enter name'),
    message: z.string().min(15, 'The message must be at least 15 characters long').nonempty('required')
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