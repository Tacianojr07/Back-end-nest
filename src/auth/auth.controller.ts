import { Controller, Post } from '@nestjs/common';
import { AuthServices } from './auth.service';

@Controller('auth')
export class AuhtController {
  constructor(private readonly authServices: AuthServices) {}

  @Post('login')
  login() {
    return this.authServices.doLogin();
  }
}
