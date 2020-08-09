import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { QuizDTO } from '../dto/quiz-dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>
  ) {}

  public async getAll(): Promise<Quiz[]> {
    return await this.quizRepository.find();
  }

  public async createQuiz(quizNew: QuizDTO): Promise<Quiz> {
    const newQuiz = new Quiz();
    newQuiz.numberQuestion= quizNew.numberQuestion;
    newQuiz.question = quizNew.question;
    newQuiz.answers = quizNew.answers;
    newQuiz.correctAnswer = quizNew.correctAnswer;
    newQuiz.answerExplanation = quizNew.answerExplanation;

    return this.quizRepository.save(newQuiz);
  }
}
