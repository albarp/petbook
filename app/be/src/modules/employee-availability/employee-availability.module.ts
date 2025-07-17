import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeAvailability } from './employee-availability.entity';
import { Employee } from '../employee/employee.entity';
import { EmployeeAvailabilityService } from './employee-availability.service';
import { EmployeeAvailabilityController } from './employee-availability.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeAvailability, Employee])],
  providers: [EmployeeAvailabilityService],
  controllers: [EmployeeAvailabilityController],
})
export class EmployeeAvailabilityModule {}
