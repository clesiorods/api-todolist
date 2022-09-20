import { Router } from 'express';
import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';
import { categoriesRouter } from './categories.routes';
import sessionRouter from './sessions.routes';
import { todosRouter } from './todo.routes';
import { usersRouter } from './users.routes';

const routes = Router();

routes.use('/session', sessionRouter);

routes.use('/users', usersRouter);

routes.use('/categories', categoriesRouter);

routes.use('/todos', ensureAuthenticated, todosRouter);

export default routes;