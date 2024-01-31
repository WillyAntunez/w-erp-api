import { DataTypes, Sequelize } from 'sequelize';
import { IModelFn } from '../../interfaces/Server';

export const OAuthClients: IModelFn = (sequelize: Sequelize) => {
    const oauth_clients = sequelize.define(
        'oauth_clients',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: DataTypes.INTEGER,
            client_id: DataTypes.INTEGER,
            client_secret: DataTypes.STRING(128),
            callback_url: DataTypes.STRING(2048),
        },
        {
            tableName: 'oauth_clients',
        },
    );

    return oauth_clients;
};
