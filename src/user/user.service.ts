import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './user.schema';
import { LoginDTO } from './dto/login.dto';
import {
  EncryptPassword,
  ComparePassword,
  TokenGeneration,
} from 'src/utils/helpers';

@Injectable()
export class UserService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  async createUser(user: User): Promise<User> {
    const generatedPassword = EncryptPassword(user.password);
    console.log(generatedPassword);
    user.password = generatedPassword;
    const newUser = new this.userModel(user);
    return newUser.save();
  }
  async updateUser(scoreBody: any): Promise<any> {
    const update = await this.userModel.updateOne(
      { _id: scoreBody.id },
      { score: scoreBody.score + 1 },
    );
    return update;
  }
  async getScore(userId: any): Promise<any> {
    const userScore = await this.userModel.findById({ _id: userId });
    return userScore;
  }
}
