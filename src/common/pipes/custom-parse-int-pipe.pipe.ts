import { BadRequestException, ParseIntPipe } from '@nestjs/common';

export class CustomParsIntPipe extends ParseIntPipe {
  constructor() {
    super({
      exceptionFactory: () =>
        new BadRequestException('Parametro precisa ser um número'),
    });
  }
}
