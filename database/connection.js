import { Sequelize } from 'sequelize';
import 'dotenv/config'

const db = process.env.DATABASE
const user = process.env.USER
const pass = process.env.PASSWORD

// Option 3: Passing parameters separately (other dialects)
export const sequelize = new Sequelize(db, user, pass, {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
});