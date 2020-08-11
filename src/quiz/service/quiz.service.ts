import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizQuestion } from '../entities/quizQuestion.entity';
import { QuizDTO } from '../dto/quiz-dto';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizQuestion)
    private readonly quizRepository: Repository<QuizQuestion>
  ) {}

  public async getAll(): Promise<QuizQuestion[]> {
    return await this.quizRepository.find();
  }

  public async createQuiz(quizNew: QuizDTO): Promise<QuizQuestion> {
    const newQuiz = new QuizQuestion();
    newQuiz.numberQuestion= quizNew.numberQuestion;
    newQuiz.question = quizNew.question;
    newQuiz.answer1 = quizNew.answer1;
    newQuiz.answer2 = quizNew.answer2;
    newQuiz.answer3 = quizNew.answer3;
    newQuiz.answer4 = quizNew.answer4;
  
    return this.quizRepository.save(newQuiz);
  }
}
