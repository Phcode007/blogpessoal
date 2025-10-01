import { Module } from '@nestjs/common';
import { Bcrypt } from './bcrypt/bycrypt';

@Module({
  imports: [],
  providers: [Bcrypt],
  controllers: [],
  exports: [Bcrypt],
})
export class AuthModule {}
