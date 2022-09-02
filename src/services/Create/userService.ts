interface IUsers {
    nome:string,
    email:string,
    password:string
}

class CreateUserService {

    private users = [];

    public async execute({nome, email, password}:IUsers): Promise <IUsers[]> {
        if(!nome || !email || !password) {
            throw new Error("Dados incompletos");
        }
        
        this.users.push({nome, email, password});
    
        return this.users
    }
}

export { CreateUserService }