import { PlayersController } from "../controlllers/players.js"
import { PlayersModel } from "../models/players.js"

const player = new PlayersController({ playerModel: PlayersModel })

async function routesPlayers(fastify, options) {
    fastify.get('/', player.getAll),
        fastify.get('/', player.getById),
        fastify.post('/', player.create),
        fastify.delete('/', player.delete),
        fastify.patch('/', player.update)

}


export default routesPlayers