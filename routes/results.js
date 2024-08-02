import { ResultsController } from "../controlllers/results.js"
import { ResultsModel } from "../models/results.js"

const match = new ResultsController({ resultModel: ResultsModel })

async function routesResults(fastify, options) {
    fastify.get('/', match.getAll),
        fastify.get('/:id', match.getById),
        fastify.post('/', match.create),
        fastify.delete('/:id', match.delete),
        fastify.patch('/:id', match.update)

}


export default routesResults