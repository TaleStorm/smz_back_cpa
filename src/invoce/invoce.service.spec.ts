import { Test, TestingModule } from '@nestjs/testing';
import { InvoceService } from './invoce.service';

describe('InvoceService', () => {
  let service: InvoceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InvoceService],
    }).compile();

    service = module.get<InvoceService>(InvoceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
