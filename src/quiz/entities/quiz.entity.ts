import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { Exclude } from 'class-transformer';

@Entity()
export class Quiz {
    @PrimaryGeneratedColumn()
    public id: number

    @Column()
    public numberQuestion: number;

    @Column()
    public question: string;

    @Column()
    @Exclude()
    public answers: string;

    @Column()
    public correctAnswer: string;

    @Column()
    public answerExplanation: string;
}
