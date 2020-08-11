import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class QuizQuestion {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public numberQuestion: number;

    @Column()
    public question: string;

    @Column()
    public answer1: string;

    @Column()
    public answer2: string;

    @Column()
    public answer3: string;

    @Column()
    public answer4: string;
}
