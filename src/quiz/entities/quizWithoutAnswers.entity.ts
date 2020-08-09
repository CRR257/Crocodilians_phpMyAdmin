import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class QuizWithoutAnswers {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public numberQuestion: number;

    @Column()
    public question: string;

    @Column()
    public correctAnswer: string;

    @Column()
    public answerExplanation: string;
}
