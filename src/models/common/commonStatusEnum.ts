import { pgEnum } from 'drizzle-orm/pg-core';

export const commonStatusEnum = pgEnum('common_status', [
    'active',
    'inactive',
    'deleted',
]);
