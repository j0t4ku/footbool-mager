import z from 'zod'

const matchSchema = z.object({
    team1: z.number({
        invalid_type_error: 'Team 1 must be a number',
        required_error: 'Team 1 is rquired'
    }).min(3),
    team2: z.number({
        invalid_type_error: 'Team 2 must be a number',
        required_error: 'Team 2 is rquired'
    }),
    datem_match: z.date({
        invalid_type_error: 'Date match mus be a datetype',
        required_error: 'Date Match is rquired'
    })

})

export function validateSchema(object) {
    return matchSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return matchSchema.partial().safeParse(object)
}