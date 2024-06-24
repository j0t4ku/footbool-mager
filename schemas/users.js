import z from 'zod'

const userSchema = z.object({
    username: z.string({
        invalid_type_error: 'User Name must be a string',
        required_error: 'User Name is rquired'
    }),
    email: z.string({
        invalid_type_error: 'email must be a string',
        required_error: 'email is rquired'
    }).email(),
    pass: z.string({
        invalid_type_error: 'password must be a string',
        required_error: 'password is rquired'
    }).min(6, "Password must be a 5 character or more"),


})

export function validateSchema(object) {
    return userSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return userSchema.partial().safeParse(object)
}