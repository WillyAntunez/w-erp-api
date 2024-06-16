import { ConnectionRefusedError, ValidationError } from 'sequelize';
import { IErrorResponse } from '../types/responses';

export const handleSequelizeError = (error: any) => {
    let errors = [];

    let status: number = 500;

    let response: IErrorResponse = {
        success: false,
        error: true,
        message: 'Error creating customer',
    };

    if (error instanceof ValidationError) {
        errors = error.errors.map(error => {
            return {
                message: error.message,
                type: error.type,
                path: error.path,
            };
        });

        response = {
            success: false,
            error: true,
            message: 'Validation error creating customer',
            errors: errors,
        };

        status = 400;
    }

    if (error instanceof ConnectionRefusedError) {
        response = {
            success: false,
            error: true,
            message: 'Database connection refused',
        };

        status = 503;
    }

    return { response, status };
};
