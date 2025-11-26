import { LoginDto } from './dto/login.dto';

export class AuthServices {
  doLogin(loginDto: LoginDto) {
    console.log(loginDto.email, loginDto.password);
    return loginDto;
  }
}
