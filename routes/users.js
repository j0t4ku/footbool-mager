import { UserController } from "../controlllers/users.js"
import { UserModels } from "../models/users.js"

const user = new UserController({
    usermodels: UserModels
})

async function routesUsers(fastify, options) {

    fastify.post('/signin', (req, res) => user.auth(req, res, fastify)),
        fastify.post('/signup', user.register),
        fastify.delete('/:id', user.delete),
        fastify.patch('/:id', {
            onRequest: [fastify.authenticate]
        }, user.update)
}


export default routesUsers