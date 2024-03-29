import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { IDocumentTypeModel } from '../../types/documents';

export const DocumentType: IModelFn = sequelize => {
    const DocumentType: IDBModel = sequelize.define<IDocumentTypeModel>(
        'DocumentType',
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
            },
            categoryId: {
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
            tableName: 'document_types',
            underscored: true,
        },
    );

    DocumentType.associate = models => {
        DocumentType.belongsTo(models.DocumentTypeCategory, {
            foreignKey: 'categoryId',
            as: 'category',
        });

        DocumentType.hasMany(models.Document, {
            foreignKey: 'documentTypeId',
            as: 'documents',
        });
    };

    return DocumentType;
};

export default DocumentType;
