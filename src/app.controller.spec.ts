import { Test, TestingModule } from '@nestjs/testing';
import { DataController} from './app.controller';
import { DataService } from './app.service';

describe('AppController', () => {
  let appController: DataController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DataController],
      providers: [DataService],
    }).compile();

    appController = app.get<DataController>(DataController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
