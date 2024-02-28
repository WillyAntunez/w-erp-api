import express from 'express';
import privateRoutes from './private/private.routes';
import publicRoutes from './public/public.routes';

const routes = express.Router();

routes.use('/private', privateRoutes);
routes.use('/public', publicRoutes);

export default routes;
