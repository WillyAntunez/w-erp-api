import { RequestHandler } from 'express';
import { IErrorResponse, ISuccessResponse } from '../../types/responses';
import { db } from '../..';

export const getCountries: RequestHandler = async (req, res) => {
    try {
        const data = await db.models.Country.findAll();

        const response: ISuccessResponse = {
            success: true,
            data: data,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.log(error);

        const response: IErrorResponse = {
            success: false,
            error: true,
            message: 'Error getting countries',
        };

        return res.status(500).json(response);
    }
};
