import { MatchController } from "../controlllers/match.js"
import { matchModel } from "../models/match.js"

const match = new MatchController({ matchModel: matchModel })

async function routesMatch(fastify, options) {
    fastify.get('/', match.getAll),
        fastify.get('/:id', match.getById),
        fastify.post('/', match.create),
        fastify.delete('/:id', match.delete),
        fastify.patch('/:id', match.update)

}


export default routesMatch