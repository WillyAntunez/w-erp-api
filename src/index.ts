import dotenv from 'dotenv';

import { Database } from './server/Database';
import { Server } from './server/Server';

import { DocumentType } from './models/documents/DocumentType';
import { DocumentTypeCategory } from './models/documents/DocumentTypeCategory';

dotenv.config();

export const db = new Database(
    {
        DocumentType,
        DocumentTypeCategory,
    },
    process,
);

const app = new Server(process, db);

app.start();
app.dbConnect();
