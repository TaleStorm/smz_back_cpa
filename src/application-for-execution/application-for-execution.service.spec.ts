import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationForExecutionService } from './application-for-execution.service';

describe('ApplicationForExecutionService', () => {
  let service: ApplicationForExecutionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationForExecutionService],
    }).compile();

    service = module.get<ApplicationForExecutionService>(ApplicationForExecutionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
