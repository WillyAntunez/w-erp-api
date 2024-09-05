import {
    integer,
    pgTable,
    serial,
    uniqueIndex,
    varchar,
} from 'drizzle-orm/pg-core';
import { commonStatusEnum } from '../common';
import { productCategoryCustomProperties } from './productCategoriesProperties';
import { products } from './products';

export const productProperties = pgTable(
    'product_properties',
    {
        id: serial('id').primaryKey(),
        status: commonStatusEnum('status').default('active').notNull(),
        customPropertyId: integer('custom_property_id')
            .notNull()
            .references(() => productCategoryCustomProperties.id),
        value: varchar('value', { length: 255 }).notNull(),
        productId: integer('product_id')
            .notNull()
            .references(() => products.id),
    },
    productProperties => {
        return {
            statusIndex: uniqueIndex('product_properties_status_idx').on(
                productProperties.status,
            ),
            customPropertyIdIndex: uniqueIndex(
                'product_properties_custom_property_id_idx',
            ).on(productProperties.customPropertyId),
            productIdIndex: uniqueIndex('product_properties_product_id_idx').on(
                productProperties.productId,
            ),
        };
    },
);
