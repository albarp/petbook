import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { Salon } from '../salon/salon.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Employee, Salon])],
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
