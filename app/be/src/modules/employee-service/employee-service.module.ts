import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeService } from './employee-service.entity';
import { Employee } from '../employee/employee.entity';
import { Service } from '../service/service.entity';
import { EmployeeServiceService } from './employee-service.service';
import { EmployeeServiceController } from './employee-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeService, Employee, Service])],
  providers: [EmployeeServiceService],
  controllers: [EmployeeServiceController],
})
export class EmployeeServiceModule {}
