import { Controller, Get } from '@nestjs/common';
import { FnsService } from './fns.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Контроллер ФНС')
@Controller('fns')
export class FnsController {
  constructor(private readonly fnsService: FnsService) {}

  @Get()
  getHello(): string {
    return this.fnsService.getHello();
  }
}
