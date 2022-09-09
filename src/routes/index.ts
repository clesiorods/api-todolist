import { Router } from 'express';
import { categoriesRouter } from './categories.routes';

const routes = Router();

routes.use('/users', categoriesRouter);

routes.use('/categories', categoriesRouter);

export default routes;