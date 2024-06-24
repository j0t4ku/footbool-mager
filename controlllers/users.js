import fastify from "fastify"
import { validatePartialSchema, validateSchema } from "../schemas/users.js"

export class UserController {
    constructor({ usermodels }) {

        this.usermodels = usermodels
    }

    auth = async (req, res) => {
        const token = fastify.jwt.sign({ test: "test" })
        res.send({ token })
    }

    logout = async (req, res) => {

    }

    verify = async (req, res) => {

    }

    register = async (req, res) => {
        try {
            const result = validateSchema(req.body)
            if (result.error) {
                return res.code(400).send({ error: JSON.parse(result.error.message) })
            }
            console.log(result)
            const newUser = await this.usermodels.create(result.data)
            res.code(201).send(newUser)
        } catch (error) {
            //console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }

    delete = async (req, res) => {
        const { id } = req.params
        const result = await this.usermodels.destroy({ where: { id: id, }, })
        if (result === false) {
            return res.code(404).send({ message: 'User not found' })
        }
        return res.send({ message: 'User has been deleted' })
    }

    update = async (req, res) => {
        try {
            const result = validatePartialSchema(req.body)

            if (result.error) return res.code(400).send({ error: JSON.parse(result.error.message) })

            const { id } = req.params
            await this.usermodels.update(result.data, { where: { id: id } })
            const updatedUser = await this.usermodels.findByPk(id)
            return res.send(updatedUser)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }


}