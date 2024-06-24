import { Sequelize, DataTypes, Model } from 'sequelize';
import { sequelize } from '../database/connection.js'

class UserModels extends Model { }

UserModels.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        // Model attributes are defined here
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        pass: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        active: {
            type: DataTypes.STRING,
            allowNull: true,
        }
    },
    {
        // Other model options go here
        sequelize, // We need to pass the connection instance
        modelName: 'Users', // We need to choose the model name
        tableName: 'users',
    },
);

export { UserModels }