import { Model, Optional } from 'sequelize';

// * document type
interface IDocumentType {
    id: number;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
    categoryId: number;
}

export interface IDocumentTypeModel
    extends Model<IDocumentType, Optional<IDocumentType, 'id'>> {}

// * document type category
interface IDocumentTypeCategory {
    id: number;
    name: string;
    description: string;
    updatedAt: string;
    createdAt: string;
}

export interface IDocumentTypeCategoryModel
    extends Model<
        IDocumentTypeCategory,
        Optional<IDocumentTypeCategory, 'id'>
    > {}
