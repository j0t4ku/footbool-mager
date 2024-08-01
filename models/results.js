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
        team1: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        team2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // allowNull defaults to true
        },
        goalTeam1: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // allowNull defaults to true
        },
        goalTeam2: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // allowNull defaults to true
        },
        victoria: {
            type: DataTypes.INTEGER,
            allowNull: false,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Results', // We need to choose the model name
        tableName: 'Results',
    },
);



export { ResultsModel }