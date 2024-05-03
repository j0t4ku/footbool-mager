import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connection.js'

class PlayersModel extends Model { }

PlayersModel.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // Model attributes are defined here
        firstname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastname: {
            type: DataTypes.STRING,
            allowNull: false,
            // allowNull defaults to true
        },
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Players', // We need to choose the model name
        tableName: 'players',
    },
);



export { PlayersModel }