import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/CreateAuthDto';

@Injectable()
export class AuthService {
  login(body: CreateAuthDto): boolean {
    return true;
  }
}
