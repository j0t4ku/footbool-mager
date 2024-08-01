import { ResultsController } from "../controlllers/results.js"
import { ResultsModel } from "../models/results.js"

const results = new ResultsController({ resultsModel: ResultsModel })

async function routesResults(fastify, options) {
    fastify.get('/', results.getAll),
        fastify.get('/:id', results.getById),
        fastify.post('/', results.create),
        fastify.delete('/:id', results.delete),
        fastify.patch('/:id', results.update)

}


export default routesResults