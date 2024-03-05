import { RequestHandler } from 'express';
import { IErrorResponse, ISuccessResponse } from '../../types/responses';
import { db } from '../..';

// * MARITAL STATUSES
// GET /private/shared/marital-statuses
export const getMaritalStatuses: RequestHandler = async (req, res) => {
    try {
        const data = await db.models.MaritalStatus.findAll();

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
            message: 'Error getting marital statuses',
        };

        return res.status(500).json(response);
    }
};
