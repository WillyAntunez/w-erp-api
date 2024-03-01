import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { IContactInfoModel } from '../../types/contacts';

export const ContactInfo: IModelFn = sequelize => {
    const ContactInfo: IDBModel = sequelize.define<IContactInfoModel>(
        'ContactInfo',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },

            countryId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },

            cityId: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },

            address: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            secondAddress: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            phone: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            secondPhone: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            email: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            secondEmail: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            comment: {
                type: DataTypes.STRING,
                allowNull: true,
            },

            updatedAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },

            createdAt: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            tableName: 'contact_info',
            underscored: true,
        },
    );

    ContactInfo.associate = models => {
        // city association
        ContactInfo.belongsTo(models.City, {
            foreignKey: 'cityId',
            as: 'city',
        });

        // country association
        ContactInfo.belongsTo(models.Country, {
            foreignKey: 'countryId',
            as: 'country',
        });

        // customer association
    };

    return ContactInfo;
};
