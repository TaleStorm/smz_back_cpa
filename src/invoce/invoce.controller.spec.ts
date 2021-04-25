import { Test, TestingModule } from '@nestjs/testing';
import { InvoceController } from './invoce.controller';

describe('InvoceController', () => {
  let controller: InvoceController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [InvoceController],
    }).compile();

    controller = module.get<InvoceController>(InvoceController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
