import { validatePartialSchema, validateSchema } from "../schemas/players"

export class TeamsController {
    constructor({ teamsModel }) {
        this.teamsModel = teamsModel
    }

    getAll = async (request, reply) => {
        try {
            const teams = await this.teamsModel.findAll()

            if (teams) reply.send(teams).type('application/json')

            return reply.code(404).send({ message: "Teams not found" }).type('application/json')
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            reply.code(500)
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params
            const team = await this.teamsModel.getId({ id })
            if (team) return res.send(team).type('application/json')
            return reply.code(404).send({ message: "Team not found" }).type('application/json')

        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500)
        }

    }


    create = async (req, res) => {
        const result = validateSchema(req.body)
        if (result.error) {
            return res.code(400).send({ error: JSON.parse(result.error.message) })
        }
        const newTeam = await this.teamsModel.create({ input: result.data })
        res.code(201).send(newTeam)
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.teamsModel.delete({ id })
        if (result === false) {
            return res.code(404).send({ message: 'team not found' })
        }
        return res.send({ message: 'team has been deleted' })
    }

    update = async (req, res) => {
        const result = validatePartialSchema(req.body)

        if (result.error) return res.code(400).send({ error: JSON.parse(result.error.message) })

        const { id } = req.params
        const updatedTeam = await this.teamsModel.update({ id, input: result.data })

        return res.send(updatedTeam)
    }


}