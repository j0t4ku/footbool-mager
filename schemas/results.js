import z from 'zod'

const resultsSchema = z.object({
    team1: z.number({
        invalid_type_error: 'Team 1 must be a number',
        required_error: 'Team 1 is rquired'
    }).min(3),
    team2: z.number({
        invalid_type_error: 'Team 2 must be a number',
        required_error: 'Team 2 is rquired'
    }),
    goal1: z.number({
        invalid_type_error: 'Goal of team 1 must be a number',
        required_error: 'Goal of team 1 is rquired'
    }),
    goal2: z.number({
        invalid_type_error: 'Goal of team 2 must be a number',
        required_error: 'Goal of team 2 is rquired'
    }),
    victoria: z.number({
        invalid_type_error: 'Victoria must be a number',
        required_error: 'Victoria is rquired'
    }),

})

export function validateSchema(object) {
    return resultsSchema.safeParse(object)
}

export function validatePartialSchema(object) {
    return resultsSchema.partial().safeParse(object)
}