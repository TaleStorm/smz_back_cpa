import { Injectable } from '@nestjs/common';

@Injectable()
export class FnsService {
  getHello(): string {
    return 'Hello World!';
  }
}
