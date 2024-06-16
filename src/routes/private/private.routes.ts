import express from 'express';
import {
    getDocumentTypeCategories,
    getDocumentTypes,
} from '../../controllers/documents/documentType';
import { getDocuments } from '../../controllers/documents/documents';
import { getContactInfo } from '../../controllers/contacts/ContactInfo';
import { getContact } from '../../controllers/contacts/Contact';
import { getCities } from '../../controllers/geography/city';
import { getCountries } from '../../controllers/geography/Countries';
import {
    createCustomer,
    getCustomerById,
    getCustomers,
    updateCustomer,
} from '../../controllers/customers/Customer';
import { getMaritalStatuses } from '../../controllers/shared/maritalStatuses';

const privateRoutes = express.Router();

// * DOCUMENT TYPES
// GET /private/documents/types
privateRoutes.get('/documents/types', getDocumentTypes);

// * DOCUMENT TYPE CATEGORIES
// GET /private/documents/types/categories
privateRoutes.get('/documents/types/categories', getDocumentTypeCategories);

// * DOCUMENTS
// GET /private/documents
privateRoutes.get('/documents', getDocuments);

// * CONTACT INFO
// GET /private/contact/info
privateRoutes.get('/contacts/info', getContactInfo);

// * CONTACTS
// GET /private/contact
privateRoutes.get('/contacts', getContact);

// * GEOGRAPHY
// GET /private/cities
privateRoutes.get('/geography/cities', getCities);
// GET /private/countries
privateRoutes.get('/geography/countries', getCountries);

// * CUSTOMERS
// GET /private/customers
privateRoutes.get('/customers', getCustomers);
// GET /private/customer/:id
privateRoutes.get('/customer/:id', getCustomerById);
// POST /private/customer
privateRoutes.post('/customer', createCustomer);
// PUT /private/customer/:id
privateRoutes.put('/customer/:id', updateCustomer);

// * MARITAL STATUSES
// GET /private/shared/marital-statuses
privateRoutes.get('/shared/marital-statuses', getMaritalStatuses);

export default privateRoutes;
