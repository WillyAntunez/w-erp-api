import {
    integer,
    pgTable,
    serial,
    timestamp,
    uniqueIndex,
} from 'drizzle-orm/pg-core';
import { productStatus } from './productStatus';
import { sql } from 'drizzle-orm';
import { products } from './products';
import { users } from '../users';

export const productsStatusHistory = pgTable(
    'products_status_history',
    {
        id: serial('id').primaryKey(),
        status: productStatus('status').notNull(),
        when: timestamp('when').default(sql`now()`),
        productId: integer('product_id')
            .notNull()
            .references(() => products.id),
        userId: integer('user_id')
            .notNull()
            .references(() => users.id),
    },
    productsStatusHistory => {
        return {
            productIdIndex: uniqueIndex(
                'product_status_history_product_id_index',
            ).on(productsStatusHistory.productId),
            userIdIndex: uniqueIndex('product_status_history_user_id_index').on(
                productsStatusHistory.userId,
            ),
            when: uniqueIndex('product_status_history_when_index').on(
                productsStatusHistory.when,
            ),
        };
    },
);
