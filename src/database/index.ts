import { DataSource } from "typeorm";
import { CreateUser1662380684496 } from "./migrations/1662380684496-CreateUser";

const dataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "tododb",
    entities: [],
    migrations: [
        CreateUser1662380684496,
    ],
})

dataSource.initialize();

export default dataSource;