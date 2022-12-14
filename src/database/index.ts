import { DataSource } from "typeorm";
import { Categorie } from "../entities/Categories";
import { Todo } from "../entities/Todo";
import { User } from "../entities/User";
import { CreateUser1662380684496 } from "./migrations/1662380684496-CreateUser";
import { CreateCategories1662639415224 } from "./migrations/1662639415224-CreateCategories";
import { CreateTodos1663156095277 } from "./migrations/1663156095277-CreateTodos";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tododb",
    entities: [
        User,
        Categorie,
        Todo
    ],
    migrations: [
        CreateUser1662380684496,
        CreateCategories1662639415224,
        CreateTodos1663156095277
    ],
})

dataSource.initialize();

export default dataSource;