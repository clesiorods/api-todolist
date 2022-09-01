import { Router } from 'express';
import { UsersController } from '../controllers/UserController';

export const usersRouter = Router();
const usersController = new UsersController();

usersRouter.post('/', usersController.create);