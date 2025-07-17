import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeService } from './employee-service.entity';
import { CreateEmployeeServiceDto } from './dto/create-employee-service.dto';

@Controller('employee-service')
export class EmployeeServiceController {
  constructor(
    private readonly employeeServiceService: EmployeeServiceService,
  ) {}

  @Get()
  findAll(): Promise<EmployeeService[]> {
    return this.employeeServiceService.findAll();
  }

  @Post()
  create(@Body() data: CreateEmployeeServiceDto): Promise<EmployeeService> {
    return this.employeeServiceService.create(data);
  }
}
