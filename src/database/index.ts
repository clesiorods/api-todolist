import { DataSource } from "typeorm";
import { Categories } from "../entities/Categories";
import { User } from "../entities/User";
import { CreateUser1662380684496 } from "./migrations/1662380684496-CreateUser";
import { CreateCategories1662639415224 } from "./migrations/1662639415224-CreateCategories";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tododb",
    entities: [
        User,
        Categories
    ],
    migrations: [
        CreateUser1662380684496,
        CreateCategories1662639415224
    ],
})

dataSource.initialize();

export default dataSource;