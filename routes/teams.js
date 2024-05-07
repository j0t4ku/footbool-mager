import { TeamsController } from "../controlllers/teams.js"
import { TeamsModels } from '../models/Teams.js'
const teams = new TeamsController({ teamsmodels: TeamsModels })

async function routesTeams(fastify, options) {
    fastify.get('/', teams.getAll),
        fastify.get('/:id', teams.getById),
        fastify.post('/', teams.create),
        fastify.delete('/:id', teams.delete),
        fastify.patch('/:id', teams.update)
}


export default routesTeams