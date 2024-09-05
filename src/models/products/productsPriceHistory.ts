import {
    integer,
    numeric,
    pgTable,
    serial,
    timestamp,
    uniqueIndex,
} from 'drizzle-orm/pg-core';
import { sql } from 'drizzle-orm';
import { products } from './products';
import { users } from '../users';

export const productsPriceHistory = pgTable(
    'products_price_history',
    {
        id: serial('id').primaryKey(),
        price: numeric('price').notNull(),
        when: timestamp('when').default(sql`now()`),
        productId: integer('product_id')
            .notNull()
            .references(() => products.id),
        userId: integer('user_id')
            .notNull()
            .references(() => users.id),
    },
    productsPriceHistory => {
        return {
            productIdIndex: uniqueIndex(
                'products_price_history_product_id_index',
            ).on(productsPriceHistory.productId),
            userIdIndex: uniqueIndex('products_price_history_user_id_index').on(
                productsPriceHistory.userId,
            ),
            when: uniqueIndex('products_price_history_when_index').on(
                productsPriceHistory.when,
            ),
        };
    },
);
