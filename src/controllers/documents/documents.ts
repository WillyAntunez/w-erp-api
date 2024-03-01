import { RequestHandler } from 'express';
import { db } from '../..';

// * GET /private/documents
export const getDocuments: RequestHandler = async (req, res) => {
    try {
        const data = await db.models.Document.findAll({
            include: [
                {
                    model: db.models.DocumentType,
                    as: 'type',
                    attributes: ['id', 'name'],
                },
            ],
        });

        const response = {
            success: true,
            data: data,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);

        const response = {
            success: false,
            error: true,
            message: 'Error getting documents',
        };

        return res.status(500).json(response);
    }
};
