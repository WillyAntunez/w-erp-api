import {
    integer,
    pgTable,
    serial,
    uniqueIndex,
    varchar,
} from 'drizzle-orm/pg-core';
import { commonStatusEnum } from '../common';
import { productCategories } from './productCategories';

export const productCategoryCustomProperties = pgTable(
    'product_category_custom_properties',
    {
        id: serial('id').primaryKey(),
        status: commonStatusEnum('status').default('active').notNull(),
        name: varchar('name', { length: 255 }).notNull(),
        description: varchar('description', { length: 255 }),
        categoryId: integer('category_id').references(
            () => productCategories.id,
        ),
    },
    productCategoryCustomProperties => {
        return {
            statusIndex: uniqueIndex(
                'product_category_custom_properties_status_idx',
            ).on(productCategoryCustomProperties.status),
            categoryIdIndex: uniqueIndex(
                'product_category_custom_properties_category_id_idx',
            ).on(productCategoryCustomProperties.categoryId),
        };
    },
);
