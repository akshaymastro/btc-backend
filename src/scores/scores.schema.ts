import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type ScoreDocument = Scores & Document;

@Schema()
export class Scores extends Document {
  @Prop()
  score: number;

  //   @Prop()
  //   userId: { type: MongooseSchema.Types.ObjectId; ref: 'users' };
}

export const ScoreSchema = SchemaFactory.createForClass(Scores);
