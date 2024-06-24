import { UserController } from "../controlllers/users.js"
import { UserModels } from "../models/users.js"

const user = new UserController({
    usermodels: UserModels
})

async function routesUsers(fastify, options) {
    fastify.post('/', user.register),
        fastify.post('/signup', user.auth),
        fastify.delete('/:id', user.delete),
        fastify.patch('/:id', user.update)
}


export default routesUsers