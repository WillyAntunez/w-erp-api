import dotenv from 'dotenv';

import { Database } from './server/Database';
import { Server } from './server/Server';

import { DocumentType } from './models/documents/DocumentType';
import { DocumentTypeCategory } from './models/documents/DocumentTypeCategory';
import { Document } from './models/documents/Document';
import { Country } from './models/geography/Country';
import { City } from './models/geography/City';
import { ContactInfo } from './models/contacts/ContactInfo';
import { Contact } from './models/contacts/Contact';
import { Customer } from './models/customers/Customer';

dotenv.config();

export const db = new Database(
    {
        DocumentType,
        DocumentTypeCategory,
        Document,
        ContactInfo,
        Contact,
        Country,
        City,
        Customer,
    },
    process,
);

const app = new Server(process, db);

app.start();
app.dbConnect();
