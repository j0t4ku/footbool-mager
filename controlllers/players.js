import { where } from "sequelize"
import { validatePartialSchema, validateSchema } from "../schemas/players.js"

export class PlayersController {
    constructor({ playerModel }) {
        this.playerModel = playerModel
    }

    getAll = async (request, reply) => {
        try {
            const players = await this.playerModel.findAll()

            if (players) reply.send(players).type('application/json')

            return reply.code(404).send({ message: "Players not found" }).type('application/json')
        } catch (error) {
            console.error('Error al obtener jugadores:', error);
            reply.code(500)
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params
            const player = await this.playerModel.findByPk(id)
            if (player) return res.send(player).type('application/json')
            return reply.code(404).send({ message: "Player not found" }).type('application/json')

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
            const newPlayer = await this.playerModel.create(result.data)
            res.code(201).send(newPlayer)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.playerModel.destroy({ where: { id: id, }, })
        if (result === false) {
            return res.code(404).send({ message: 'Player not found' })
        }
        return res.send({ message: 'Player has been deleted' })
    }

    update = async (req, res) => {
        try {
            const result = validatePartialSchema(req.body)

            if (result.error) return res.code(400).send({ error: JSON.parse(result.error.message) })

            const { id } = req.params
            const updatedPlayer = await this.playerModel.update(result.data, { where: { id: id } })
            return res.send(updatedPlayer)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }


}