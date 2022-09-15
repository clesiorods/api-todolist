import { Repository } from "typeorm";
import dataSource from "../../database";
import { Todo } from "../../entities/Todo";

interface ITodo {
    user_id: number
}

class ListTodoService {

    private todoRepository: Repository<Todo>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todo);
    }

    public async execute({user_id }: ITodo): Promise<Todo[]> {
        if (!user_id) {
            throw new Error("Dados incompletos");
        }

        const todos = await this.todoRepository.find({ 
                where: {user_id},
                relations: ["category"] 
            })

        return todos;
    }
}

export { ListTodoService }