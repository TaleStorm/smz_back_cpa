import { Test, TestingModule } from '@nestjs/testing';
import { WalletOneService } from './wallet-one.service';

describe('WalletOneService', () => {
  let service: WalletOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WalletOneService],
    }).compile();

    service = module.get<WalletOneService>(WalletOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
