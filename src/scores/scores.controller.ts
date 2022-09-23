import {
  Controller,
  HttpStatus,
  Param,
  Patch,
  Post,
  Req,
  Res,
} from '@nestjs/common';
import { ScoresService } from './scores.service';
import * as responseHanlder from '../utils/responseHandler';

@Controller('scores')
export class ScoresController {
  constructor(private ScoreService: ScoresService) {}
  @Post()
  async CreateScore(@Req() req, @Res() res) {
    const response = await this.ScoreService.createScore(req.body);
    responseHanlder.success(res, response, HttpStatus.CREATED);
  }

  @Patch('updateScore/:id')
  async UpdateScore(@Req() req, @Res() res, @Param('id') id) {
    const response = await this.ScoreService.UpdateScore(id, req.body);
    responseHanlder.success(res, response, HttpStatus.CREATED);
  }
}
