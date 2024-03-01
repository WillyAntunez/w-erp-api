import { RequestHandler } from 'express';
import { IErrorResponse, ISuccessResponse } from '../../types/responses';
import { db } from '../..';

// get contact info
export const getContact: RequestHandler = async (req, res) => {
    try {
        const contact = await db.models.Contact.findAll({
            include: [
                {
                    model: db.models.ContactInfo,
                    as: 'contactInfo',
                    include: [
                        {
                            model: db.models.City,
                            as: 'city',
                        },
                        {
                            model: db.models.Country,
                            as: 'country',
                        },
                    ],
                },
            ],
        });

        const response: ISuccessResponse = {
            success: true,
            data: contact,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);

        const response: IErrorResponse = {
            success: false,
            error: true,
            message: 'Error getting contact',
        };

        return res.status(500).json(response);
    }
};
