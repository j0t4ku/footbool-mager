import { where } from "sequelize"
import { validatePartialSchema, validateSchema } from "../schemas/teams.js"

export class TeamsController {
    constructor({ teamsModel }) {
        this.teamsModel = teamsModel
    }

    getAll = async (request, reply) => {
        try {
            const players = await this.teamsModel.findAll()

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
            const team = await this.teamsModel.findByPk(id)
            if (team) return res.send(team).type('application/json')
            return reply.code(404).send({ message: "Team not found" }).type('application/json')

        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500)
        }

    }


    create = async (req, res) => {
        try {
            const result = validateSchema(req.body)
            if (result.error) {
                return res.code(400).send({ error: JSON.parse(result.error.message) })
            }
            const newTeam = await this.teamsModel.create(result.data)
            res.code(201).send(newTeam)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.teamsModel.destroy({ where: { id: id, }, })
        if (result === false) {
            return res.code(404).send({ message: 'Team not found' })
        }
        return res.send({ message: 'Team has been deleted' })
    }

    update = async (req, res) => {
        try {
            const result = validatePartialSchema(req.body)

            if (result.error) return res.code(400).send({ error: JSON.parse(result.error.message) })

            const { id } = req.params
            const updatedTeam = await this.teamsModel.update(result.data, { where: { id: id } })
            return res.send(updatedTeam)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }


}