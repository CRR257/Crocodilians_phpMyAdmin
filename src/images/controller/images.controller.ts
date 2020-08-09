import { Controller, Get, Res, HttpStatus, Post, Body } from '@nestjs/common';
import { ImageDTO } from '../dto/image-dto';
import { ImageService } from '../service/image.service';

@Controller( 'api/images' )
export class ImageController {
    constructor( private imageService: ImageService ) { }

    @Post()
    create( @Body() imageDto: ImageDTO, @Res() response ) {
        this.imageService
            .createImage( imageDto )
            .then( image => {
                response.status( HttpStatus.CREATED ).json( image );
            } )
            .catch( () => {
                response
                    .status( HttpStatus.FORBIDDEN )
                    .json( { message: 'error in image creation' } );
            } );
    }

    @Get()
    getAll( @Res() response ) {
        this.imageService
            .getAll()
            .then( image => {
                response.status( HttpStatus.OK ).json( image );
            } )
            .catch( () => {
                response
                    .status( HttpStatus.FORBIDDEN )
                    .json( { message: 'error in get all images' } );
            } );
    }
}
