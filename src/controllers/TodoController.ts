import { Request, Response } from "express";
import { CreateTodoService } from "../services/Create/CreateTodoService";
import { ListTodoService } from "../services/Create/ListTodoService";
import { ShowTodoService } from "../services/Create/ShowTodoService";

export class TodoController {
    async create(request: Request, response: Response): Promise<Response> {
        const {name, description, category_id} = request.body;
        const { id } = request.user;
        
        try {
            const createTodoService = new CreateTodoService();
            const todo = await createTodoService.execute({name, description, user_id: Number(id), category_id})

            return response.status(201).json({success: true, message: "Nova To Do list cadastrada", object: todo});
        } catch (error) {
            return response.status(400).json({message: error.message});
            
        }
    }


    async listAll(request: Request, response: Response): Promise<Response> {
        const {id} = request.user;
        try {
            const listAllTodoService = new ListTodoService();
            const todos = await listAllTodoService.execute({user_id: Number(id)})

            return response.status(200).json({success: true, object: todos});
        } catch (error) {
            return response.status(400).json({message: error.message});
        }
    }



    async show(request: Request, response: Response): Promise<Response> {
        const user_id = request.user.id;
        const { id } = request.params;
        try {
            const showTodoService = new ShowTodoService();
            const todo = await showTodoService.execute({id: Number(id), user_id: Number(user_id)});

            return response.status(200).json({success: true, object: todo});
        } catch (error) {
            return response.status(400).json({message: error.message});
        }
    }


    
    // async delete(request: Request, response: Response): Promise<Response> {
    //     const {} = request.body;
    //     try {
    //         const deleteTodoService = new DeleteTodoService();
    //         const todo = await deleteTodoService.execute({})

    //         return response.status(200).json({success: true, object: todo});
    //     } catch (error) {
    //         return response.status(400).json({message: error.message});
    //     }
    // }
}