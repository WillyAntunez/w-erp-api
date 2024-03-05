import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { IMaritalStatusModel } from '../../types/shared';

export const MaritalStatus: IModelFn = sequelize => {
    const MaritalStatus: IDBModel = sequelize.define<IMaritalStatusModel>(
        'MaritalStatus',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'marital_statuses',
            underscored: true,
            timestamps: false,
        },
    );

    return MaritalStatus;
};
