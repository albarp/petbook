/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';

describe('UserService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersService],
    }).compile();

    service = module.get<UserService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
