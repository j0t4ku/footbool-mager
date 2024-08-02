import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connection.js'

class ResultsModel extends Model { }

ResultsModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // Model attributes are defined here
        idmatch: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        goalteam1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // allowNull defaults to true
        },
        goalteam2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // allowNull defaults to true
        },
        victory: {
            type: DataTypes.CHAR,
            allowNull: false,
            // allowNull defaults to true
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Results', // We need to choose the model name
        tableName: 'Results',
    },
);



export { ResultsModel }