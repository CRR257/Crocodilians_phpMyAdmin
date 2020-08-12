import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { QuizAnswerDTO } from '../dto/quiz-answer-dto';
import { QuizAnswer } from '../entities/quiz-answer.entity';

@Injectable()
export class QuizAnswerService {
  constructor(
    @InjectRepository(QuizAnswer)
    private readonly quizAnswerRepository: Repository<QuizAnswer>
  ) {}

  public async getAll(): Promise<QuizAnswer[]> {
    return await this.quizAnswerRepository.find();
  }

  public async createQuizAnswer(quizAnswerNew: QuizAnswerDTO): Promise<QuizAnswer> {
    const newAnswerQuiz = new QuizAnswer();
    newAnswerQuiz.numberQuestion= quizAnswerNew.numberQuestion;
    newAnswerQuiz.correctAnswer = quizAnswerNew.correctAnswer;
    newAnswerQuiz.answerExplanation = quizAnswerNew.answerExplanation;
  
    return this.quizAnswerRepository.save(newAnswerQuiz);
  }

  public async getAnswerQuestion(numberQuestion: number): Promise<QuizAnswer> {
    return await this.quizAnswerRepository.findOne(numberQuestion);
  }

  public async updateQuiz(idAnswerQuiz: number, quizAnswerUpdate: QuizAnswerDTO): Promise<QuizAnswer> {
    const quizAnswerToUpdate = await this.quizAnswerRepository.findOne(idAnswerQuiz);
    quizAnswerToUpdate.numberQuestion = quizAnswerUpdate.numberQuestion;
    quizAnswerToUpdate.numberQuestion = quizAnswerUpdate.numberQuestion;
    quizAnswerToUpdate.correctAnswer = quizAnswerUpdate.correctAnswer;
    quizAnswerToUpdate.answerExplanation = quizAnswerUpdate.answerExplanation;

    return await this.quizAnswerRepository.save(quizAnswerToUpdate);
  }

  public async deleteAnswerQuestion(idQuiz: number): Promise<any> {
    return await this.quizAnswerRepository.delete(idQuiz);
  }
}
