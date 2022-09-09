import { Request, Response } from "express";
import { CreateCategorieService } from "../services/Create/categorieService";

export class CategoriesController {
    async create(request: Request, response: Response): Promise<Response> {
        
        const {name, color} = request.body;

        try {
            const createCategoriesService = new CreateCategorieService();
            const categories = await createCategoriesService.execute(
                {
                    name, 
                    color
                }
            )

            return response.status(201).json({success: true, message: "Categoria criada com sucesso", object: categories});
        } catch (error) {
            return response.status(400).json({message: error.message});
            
        }
    }
}