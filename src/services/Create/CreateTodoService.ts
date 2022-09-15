import { Repository } from "typeorm";
import dataSource from "../../database";
import { Categorie } from "../../entities/Categories";
import { Todo } from "../../entities/Todo";

interface ITodo {
    name: string,
    description: string,
    user_id: number,
    category_id: number
}

class CreateTodoService {

    private todoRepository: Repository<Todo>;
    private categoryReposity: Repository<Categorie>;

    constructor() {
        this.todoRepository = dataSource.getRepository(Todo);
        this.categoryReposity = dataSource.getRepository(Categorie);
    }

    public async execute({ name, description, user_id, category_id }: ITodo): Promise<Todo> {
        if (!name || !description || !user_id || !category_id) {
            throw new Error("Dados incompletos");
        }

        const categoryExists = await this.categoryReposity.findOne({ where: { id: category_id } })
        if (!categoryExists) {
            throw new Error("Categoria não existe");
        }

        const todo = this.todoRepository.create(
            {
                name, 
                description, 
                user_id, 
                category_id,
                status: 0
            });

        await this.todoRepository.save(todo);

        return todo;
    }
}

export { CreateTodoService }