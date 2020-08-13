import { Controller, Get, Res, HttpStatus, Post, Body, Delete, Param, Put } from '@nestjs/common';
import { QuizService } from '../service/quiz.service';
import { QuizDTO } from '../dto/quiz-dto';


@Controller('api/quizz')
export class QuizController {
  constructor(private quizService: QuizService) {}

  @Post()
  create(@Body() quizDto: QuizDTO, @Res() response) {
    this.quizService
      .createQuiz(quizDto)
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
    this.quizService
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
  getQuestion( @Param( 'id' ) idQuestion, @Res() response ) {
      this.quizService.getQuestion( idQuestion ).then( answer => {
          response.status( HttpStatus.OK ).json( answer )
      } ).catch( () => {
          response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: answer not found' } );
      } )
  }

  @Put( ':id' )
  update( @Body() updateQuizDto: QuizDTO, @Res() response, @Param( 'id' ) idQuiz ) {
      this.quizService.updateQuiz( idQuiz, updateQuizDto ).then( quizUpdated => {
          response.status( HttpStatus.OK ).json( quizUpdated );
      } ).catch( () => {
          response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: quiz is not updated' } );
      } );
  }
  
  @Delete( ':id' )
    delete( @Res() response, @Param( 'id' ) idQuiz ) {
        this.quizService.deleteQuiz( idQuiz ).then( res => {
            response.status( HttpStatus.OK ).json( res );
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: quiz is not deleted' } );
        } );
    }
}
