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
                allowNull: false,
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
            age: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            gender: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            maritalStatusId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            occupation: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            preferredLanguage: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            economicActivity: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            legalName: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            tradeName: {
                type: DataTypes.STRING,
                allowNull: false,
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
