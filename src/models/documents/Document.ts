import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { IDocumentModel } from '../../types/documents';

export const Document: IModelFn = sequelize => {
    const Document: IDBModel = sequelize.define<IDocumentModel>(
        'Document',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
                unique: true,
            },
            number: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            url: {
                type: DataTypes.STRING,
            },
            issueDate: {
                type: DataTypes.DATE,
            },
            expirationDate: {
                type: DataTypes.DATE,
            },
            issuedBy: {
                type: DataTypes.STRING,
            },
            comment: {
                type: DataTypes.STRING,
            },
            documentTypeId: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            customerId: {
                type: DataTypes.INTEGER,
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
            tableName: 'documents',
            underscored: true,
        },
    );

    Document.associate = models => {
        Document.belongsTo(models.DocumentType, {
            foreignKey: 'documentTypeId',
            as: 'type',
        });
    };

    return Document;
};
