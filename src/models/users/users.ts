import { pgTable, serial, uniqueIndex, varchar } from 'drizzle-orm/pg-core';
import { commonStatusEnum } from '../common';

export const users = pgTable(
    'users',
    {
        id: serial('id').primaryKey(),
        status: commonStatusEnum('status').default('active').notNull(),
        name: varchar('name', { length: 255 }).notNull(),
        email: varchar('email', { length: 255 }).notNull(),
        username: varchar('username', { length: 255 }).notNull(),
    },
    users => {
        return {
            statusIndex: uniqueIndex('users_status_idx').on(users.status),
            emailIndex: uniqueIndex('users_email_idx').on(users.email),
            usernameIndex: uniqueIndex('users_username_idx').on(users.username),
        };
    },
);
