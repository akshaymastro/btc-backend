import {
  Controller,
  HttpStatus,
  Param,
  Post,
  Req,
  Res,
  Get,
  Patch,
} from '@nestjs/common';
import { UserService } from './user.service';
import * as responseHandler from '../utils/responseHandler';
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Post()
  async CreateUser(@Req() req, @Res() res) {
    const data = await this.userService.createUser(req.body);
    responseHandler.success(
      res,
      { message: 'User Created SuccessFully', data },
      HttpStatus.CREATED,
    );
  }
  @Patch('updateUser')
  async UpdateUser(@Req() req, @Res() res) {
    const data = await this.userService.updateUser(req.body);
    responseHandler.success(
      res,
      { message: 'User Score Updated SuccessFully', data },
      HttpStatus.CREATED,
    );
  }
  @Get('getUserScore/:id')
  async UserScore(@Req() req, @Res() res, @Param('id') id) {
    const data = await this.userService.getScore(id);
    responseHandler.data(res, data, HttpStatus.OK);
  }
}
