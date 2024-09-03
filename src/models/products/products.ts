import {
    numeric,
    pgTable,
    varchar,
    serial,
    uniqueIndex,
    text,
} from 'drizzle-orm/pg-core';
import { productStatus } from './productStatus';

export const products = pgTable(
    'products',
    {
        id: serial('id').primaryKey(),
        status: productStatus('status').default('active').notNull(),
        name: varchar('name', { length: 255 }).notNull(),
        price: numeric('price', { precision: 10, scale: 2 }).notNull(),
        description: text('description'),
        imageUrl: text('image_url'),
    },
    products => {
        return {
            nameIndex: uniqueIndex('name_idx').on(products.name),
            statusIndex: uniqueIndex('status_idx').on(products.status),
            priceIndex: uniqueIndex('price_idx').on(products.price),
        };
    },
);
