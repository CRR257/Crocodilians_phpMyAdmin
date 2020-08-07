import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { CrocodilianController } from './crocodilians/controller/crocodilians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crocodilian } from './crocodilians/entities/crocodilian.entity';
import { CrocodilianService } from './crocodilians/service/crocodilians.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

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
      rootPath: join(__dirname, '..', 'front/dist/crocodiliansProject'),
    }),
    TypeOrmModule.forFeature([Crocodilian]),
    // MulterModule.register({
    //   dest: './files',
    // })
  ],
  controllers: [AppController, CrocodilianController],
  providers: [AppService, CrocodilianService],
})
export class AppModule {}
