import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Crocodilian {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string;

    @Column()
    public breed: string;

    @Column()
    public age: number;

    @Column()
    public image: string;
}
