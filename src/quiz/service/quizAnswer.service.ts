import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizQuestion } from '../entities/quizQuestion.entity';
import { QuizAnswerDTO } from '../dto/quizAnswer-dto';
import { QuizAnswer } from '../entities/quizAnswer.entity';

@Injectable()
export class QuizAnswerService {
  constructor(
    @InjectRepository(QuizQuestion)
    private readonly quizAnswerRepository: Repository<QuizAnswer>
  ) {}

  public async getAll(): Promise<QuizAnswer[]> {
    return await this.quizAnswerRepository.find();
  }

  public async createQuizAnswer(quizAnswerNew: QuizAnswerDTO): Promise<QuizAnswer> {
    const newAnswerQuiz = new QuizQuestion();
    newAnswerQuiz.numberQuestion= quizAnswerNew.numberQuestion;
    newAnswerQuiz.question = quizAnswerNew.numberAnswer;
    newAnswerQuiz.answer1 = quizAnswerNew.answerExplanation;
  
    return this.quizAnswerRepository.save(newAnswerQuiz);
  }

  public async getAnswerQuestion(numberQuestion: number): Promise<QuizAnswer> {
    return await this.quizAnswerRepository.findOne(numberQuestion);
  }

  public async deleteAnswerQuestion(idQuiz: number): Promise<any> {
    return await this.quizAnswerRepository.delete(idQuiz);
  }
}
