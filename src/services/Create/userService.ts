import { hash } from "bcryptjs";
import { Repository } from "typeorm";
import dataSource from "../../database";
import { User } from "../../entities/User";

interface IUsers {
    name: string,
    email: string,
    password: string
}

class CreateUserService {

    private userRepository: Repository<User>;

    constructor() {
        this.userRepository = dataSource.getRepository(User);
    }

    public async execute({ name, email, password }: IUsers): Promise<User> {

        // console.log(name, email, password);

        if (!name || !email || !password) {
            throw new Error("Dados incompletos");
        }

        const hashedPassword = await hash(password, 8);

        const user = this.userRepository.create(
            {
                name,
                email, 
                password: hashedPassword,
                is_active: 1
            });

            await this.userRepository.save(user);

        return user;
    }
}

export { CreateUserService }