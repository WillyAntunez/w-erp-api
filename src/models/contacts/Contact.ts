import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { IContactModel } from '../../types/contacts';

export const Contact: IModelFn = sequelize => {
    const Contact: IDBModel = sequelize.define<IContactModel>(
        'Contact',
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

            customerId: {
                type: DataTypes.INTEGER,
            },

            contactInfoId: {
                type: DataTypes.INTEGER,
            },

            relationship: {
                type: DataTypes.STRING,
                allowNull: false,
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
            tableName: 'contacts',
            underscored: true,
        },
    );

    Contact.associate = models => {
        Contact.belongsTo(models.ContactInfo, {
            foreignKey: 'contactInfoId',
            as: 'contactInfo',
        });
    };

    return Contact;
};
