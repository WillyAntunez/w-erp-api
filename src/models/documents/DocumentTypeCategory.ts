import { DataTypes } from 'sequelize';
import { IDBModel, IModelFn } from '../../types/server';
import { IDocumentTypeCategoryModel } from '../../types/documents';

export const DocumentTypeCategory: IModelFn = sequelize => {
    const DocumentTypeCategory: IDBModel =
        sequelize.define<IDocumentTypeCategoryModel>(
            'documentTypeCategories',
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
                createdAt: {
                    type: DataTypes.DATE,
                    defaultValue: DataTypes.NOW,
                },
                updatedAt: {
                    type: DataTypes.DATE,
                },
            },
            {
                tableName: 'document_types_categories',
                underscored: true,
            },
        );

    DocumentTypeCategory.associate = models => {
        DocumentTypeCategory.hasMany(models.DocumentType, {
            foreignKey: 'categoryId',
            as: 'documentTypes',
        });
    };

    return DocumentTypeCategory;
};
