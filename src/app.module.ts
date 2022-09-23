import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ScoresController } from './scores/scores.controller';
import { ScoresModule } from './scores/scores.module';
import { User, UserSchema } from './user/user.schema';
import { Scores, ScoreSchema } from './scores/scores.schema';
import { UserService } from './user/user.service';
import { ScoresService } from './scores/scores.service';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://lmssystem:lmssystem@cluster0.ccaaiuy.mongodb.net/bitcoin',
    ),
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Scores.name, schema: ScoreSchema },
    ]),
    UserModule,
    ScoresModule,
  ],
  controllers: [AppController, UserController, ScoresController],
  providers: [AppService, UserService, ScoresService],
})
export class AppModule {}
