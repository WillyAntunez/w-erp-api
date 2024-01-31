import { DataTypes, Sequelize } from 'sequelize';
import { IModelFn } from '../../interfaces/Server';

export const OAuthAccessTokens: IModelFn = (sequelize: Sequelize) => {
    const oauthAccessTokens = sequelize.define(
        'oauth_access_tokens',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            access_token: DataTypes.STRING(256),
            access_token_expires_at: DataTypes.DATE,
            scope: DataTypes.STRING(256),
            client_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'oauth_access_tokens',
        },
    );

    return oauthAccessTokens;
};
