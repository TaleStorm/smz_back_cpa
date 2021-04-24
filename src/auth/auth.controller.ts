import { Body, Controller, Post } from '@nestjs/common';
import { CreateAuthDto } from './dto/CreateAuthDto';
import { AppService } from '../app.service';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Первичная авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('/')
  @ApiOperation({ summary: 'Логин пользорвателя' })
  async login(@Body() body: CreateAuthDto): Promise<any> {
    return await this.authService.login(body);
  }
}
