import { Controller, Post, Body, Get, Put, Delete, Res, HttpStatus, Param } from '@nestjs/common';
import { CrocodilianDTO } from '../dto/crocodilian-dto';
import { CrocodilianService } from '../service/crocodilians.service';

@Controller( 'api/crocodilians' )
export class CrocodilianController {

    constructor( private crocodilianService: CrocodilianService ) { }

    @Post()
    create( @Body() crocodilianDto: CrocodilianDTO, @Res() response ) {
        this.crocodilianService.createCrocodilian( crocodilianDto ).then( crocodilian => {
            response.status( HttpStatus.CREATED ).json( crocodilian );
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error in crocodilians creation' } );
        } );
    }

    @Get()
    getAll( @Res() response ) {
        this.crocodilianService.getAll().then( crocodiliansList => {
            response.status( HttpStatus.OK ).json( crocodiliansList );
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error in get all crocodilians' } );
        } );
    }

    @Get( ':id' )
    getCrocodilian( @Param( 'id' ) idCrocodilian, @Res() response ) {
        this.crocodilianService.getCrocodilian( idCrocodilian ).then( crocodilian => {
            response.status( HttpStatus.OK ).json( crocodilian )
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: crocodilian not found' } );
        } )
    }

    @Put( ':id' )
    update( @Body() updateCrocodilianDto: CrocodilianDTO, @Res() response, @Param( 'id' ) idCrocodilian ) {
        this.crocodilianService.updateCrocodilian( idCrocodilian, updateCrocodilianDto ).then( CrocodilianUpdated => {
            response.status( HttpStatus.OK ).json( CrocodilianUpdated );
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: crocodilian is not updated' } );
        } );
    }

    @Delete( ':id' )
    delete( @Res() response, @Param( 'id' ) idCrocodilian ) {
        this.crocodilianService.deleteCrocodilian( idCrocodilian ).then( res => {
            response.status( HttpStatus.OK ).json( res );
        } ).catch( () => {
            response.status( HttpStatus.FORBIDDEN ).json( { message: 'error: crocodilian is not deleted' } );
        } );
    }
}
