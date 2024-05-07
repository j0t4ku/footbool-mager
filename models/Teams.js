import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connection'

class TeamsModels extends Model { }

TeamsModels.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // Model attributes are defined here
        teamname: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        logo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stadium: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Teams', // We need to choose the model name
        tableName: 'teams',
    },
);

export { TeamsModels }