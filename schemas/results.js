import z from 'zod'

const resultsSchema = z.object({
    idmatch: z.number({
        invalid_type_error: 'Id Match must be a number',
        required_error: 'Id Match is rquired'
    }),
    goalteam1: z.number({
        invalid_type_error: 'Goal Team 1 must be a number',
        required_error: 'Team 1 is rquired'
    }).min(3),
    goalteam2: z.number({
        invalid_type_error: 'Goal Team 2 must be a number',
        required_error: 'Team 2 is rquired'
    }),
    victory: z.string({
        invalid_type_error: 'Victoy mus be a char',
        required_error: 'Victory is rquired'
    })

})

export function validateSchema(object) {
    return resultsSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return resultsSchema.partial().safeParse(object)
}