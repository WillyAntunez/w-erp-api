import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { ICityModel } from '../../types/geography';

export const City: IModelFn = sequelize => {
    const City: IDBModel = sequelize.define<ICityModel>(
        'City',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            countryCode: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
        },
        {
            tableName: 'cities',
            underscored: true,
            timestamps: false,
        },
    );

    return City;
};
