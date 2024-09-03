import {
    AnyPgColumn,
    integer,
    pgTable,
    serial,
    uniqueIndex,
    varchar,
} from 'drizzle-orm/pg-core';

import { commonStatusEnum } from '..';

export const productCategories = pgTable(
    'product_categories',
    {
        id: serial('id').primaryKey(),
        status: commonStatusEnum('status').default('active').notNull(),
        name: varchar('name', { length: 255 }).notNull(),
        description: varchar('description', { length: 255 }),
        imageUrl: varchar('image_url', { length: 255 }),
        parentCategoryId: integer('parent_category_id').references(
            (): AnyPgColumn => productCategories.id,
        ),
    },
    productCategories => {
        return {
            statusIndex: uniqueIndex('status_idx').on(productCategories.status),
            parentCategoryIdIndex: uniqueIndex('parent_category_id_idx').on(
                productCategories.parentCategoryId,
            ),
        };
    },
);
