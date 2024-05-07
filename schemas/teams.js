import z from 'zod'

const teamsSchema = z.object({
    id: z.number({ invalid_type_error: 'Id must be a number', required_error: 'Id is required' }),
    teamname: z.string({
        invalid_type_error: 'Team Name must be a string',
        required_error: 'Team Name is rquired'
    }),
    logo: z.string({
        invalid_type_error: 'logo must be a string',
        required_error: 'logo is rquired'
    }),
    stadium: z.string({
        invalid_type_error: 'Stadium must be a string',
        required_error: 'Stadium is rquired'
    })

})

export function validateSchema(object) {
    return teamsSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return teamsSchema.partial().safeParse(object)
}