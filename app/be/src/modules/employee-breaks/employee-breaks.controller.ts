import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeeBreaksService } from './employee-breaks.service';
import { EmployeeBreaks } from './employee-breaks.entity';
import { CreateEmployeeBreaksDto } from './dto/create-employee-breaks.dto';

@Controller('employee-breaks')
export class EmployeeBreaksController {
  constructor(private readonly employeeBreaksService: EmployeeBreaksService) {}

  @Get()
  findAll(): Promise<EmployeeBreaks[]> {
    return this.employeeBreaksService.findAll();
  }

  @Post()
  create(@Body() data: CreateEmployeeBreaksDto): Promise<EmployeeBreaks> {
    return this.employeeBreaksService.create(data);
  }
}
