import { Test, TestingModule } from '@nestjs/testing';
import { FnsService } from './fns.service';

describe('FnsService', () => {
  let service: FnsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FnsService],
    }).compile();

    service = module.get<FnsService>(FnsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
