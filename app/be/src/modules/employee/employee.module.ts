import { Module } from '@nestjs/common';
import { EmployeeController } from './employee.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [EmployeeController],
})
export class EmployeeModule {}
