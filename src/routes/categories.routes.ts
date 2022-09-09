import { Router } from 'express';
import { CategoriesController } from '../controllers/CategoriesController';

export const categoriesRouter = Router();
const categorieController = new CategoriesController();

categoriesRouter.post('/', categorieController.create);