import { where } from "sequelize"
import { validatePartialSchema, validateSchema } from "../schemas/users.js"

export class UserController {
    constructor({ usermodels }) {

        this.usermodels = usermodels
    }

    auth = async (req, res, fastify) => {
        try {
            const result = validatePartialSchema(req.body)
            if (result.error) {
                return res.code(400).send({ error: JSON.parse(result.error.message) })
            }
            const user = await this.usermodels.findOne({ where: { email: result.data.email } })
            if (user) {
                const token = fastify.jwt.sign({ id: user.id, username: user.username },)
                return res.setCookie('token', token, {
                    secure: false, // send cookie over HTTPS only
                    httpOnly: false,
                }).code(200).send(`Bienvenido ${user.username} `)
            }
            res.send({ message: "Usuario o contraseña incorrecta" })
        } catch (error) {
            console.error('Error al firmar el token:', error);
            res.status(500).send('Error interno del servidor');
        }
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
            console.log(updatedUser)
            return res.send(updatedUser)
        } catch (error) {
            console.error('Error al obtener los datos:', error);
            res.code(500).send(error)
        }
    }


}