import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { ICountryModel } from '../../types/geography';

export const Country: IModelFn = sequelize => {
    const Country: IDBModel = sequelize.define<ICountryModel>(
        'Country',
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
            code: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            tableName: 'countries',
            underscored: true,
            timestamps: false,
        },
    );

    return Country;
};
