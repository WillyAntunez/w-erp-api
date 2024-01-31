import { DataTypes, Sequelize } from 'sequelize';
import { IModelFn } from '../../interfaces/Server';

export const OAuthAuthorizationCodes: IModelFn = (sequelize: Sequelize) => {
    const oauth_authorization_codes = sequelize.define(
        'oauth_authorization_codes',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            authorization_code: DataTypes.STRING(256),
            expires_at: DataTypes.DATE,
            redirect_uri: DataTypes.STRING(2048),
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
            tableName: 'oauth_authorization_codes',
        },
    );

    return oauth_authorization_codes;
};
