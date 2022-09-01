import { Request, Response } from "express";

export class UsersController {
    async create(request: Request, response: Response): Promise<Response> {
        
        const {nome, email, password} = request.body;

        try {
            console.log(nome, email, password);

            let novoUsuario = {
                nome: nome,
                email: email,
                password: password
            }

            return response.status(201).json({success: true, message: "Usuário cadastrado com sucesso", object: novoUsuario});
        } catch (error) {
            return response.status(400).json({message: error.message});
            
        }
    }
}