import { Request, Response } from "express";
import { CreateUserService } from "../services/Create/userService";

export class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        
        const {name, email, password} = request.body;

        try {
            const createUserService = new CreateUserService();
            const users = await createUserService.execute({name, email, password})

            return response.status(201).json({success: true, message: "Usuário cadastrado com sucesso", object: users});
        } catch (error) {
            return response.status(400).json({message: error.message});
            
        }
    }
}