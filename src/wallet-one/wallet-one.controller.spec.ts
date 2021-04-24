import { Test, TestingModule } from '@nestjs/testing';
import { WalletOneController } from './wallet-one.controller';

describe('WalletOneController', () => {
  let controller: WalletOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WalletOneController],
    }).compile();

    controller = module.get<WalletOneController>(WalletOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
