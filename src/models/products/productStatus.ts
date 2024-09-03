import { pgEnum } from 'drizzle-orm/pg-core';

export const productStatus = pgEnum('product_status', [
    'active',
    'inactive',
    'discontinued',
    'in_development',
    'withdrawn',
]);
