import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class QuizAnswer {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public numberQuestion: number;

    @Column()
    public numberAnswer: string;

    @Column()
    public answerExplanation: string;
}
