import { Module } from '@nestjs/common';
import { ScoresService } from './scores.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/user.schema';
import { Scores, ScoreSchema } from './scores.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: User.name, schema: UserSchema },
      { name: Scores.name, schema: ScoreSchema },
    ]),
  ],
  providers: [ScoresService],
})
export class ScoresModule {}
