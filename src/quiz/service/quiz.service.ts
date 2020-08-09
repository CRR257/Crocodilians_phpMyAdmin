import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Quiz } from '../entities/quiz.entity';
import { QuizDTO } from '../dto/quiz-dto';
import { QuizWithoutAnswers } from '../entities/quizWithoutAnswers.entity';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(Quiz)
    private readonly quizRepository: Repository<Quiz>
  ) {}
  // public async getAll(): Promise<Crocodilian[]> {
  //   return await this.crocodilianRepository.find();
  // }
  public async getAll(): Promise<Quiz[]> {
    return await this.quizRepository.find();
  }

  public async getQuizes(): Promise<any> {
    const allQuizes =  await this.quizRepository.find();
    allQuizes.forEach(function(v){ delete v.correctAnswer });
    // for (let i= 0; i<allQuizes.length; i++) {
    //   delete allQuizes.correctAnswer;
    // }
    // for (let key in allQuizes) {
    //   delete allQuizes[key].correctAnswer;
    // }
    return allQuizes;
    // const quizesWithoutAnswers = new QuizWithoutAnswers();
    // quizesWithoutAnswers.numberQuestion;
    // return quizesWithoutAnswers;
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
