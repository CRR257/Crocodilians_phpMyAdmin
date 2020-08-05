import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MulterModule } from '@nestjs/platform-express';
import { CrocodilianController } from './crocodilians/controller/crocodilians.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Crocodilian } from './crocodilians/entities/crocodilian.entity';
import { CrocodilianService } from './crocodilians/service/crocodilians.service';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nest',
      password: 'password',
      database: 'crocodilians_db',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Crocodilian]),
    MulterModule.register({
      dest: './files',
    })
  ],
  controllers: [AppController, CrocodilianController],
  providers: [AppService, CrocodilianService],
})
export class AppModule {}
