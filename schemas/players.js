import z from 'zod'

const playerSchema = z.object({
    id: z.number({ invalid_type_error: 'Id must be a number', required_error: 'Id is required' }),
    firstname: z.string({
        invalid_type_error: 'First Name must be a string',
        required_error: 'First Name is rquired'
    }).min(3),
    lastname: z.string({
        invalid_type_error: 'Last Name must be a string',
        required_error: 'Last Name is rquired'
    }),
    dorsal: z.number({
        invalid_type_error: 'dorsal must be a number',
        required_error: 'dorsal is rquired'
    }),
    idteam: z.number({
        invalid_type_error: 'Id team must be a number',
        required_error: 'Id team is rquired'
    }),

})

export function validateSchema(object) {
    return playerSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return playerSchema.partial().safeParse(object)
}