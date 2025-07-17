import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeHolidays } from './employee-holidays.entity';
import { CreateEmployeeHolidaysDto } from './dto/create-employee-holidays.dto';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class EmployeeHolidaysService {
  constructor(
    @InjectRepository(EmployeeHolidays)
    private readonly employeeHolidaysRepository: Repository<EmployeeHolidays>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<EmployeeHolidays[]> {
    return this.employeeHolidaysRepository.find({ relations: ['employee'] });
  }

  async create(dto: CreateEmployeeHolidaysDto): Promise<EmployeeHolidays> {
    const employee = await this.employeeRepository.findOneByOrFail({
      id: dto.employeeId,
    });
    const holidays = this.employeeHolidaysRepository.create({
      start_date: dto.start_date,
      end_date: dto.end_date,
      description: dto.description ?? null,
      employee,
    });
    return this.employeeHolidaysRepository.save(holidays);
  }
}
