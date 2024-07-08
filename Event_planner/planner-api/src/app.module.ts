import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './users/user.module';
import { AuthorModule } from './authors/author.module';
import { EventModule } from './events/event.module';
import { ReactionModule } from './reaction/reaction.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    AuthorModule,
    EventModule,
    ReactionModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
