import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeeAvailabilityService } from './employee-availability.service';
import { EmployeeAvailability } from './employee-availability.entity';
import { CreateEmployeeAvailabilityDto } from './dto/create-employee-availability.dto';

@Controller('employee-availability')
export class EmployeeAvailabilityController {
  constructor(
    private readonly employeeAvailabilityService: EmployeeAvailabilityService,
  ) {}

  @Get()
  findAll(): Promise<EmployeeAvailability[]> {
    return this.employeeAvailabilityService.findAll();
  }

  @Post()
  create(
    @Body() data: CreateEmployeeAvailabilityDto,
  ): Promise<EmployeeAvailability> {
    return this.employeeAvailabilityService.create(data);
  }
}
