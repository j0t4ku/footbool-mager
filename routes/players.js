import { PlayersController } from "../controlllers/players.js"
import { PlayersModel } from "../models/players.js"

const player = new PlayersController({ playerModel: PlayersModel })

async function routesPlayers(fastify, options) {
    fastify.get('/', player.getAll),
        fastify.get('/:id', player.getById),
        fastify.post('/', player.create),
        fastify.delete('/:id', player.delete),
        fastify.patch('/:id', player.update)

}


export default routesPlayers