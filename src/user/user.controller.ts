import { Controller, Get, Param } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get(':id')
  findOneUser(@Param('id') id: string) {
    return `ola usuario ${id}`;
  }
}
