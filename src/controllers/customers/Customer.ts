import { RequestHandler } from 'express';
import { db } from '../..';

import { handleSequelizeError } from '../../helpers/handleSequelizeError';
import { ISuccessResponse } from '../../types/responses';

// * GET CUSTOMERS
// GET - /private/customers
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
            attributes: [
                'id',
                'firstName',
                'lastName',
                'type',
                'status',
                'legalName',
                'tradeName',
                'createdAt',
                'updatedAt',
            ],
        });

        const response = {
            success: true,
            data: data,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);

        const { response, status } = handleSequelizeError(error);

        return res.status(status).json(response);
    }
};

// * GET CUSTOMER BY ID
// GET - /private/customer/:id
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

// * CREATE CUSTOMER
// POST - /private/customer
export const createCustomer: RequestHandler = async (req, res) => {
    const customer = req.body;

    try {
        const data = await db.models.Customer.create(customer, {
            include: [
                {
                    association: db.models.Customer.associations.contactInfo,
                },
                {
                    association: db.models.Customer.associations.contacts,
                },
                {
                    association: db.models.Customer.associations.documents,
                },
            ],
        });

        const response = {
            success: true,
            data: data,
        };

        return res.status(201).json(response);
    } catch (error) {
        console.error(error);

        const { response, status } = handleSequelizeError(error);

        return res.status(status).json({ response });
    }
};

// * UPDATE CUSTOMER
// PUT - /private/customer/:id
export const updateCustomer: RequestHandler = async (req, res) => {
    const { id } = req.params;
    const data = req.body;

    try {
        const customer = await db.models.Customer.findOne({
            where: {
                id,
            },
        });

        if (!customer) {
            const response = {
                success: false,
                error: true,
                message: 'Customer not found',
            };

            return res.status(400).json(response);
        }

        await customer.update(data);

        const response: ISuccessResponse = {
            success: true,
            data: customer,
        };

        return res.status(200).json(response);
    } catch (error) {
        console.error(error);

        const { response, status } = handleSequelizeError(error);

        return res.status(status).json({ response });
    }
};
