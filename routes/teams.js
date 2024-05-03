async function routesTeams(fastify, options) {
    fastify.get('/', async (request, reply) => {
        return { Teams: 'Teams' }
    })
}


export default routesTeams