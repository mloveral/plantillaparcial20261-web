import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { ApiKeyGuard } from './api-key.guard';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ApiKeyGuard],
  exports: [AuthService, ApiKeyGuard],
})
export class AuthModule {}
