import { RequestHandler } from 'express';
import { IErrorResponse, ISuccessResponse } from '../../types/responses';
import { db } from '../..';

type GetCitiesRequestQuery = {
    country_code?: string;
};

export const getCities: RequestHandler = async (req, res) => {
    try {
        const { country } = req.query;

        const filters: GetCitiesRequestQuery = {};

        if (country) {
            filters['country_code'] = country.toString().toUpperCase();
        }

        const data = await db.models.City.findAll({
            where: filters,
        });

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
            message: 'Error getting cities',
        };

        return res.status(500).json(response);
    }
};
