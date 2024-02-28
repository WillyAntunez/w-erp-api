import express from 'express';
import {
    getDocumentTypeCategories,
    getDocumentTypes,
} from '../../controllers/documents/documentType';

const privateRoutes = express.Router();

// * DOCUMENT TYPES
// GET /private/documents/types
privateRoutes.get('/documents/types', getDocumentTypes);

// * DOCUMENT TYPE CATEGORIES
// GET /private/documents/types/categories
privateRoutes.get('/documents/types/categories', getDocumentTypeCategories);

export default privateRoutes;
