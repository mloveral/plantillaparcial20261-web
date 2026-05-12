/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prettier/prettier */
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class ApiKeyGuard implements CanActivate {
    constructor(private readonly authService: AuthService) {}

    canActivate(ctx: ExecutionContext): boolean {
        const req = ctx.switchToHttp().getRequest();
        const key = req.headers['x-api-key']

        if (!key || !this.authService.isValidKey(key)) {
            throw new UnauthorizedException();
        }
        return true;
    }
}
