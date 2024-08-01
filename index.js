import Fastify from 'fastify'
import cors from '@fastify/cors'
import { ACEPTED_ORIGIN } from './utils/const.js'
import routesPlayers from './routes/players.js'
import { sequelize } from './database/connection.js'
import routesTeams from './routes/teams.js'
import jwt from '@fastify/jwt'
import routesUsers from './routes/users.js'
import cookie from '@fastify/cookie'
import routesResults from './routes/results.js'


const fastify = Fastify({
    logger: true
})

await fastify.register(cors, {
    origin: ACEPTED_ORIGIN
})

await fastify.register(jwt, {
    secret: process.env.SECRET,
    cookie: {
        cookieName: 'token',
        signed: false
    }
})

await fastify.register(cookie)

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Decorate authenticate for only some page
fastify.decorate("authenticate", async function (request, reply) {
    try {
        const isAuth = await request.jwtVerify()
        if (!isAuth) return reply.send({ message: 'Usuario no autenticado' })
    } catch (err) {
        reply.send(err)
    }
})

// Declare a route
fastify.register(routesPlayers, { prefix: '/players' })

fastify.register(routesTeams, { prefix: '/teams' })

fastify.register(routesUsers, { prefix: '/auth' })

fastify.register(routesResults, { prefix: '/results' })





// Run the server
const start = async () => {
    try {
        await fastify.listen({ port: 3000, host: '127.0.0.1' })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start()