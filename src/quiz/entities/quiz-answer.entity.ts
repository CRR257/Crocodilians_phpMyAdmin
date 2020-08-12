import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class QuizAnswer {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public numberQuestion: number;

    @Column()
    public correctAnswer: string;

    @Column()
    public answerExplanation: string;
}
