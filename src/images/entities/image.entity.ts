import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Image {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public name: string;
}
