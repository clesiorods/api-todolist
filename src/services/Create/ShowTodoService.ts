import { Repository } from "typeorm";
import dataSource from "../../database";
import { Todo } from "../../entities/Todo";

interface ITodo {
    user_id: number,
    id: number
}

class ShowTodoService {

    private todoRepository: Repository<Todo>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todo);
    }

    public async execute({user_id, id}: ITodo): Promise<Todo> {
        if (!user_id || !id) {
            throw new Error("Dados incompletos");
        }

        const todos = await this.todoRepository.findOne({ 
                where: {id},
                relations: ['category', 'user']
            })

        delete todos.user.password;

        return todos;
    }
}

export { ShowTodoService }