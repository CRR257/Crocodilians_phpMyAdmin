import { Controller, Get, Res, HttpStatus, Post, Body, Param, Delete } from '@nestjs/common';
import { QuizAnswerDTO } from '../dto/quiz-answer-dto';
import { QuizAnswerService } from '../service/quiz-answer.service';

@Controller('api/quizresults')
export class QuizAnswerController {
  constructor(private quizAnswerService: QuizAnswerService) {}

  @Post()
  create(@Body() quizAnswerDto: QuizAnswerDTO, @Res() response) {
    this.quizAnswerService.createQuizAnswer(quizAnswerDto)
      .then(quiz => {
        response.status(HttpStatus.CREATED).json(quiz);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'error in quiz creation' });
      });
  }

  @Get()
  getAll(@Res() response) {
    this.quizAnswerService
      .getAll()
      .then(quiz => {
        response.status(HttpStatus.OK).json(quiz);
      })
      .catch(() => {
        response
          .status(HttpStatus.FORBIDDEN)
          .json({ message: 'error in get all quizes' });
      });
  }

  @Get( ':id' )
  getAnswerQuestion( @Param( 'id' ) idQuestion, @Res() response ) {
      this.quizAnswerService.getAnswerQuestion( idQuestion ).then( answer => {
          response.status( HttpStatus.OK ).json( answer )
      } ).catch( () => {
          response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: answer not found' } );
      } )
  }

  @Delete( ':id' )
  delete( @Res() response, @Param( 'id' ) idQuiz ) {
      this.quizAnswerService.deleteAnswerQuestion( idQuiz ).then( res => {
          response.status( HttpStatus.OK ).json( res );
      } ).catch( () => {
          response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: quiz is not deleted' } );
      } );
  }
}