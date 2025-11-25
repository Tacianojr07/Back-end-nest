import { Module } from '@nestjs/common';
import { AuhtController } from './auth.controller';
import { AuthServices } from './auth.service';

@Module({
  imports: [],
  exports: [],
  controllers: [AuhtController],
  providers: [AuthServices],
})
export class AuthModule {}
