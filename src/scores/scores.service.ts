import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Scores, ScoreDocument } from './scores.schema';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/user/user.schema';
@Injectable()
export class ScoresService {
  constructor(
    @InjectModel(Scores.name) private scoreModel: Model<ScoreDocument>,
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}
  async createScore(score: any): Promise<any> {
    const Socres = new this.scoreModel(score);

    const userScore: any = await Socres.save();
    const userId: any = userScore.userId;
    await this.userModel.updateOne(
      { _id: userId },
      { $push: { scores: userScore._id } },
    );
    return userScore;
  }
  async UpdateScore(id, body) {
    return await this.scoreModel.updateOne({ _id: id }, { ...body });
  }
}
