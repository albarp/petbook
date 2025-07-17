import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeBreaks } from './employee-breaks.entity';
import { CreateEmployeeBreaksDto } from './dto/create-employee-breaks.dto';
import { Employee } from '../employee/employee.entity';

@Injectable()
export class EmployeeBreaksService {
  constructor(
    @InjectRepository(EmployeeBreaks)
    private readonly employeeBreaksRepository: Repository<EmployeeBreaks>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  findAll(): Promise<EmployeeBreaks[]> {
    return this.employeeBreaksRepository.find({ relations: ['employee'] });
  }

  async create(dto: CreateEmployeeBreaksDto): Promise<EmployeeBreaks> {
    const employee = await this.employeeRepository.findOneByOrFail({
      id: dto.employeeId,
    });
    const breaks = this.employeeBreaksRepository.create({
      day_of_week: dto.day_of_week ?? null,
      break_date: dto.break_date ?? null,
      start_time: dto.start_time,
      end_time: dto.end_time,
      description: dto.description ?? null,
      employee,
    });
    return this.employeeBreaksRepository.save(breaks);
  }
}
