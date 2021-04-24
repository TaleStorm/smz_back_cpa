import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationForExecutionController } from './application-for-execution.controller';

describe('ApplicationForExecutionController', () => {
  let controller: ApplicationForExecutionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationForExecutionController],
    }).compile();

    controller = module.get<ApplicationForExecutionController>(ApplicationForExecutionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
