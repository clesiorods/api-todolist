import { hash } from "bcryptjs";
import { Repository } from "typeorm";
import dataSource from "../../database";
import { Categorie } from "../../entities/Categories";

interface ICategories {
    name: string,
    color: string
}

class CreateCategorieService {

    private categorieRepository: Repository<Categorie>;

    constructor() {
        this.categorieRepository = dataSource.getRepository(Categorie);
    }

    public async execute({ name, color }: ICategories): Promise<Categorie> {
        if (!name || !color) {
            throw new Error("Dados incompletos");
        }

        const categorie = this.categorieRepository.create(
            {
                name,
                color
            });

            await this.categorieRepository.save(categorie);

        return categorie;
    }
}

export { CreateCategorieService }