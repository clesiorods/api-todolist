import { Router } from 'express';
import { categoriesRouter } from './categories.routes';
import { todosRouter } from './todo.routes';

const routes = Router();

routes.use('/users', categoriesRouter);

routes.use('/categories', categoriesRouter);

routes.use('/todos', todosRouter);

export default routes;