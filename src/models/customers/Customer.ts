import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { ICustomerModel } from '../../types/customers';

export const Customer: IModelFn = sequelize => {
    const Customer: IDBModel = sequelize.define<ICustomerModel>(
        'Customer',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            contactInfoId: {
                type: DataTypes.INTEGER,
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            type: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            status: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            birthdate: {
                type: DataTypes.DATE,
            },
            gender: {
                type: DataTypes.STRING,
            },
            maritalStatusId: {
                type: DataTypes.INTEGER,
            },
            occupation: {
                type: DataTypes.STRING,
            },
            preferredLanguage: {
                type: DataTypes.STRING,
            },
            description: {
                type: DataTypes.STRING,
            },
            economicActivity: {
                type: DataTypes.STRING,
            },
            legalName: {
                type: DataTypes.STRING,
            },
            tradeName: {
                type: DataTypes.STRING,
            },
            createdAt: {
                type: DataTypes.DATE,
                defaultValue: DataTypes.NOW,
            },
            updatedAt: {
                type: DataTypes.DATE,
            },
        },
        {
            tableName: 'customers',
            underscored: true,
        },
    );

    Customer.associate = models => {
        models.Customer.belongsTo(models.ContactInfo, {
            foreignKey: 'contactInfoId',
            as: 'contactInfo',
        });

        models.Customer.hasMany(models.Contact, {
            as: 'contacts',
        });

        models.Customer.hasMany(models.Document, {
            as: 'documents',
        });

        models.Customer.belongsTo(models.MaritalStatus, {
            foreignKey: 'maritalStatusId',
            as: 'maritalStatus',
        });
    };

    return Customer;
};
