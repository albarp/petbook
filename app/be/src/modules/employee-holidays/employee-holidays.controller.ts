import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeeHolidaysService } from './employee-holidays.service';
import { EmployeeHolidays } from './employee-holidays.entity';
import { CreateEmployeeHolidaysDto } from './dto/create-employee-holidays.dto';

@Controller('employee-holidays')
export class EmployeeHolidaysController {
  constructor(
    private readonly employeeHolidaysService: EmployeeHolidaysService,
  ) {}

  @Get()
  findAll(): Promise<EmployeeHolidays[]> {
    return this.employeeHolidaysService.findAll();
  }

  @Post()
  create(@Body() data: CreateEmployeeHolidaysDto): Promise<EmployeeHolidays> {
    return this.employeeHolidaysService.create(data);
  }
}
