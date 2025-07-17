import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeHolidays } from './employee-holidays.entity';
import { Employee } from '../employee/employee.entity';
import { EmployeeHolidaysService } from './employee-holidays.service';
import { EmployeeHolidaysController } from './employee-holidays.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeHolidays, Employee])],
  providers: [EmployeeHolidaysService],
  controllers: [EmployeeHolidaysController],
})
export class EmployeeHolidaysModule {}
