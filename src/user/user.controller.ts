import { Controller, Get, Param } from '@nestjs/common';
import { CustomParsIntPipe } from 'src/common/pipes/custom-parse-int-pipe.pipe';

@Controller('user')
export class UserController {
  @Get(':id')
  findOneUser(
    @Param(CustomParsIntPipe)
    id: string,
  ) {
    return `ola usuario ${id}`;
  }
}
