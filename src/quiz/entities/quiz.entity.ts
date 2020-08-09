import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public numberQuestion: number;

    @Column()
    public question: string;

    @Column()
    public answers: string;

    @Column()
    public correctAnswer: string;

    @Column()
    public answerExplanation: string;
}
