import { Body, Controller, Post } from '@nestjs/common';
import { AuthServices } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuhtController {
  constructor(private readonly authServices: AuthServices) {}

  @Post('login')
  login(@Body() loginDto: LoginDto) {
    return this.authServices.doLogin(loginDto);
  }
}
