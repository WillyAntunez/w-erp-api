import { IErrorResponse, ISuccessResponse } from '../../types/responses';
import { db } from '../..';
import { RequestHandler } from 'express';

// * DOCUMENT TYPES
// GET /private/documents/types
export const getDocumentTypes: RequestHandler = async (req, res) => {
    try {
        const data = await db.models.DocumentType.findAll({
            include: [
                {
                    model: db.models.DocumentTypeCategory,
                    as: 'category',
                    attributes: ['id', 'name'],
                },
            ],
        });

        const response: ISuccessResponse = {
            success: true,
            data: data,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);

        const response: IErrorResponse = {
            success: false,
            error: true,
            message: 'Error getting document types',
        };

        return res.status(500).json(response);
    }
};

// * DOCUMENT TYPE CATEGORIES
// GET /private/documents/types/categories
export const getDocumentTypeCategories: RequestHandler = async (req, res) => {
    try {
        const data = await db.models.DocumentTypeCategory.findAll();

        const response: ISuccessResponse = {
            success: true,
            data: data,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);

        const response: IErrorResponse = {
            success: false,
            error: true,
            message: 'Error getting document type categories',
        };

        return res.status(500).json(response);
    }
};
