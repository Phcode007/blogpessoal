import { Module } from '@nestjs/common';
import { Bcrypt } from './bycrypt/bycrypt';

@Module({
  imports: [],
  providers: [Bcrypt],
  controllers: [],
  exports: [Bcrypt],
})
export class AuthModule {}
