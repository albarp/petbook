import { Controller, Get } from '@nestjs/common';

@Controller('employee')
export class EmployeeController {
  @Get()
  findAll() {
    // Placeholder: return static list since service/entity is missing
    return [
      {
        id: 1,
        name: 'Alice',
        email: 'alice@example.com',
        phone: '123-456-7890',
      },
      { id: 2, name: 'Bob', email: 'bob@example.com', phone: '987-654-3210' },
    ];
  }
}
