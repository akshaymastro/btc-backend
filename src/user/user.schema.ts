import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User extends Document {
  @Prop()
  name: string;

  @Prop()
  password: string;
  @Prop()
  scores: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
