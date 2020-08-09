import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrocodilianController } from './crocodilians/controller/crocodilians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crocodilian } from './crocodilians/entities/crocodilian.entity';
import { CrocodilianService } from './crocodilians/service/crocodilians.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ImageController } from './images/controller/images.controller';
import { ImageService } from './images/service/image.service';
import { Image } from './images/entities/image.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'us-cdbr-east-02.cleardb.com',
      port: 3306,
      username: 'bf9d367b8af22c',
      password: '46cf40bf',
      database: 'heroku_c5bd09927bb8fac',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'front/dist/crocodiliansApp'),
    }),
    TypeOrmModule.forFeature([Crocodilian, Image]),
    // MulterModule.register({
    //   dest: './files',
    // })
  ],
  controllers: [AppController, CrocodilianController, ImageController],
  providers: [AppService, CrocodilianService, ImageService],
})
export class AppModule {}
