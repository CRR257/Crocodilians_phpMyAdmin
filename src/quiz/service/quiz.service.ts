import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizQuestion } from '../entities/quiz-question.entity';
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

  public async updateQuiz(idQuiz: number, quizUpdate: QuizDTO): Promise<QuizQuestion> {
    const quizToUpdate = await this.quizRepository.findOne(idQuiz);
    quizToUpdate.numberQuestion = quizUpdate.numberQuestion;
    quizToUpdate.question = quizUpdate.question;
    quizToUpdate.answer1 = quizUpdate.answer1;
    quizToUpdate.answer2 = quizUpdate.answer2;
    quizToUpdate.answer3 = quizUpdate.answer3;
    quizToUpdate.answer4 = quizUpdate.answer4;

    return await this.quizRepository.save(quizToUpdate);
  }

  public async deleteQuiz(idQuiz: number): Promise<any> {
    return await this.quizRepository.delete(idQuiz);
  }
}
