/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
    private keys = new Map<string, string>();

    register(dto: RegisterDto){
        const apiKey = uuidv4();
        this.keys.set(apiKey, dto.email);
        return {apiKey, ...dto};
    }

    isValidKey(key: string): boolean {
        return this.keys.has(key);
    }
}
