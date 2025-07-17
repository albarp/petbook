import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeBreaks } from './employee-breaks.entity';
import { Employee } from '../employee/employee.entity';
import { EmployeeBreaksService } from './employee-breaks.service';
import { EmployeeBreaksController } from './employee-breaks.controller';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeBreaks, Employee])],
  providers: [EmployeeBreaksService],
  controllers: [EmployeeBreaksController],
})
export class EmployeeBreaksModule {}
