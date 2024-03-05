import { RequestHandler } from 'express';
import { db } from '../..';

// * GET CUSTOMERS
// * GET - /private/customers
export const getCustomers: RequestHandler = async (req, res) => {
    try {
        const data = await db.models.Customer.findAll({
            include: [
                {
                    model: db.models.ContactInfo,
                    as: 'contactInfo',
                    attributes: ['address', 'phone', 'email'],
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
            message: 'Error getting customers',
        };

        return res.status(500).json(response);
    }
};

// * GET CUSTOMER BY ID
// * GET - /private/customer/:id
export const getCustomerById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    try {
        const data = await db.models.Customer.findOne({
            where: {
                id,
            },
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
                {
                    model: db.models.MaritalStatus,
                    as: 'maritalStatus',
                },
                {
                    model: db.models.Contact,
                    as: 'contacts',
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
                },

                {
                    model: db.models.Document,
                    as: 'documents',
                    include: [
                        {
                            model: db.models.DocumentType,
                            as: 'type',
                            include: [
                                {
                                    model: db.models.DocumentTypeCategory,
                                    as: 'category',
                                },
                            ],
                        },
                    ],
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
            message: 'Error getting customer',
        };

        return res.status(500).json(response);
    }
};
