import { Controller, Get, Res, HttpStatus, Post, Body, Delete, Param } from '@nestjs/common';
import { QuizService } from '../service/quiz.service';
import { QuizDTO } from '../dto/quiz-dto';


@Controller('api/quiz')
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

  @Delete( ':id' )
    delete( @Res() response, @Param( 'id' ) idQuiz ) {
        this.quizService.deleteQuiz( idQuiz ).then( res => {
            response.status( HttpStatus.OK ).json( res );
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: quiz is not deleted' } );
        } );
    }
}
