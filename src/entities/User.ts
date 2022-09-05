import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("Users")

export class User {

    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    name: string
    
    @Column()
    email: string
    
    @Column()
    password: string
    
    @Column()
    is_active: number
    
    @CreateDateColumn()
    created_at: Date
    
    @CreateDateColumn()
    updated_at: Date;
}