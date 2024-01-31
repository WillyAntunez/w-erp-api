import { DataTypes, Sequelize } from 'sequelize';
import { IModelFn } from '../../interfaces/Server';

export const OAuthRefreshTokens: IModelFn = (sequelize: Sequelize) => {
    const oauth_refresh_tokens = sequelize.define(
        'oauth_refresh_tokens',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            refresh_token: DataTypes.STRING(256),
            refresh_token_expires_at: DataTypes.DATE,
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
            tableName: 'oauth_refresh_tokens',
        },
    );

    return oauth_refresh_tokens;
};
