import { Router } from 'express';
import { TodoController } from '../controllers/TodoController';

export const todosRouter = Router();
const todosController = new TodoController();

todosRouter.post('/', todosController.create);
todosRouter.get('/', todosController.listAll);
todosRouter.get('/:id', todosController.show);