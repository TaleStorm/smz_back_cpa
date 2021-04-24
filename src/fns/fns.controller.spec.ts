import { Test, TestingModule } from '@nestjs/testing';
import { FnsController } from './fns.controller';

describe('FnsController', () => {
  let controller: FnsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FnsController],
    }).compile();

    controller = module.get<FnsController>(FnsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
