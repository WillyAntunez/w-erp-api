import { DataTypes, Sequelize } from 'sequelize';
import { IModelFn } from '../../interfaces/Server';

export const Roles: IModelFn = (sequelize: Sequelize) => {
    const Roles = sequelize.define(
        'Roles',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(128),
                allowNull: false,
                field: 'name',
            },
            description: {
                type: DataTypes.STRING(256),
                field: 'description',
            },
            state: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: 1,
                field: 'state',
            },
        },
        {
            tableName: 'roles',
        },
    );

    return Roles;
};
