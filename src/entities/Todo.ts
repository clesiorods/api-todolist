import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Categorie } from "./Categories";
import { User } from "./User";

@Entity("todos")
export class Todo {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    description: string
    
    @Column()
    user_id: number

    @ManyToOne(() => User, (user)=> user.id)
    @JoinColumn({name: "user_id"})
    user: User
    
    @Column()
    category_id: number

    @ManyToOne(() => Categorie, (catogory) => catogory.id)
    @JoinColumn({name: "category_id"})
    category: Categorie

    @Column()
    status: number

    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date;
}