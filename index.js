import Fastify from 'fastify'
import cors from '@fastify/cors'
import { ACEPTED_ORIGIN } from './utils/const.js'
import routesPlayers from './routes/players.js'
import { sequelize } from './database/connection.js'
import routesTeams from './routes/teams.js'
import fastifyJwt from '@fastify/jwt'
import routesUsers from './routes/users.js'


const fastify = Fastify({
    logger: true
})

await fastify.register(cors, {
    origin: ACEPTED_ORIGIN
})

fastify.register(fastifyJwt, { secret: process.env.SECRET })

try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

// Declare a route
fastify.register(routesPlayers, { prefix: '/players' })

fastify.register(routesTeams, { prefix: '/teams' })

fastify.register(routesUsers, { prefix: '/auth' })





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