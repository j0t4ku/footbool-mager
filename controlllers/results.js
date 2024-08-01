import { where } from "sequelize"
import { validatePartialSchema, validateSchema } from "../schemas/results.js"

export class ResultsController {
    constructor({ resultsModel }) {
        this.resultsModel = resultsModel
    }

    getAll = async (request, reply) => {
        try {
            const results = await this.resultsModel.findAll()

            if (results.length > 0) reply.send(results).type('application/json')

            return reply.code(404).send({ message: "Results not found" }).type('application/json')
        } catch (error) {
            console.error('Error al obtener los resultados:', error);
            reply.code(500)
        }
    }

    getById = async (req, res) => {
        try {
            const { id } = req.params
            const player = await this.resultsModel.findByPk(id)
            if (player) return res.send(player).type('application/json')
            return res.code(404).send({ message: "Player not found" }).type('application/json')

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
            const newPlayer = await this.resultsModel.create(result.data)
            res.code(201).send(newPlayer)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send("Erro al realizar la accion")
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.resultsModel.destroy({ where: { id: id, }, })
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
            const updatedPlayer = await this.resultsModel.update(result.data, { where: { id: id } })
            return res.send(updatedPlayer)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }


}